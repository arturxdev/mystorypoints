// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dayjs from "dayjs";
import axios from "axios";
import weekOfYear from "dayjs/plugin/weekOfYear";
dayjs.extend(weekOfYear);

function getWeekNumber(date: Date): number {
  const d = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}
// place files you want to import through the `$lib` alias in this folder.
function getMinMaxDates(tasks: any) {
  let minor = dayjs();
  let major = dayjs();
  for (let index = 0; index < tasks.length; index++) {
    if (!tasks[index].endDate) continue;
    const issueDate = dayjs(tasks[index].endDate);
    if (issueDate.isBefore(minor, "week")) minor = issueDate;
    if (issueDate.isAfter(major, "week")) major = issueDate;
  }
  return { minor, major };
}
function genCal(monthsToShow: number = 12) {
  // Get current date
  const dateEnd = new Date();
  // Calculate start date by subtracting months and setting to first day of that month
  const dateStart = new Date();
  dateStart.setMonth(dateStart.getMonth() - (monthsToShow - 1));
  dateStart.setDate(1); // Set to first day of the month

  // Adjust start date to the beginning of the week (Monday)
  const calStart = new Date(dateStart);
  calStart.setDate(calStart.getDate() - calStart.getDay() + 1);
  if (calStart.getDay() === 0) {
    calStart.setDate(calStart.getDate() - 6); // If Sunday, go back to previous Monday
  }

  // Adjust end date to the end of the week (Sunday)
  const calEnd = new Date(dateEnd);
  if (calEnd.getDay() !== 6) {
    calEnd.setDate(calEnd.getDate() + (6 - calEnd.getDay()));
  }

  // Generate array of weeks
  const weeksArray = [];
  let currentWeek = [];
  const currentDate = new Date(calStart);

  // Iterate through all dates from start to end
  while (currentDate <= calEnd) {
    // If it's Monday and we already have days in the current week, start a new week
    if (currentDate.getDay() === 1 && currentWeek.length > 0) {
      weeksArray.push(currentWeek);
      currentWeek = [];
    }

    // Add the current date to the current week
    currentWeek.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Add the last week if it has any days
  if (currentWeek.length > 0) {
    weeksArray.push(currentWeek);
  }

  // Create calendar object with week information
  const calendar: any = {};

  weeksArray.forEach((week) => {
    const firstDayOfWeek = week[0];
    const thursdayOfWeek = new Date(firstDayOfWeek);
    thursdayOfWeek.setDate(
      firstDayOfWeek.getDate() + (4 - firstDayOfWeek.getDay())
    );

    const year = thursdayOfWeek.getFullYear();
    const weekNumber = getWeekNumber(thursdayOfWeek);
    const lastDayOfWeek = week[week.length - 1];

    // Format dates as YYYY-MM-DD
    const formatDate = (date: Date) => date.toISOString().split("T")[0];

    // Create week entry in calendar
    calendar[`${year}-${weekNumber}`] = {
      year,
      week: weekNumber,
      start: formatDate(firstDayOfWeek),
      end: formatDate(lastDayOfWeek),
      days: week.map(formatDate),
      total: 0,
      issues: [],
    };
  });

  // Sort the calendar by date (most recent first)
  const sortedCalendar: any = {};
  Object.keys(calendar)
    .sort((a, b) => {
      const [yearA, weekA] = a.split("-").map(Number);
      const [yearB, weekB] = b.split("-").map(Number);
      if (yearA !== yearB) {
        return yearB - yearA; // Sort by year descending
      }
      return weekB - weekA; // Sort by week descending
    })
    .forEach((key) => {
      sortedCalendar[key] = calendar[key];
    });

  return sortedCalendar;
}
async function getTaskJira(
  userId: string | undefined | null,
  startAt: number = 0
) {
  const jiraUser = "arturo.guerrero@koibanx.com";
  const token = process.env.TOKEN_JIRA;
  const url = "https://koibanx.atlassian.net/rest/api/3/search";
  const params = {
    jql: `assignee = "${userId}" AND created >= startOfMonth(-6M) AND created <= endOfMonth()`,
    startAt,
    maxResults: 100,
  };
  const headers = {
    Authorization: `Basic ${Buffer.from(jiraUser + ":" + token).toString(
      "base64"
    )}`,
    Accept: "application/json",
  };
  const response = await axios({
    method: "get",
    url,
    headers,
    params,
  });
  return response.data;
}
async function getTasks(months: string, userId: string) {
  try {
    let cal = [];
    let unclasificated = [];
    let dataResults: any = [];
    const actual = dayjs().week();
    const jiraResponse = await getTaskJira(userId, 0);
    dataResults.push(...jiraResponse.issues);
    if (Math.ceil(jiraResponse.total / 100) > 1) {
      for (
        let index = 1;
        index < Math.ceil(jiraResponse.total / 100);
        index++
      ) {
        const jiraResponse = await getTaskJira(userId, index * 100);
        dataResults.push(...jiraResponse.issues);
      }
    }
    const tasks = dataResults.map((issue: any) => {
      return {
        summary: issue.fields.summary,
        storyPoint:
          issue.fields.customfield_10102 ?? issue.fields.customfield_10016,
        key: issue.key,
        startDate: issue.fields.customfield_10015,
        endDate: issue.fields.customfield_10143,
        resolution: issue.fields.status ? issue.fields.status.name : null,
        issueType: issue.fields.issuetype.name,
      };
    });
    const { minor, major } = getMinMaxDates(tasks);
    cal = genCal(12);
    let issueTypes: string[] = [];
    for (let index = 0; index < tasks.length; index++) {
      if (tasks[index].endDate) {
        const issue =
          cal[
            `${dayjs(tasks[index].endDate).year()}-${dayjs(
              tasks[index].endDate
            ).week()}`
          ];
        // console.log(issue);
        issue.total += tasks[index].storyPoint;
        issue.issues.push(tasks[index]);
      } else {
        unclasificated.push(tasks[index]);
        if (!issueTypes.includes(tasks[index].issueType))
          issueTypes.push(tasks[index].issueType);
      }
    }
    return { status: true, data: { actual, cal, unclasificated, issueTypes } };
  } catch (error: any) {
    console.log(error);
    return { status: false, error: "error on load data" };
  }
}

type DataSuccess = {
  status: boolean;
  data: any;
};
type DataFail = { status: boolean; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataSuccess | DataFail>
) {
  try {
    if (req.query.userId == "null") {
      return res
        .status(500)
        .json({ status: false, error: "error on load data" });
    }
    const data = await getTasks(
      req.query.months as string,
      req.query.userId as string
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ status: false, error: "error on load data" });
  }
}
