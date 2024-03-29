// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dayjs from "dayjs";
import axios from "axios";
import weekOfYear from "dayjs/plugin/weekOfYear";
dayjs.extend(weekOfYear);

function getWeekNumber(date: any) {
  const firstDayOfYear: any = new Date(date.getFullYear(), 0, 1);
  const millisecondsPerDay: any = 24 * 60 * 60 * 1000;
  const diff = (date - firstDayOfYear) / millisecondsPerDay;
  return Math.ceil((diff + firstDayOfYear.getDay() + 1) / 7);
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
function genCal(dateStart: any, dateEnd: any) {
  const calStart =
    dateStart.getDay() === 0
      ? dateStart
      : dateStart.setDate(dateStart.getDate() - dateStart.getDay() + 1);
  const calEnd =
    dateStart.getDay() === 6
      ? dateEnd
      : dateEnd.setDate(dateEnd.getDate() + (6 - dateEnd.getDay()));
  const weeksArray = [];

  let currentWeek = [];
  let currentDate = new Date(calStart);

  while (currentDate <= calEnd) {
    const weekDay = currentDate.getDay();

    if (weekDay === 0 && currentWeek.length > 0) {
      weeksArray.push(currentWeek);
      currentWeek = [];
    }

    currentWeek.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (currentWeek.length > 0) {
    weeksArray.push(currentWeek);
  }
  let cal: any = {};
  for (let index = 0; index < weeksArray.length; index++) {
    const firstDayOfWeek = weeksArray[index][1];
    const year = firstDayOfWeek.getFullYear();
    const weekNumber = getWeekNumber(firstDayOfWeek);
    const lastDayOfWeek = weeksArray[index][weeksArray[index].length - 1];
    cal[`${year}-${weekNumber}`] = {
      year,
      week: weekNumber,
      start: firstDayOfWeek.toISOString().split("T")[0],
      end: lastDayOfWeek.toISOString().split("T")[0],
      days: weeksArray[index].map((day) => day.toISOString().split("T")[0]),
      total: 0,
      issues: [],
    };
  }
  return cal;
}
async function getTaskJira(
  userId: string | undefined | null,
  startAt: number = 0,
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
      "base64",
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
    cal = genCal(
      minor.subtract(2, "week").toDate(),
      major.add(1, "week").toDate(),
    );
    let issueTypes: string[] = [];
    for (let index = 0; index < tasks.length; index++) {
      if (tasks[index].endDate && tasks[index].storyPoint) {
        const issue =
          cal[
          `${dayjs(tasks[index].endDate).year()}-${dayjs(
            tasks[index].endDate,
          ).week()}`
          ];
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
    console.log(error.response.data);
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
  res: NextApiResponse<DataSuccess | DataFail>,
) {
  try {
    if (req.query.userId == "null") {
      return res
        .status(500)
        .json({ status: false, error: "error on load data" });
    }
    const data = await getTasks(
      req.query.months as string,
      req.query.userId as string,
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ status: false, error: "error on load data" });
  }
}
