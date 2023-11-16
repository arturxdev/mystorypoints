const express = require("express");
const dayjs = require("dayjs");
var weekOfYear = require("dayjs/plugin/weekOfYear");
const pug = require("pug");
const bodyParser = require("body-parser");
const path = require("path");
const { getTasks, createYear } = require("./functions");
dayjs.extend(weekOfYear);

const PORT = process.env.PORT || 3000;

const app = express();
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "assets")));

app.get("/", async (req, res) => {
  let years = {};
  const { userId, months} = req.query;
  const jiraUser ="arturo.guerrero@koibanx.com"
  const token ="ATATT3xFfGF0rN-jBiYpEMTHTWDLppql0m3ORKyOtEko-yu5duJ2CEie0L65UIIqaDzMMKg8upIX3wbPXdGUGdKNe0GSZ4SHSxvSjKM_yvwOV6pCLI155mJXBGkBTCqkLHrdUytU591DQUA8Zm94BXSw7paylGjZXxkVlAi-MYp6m6uv0Qa6_Bc=487A155B"
  const actual = dayjs().week();
  let minor = dayjs();
  let major = dayjs();
  let unclasificated = [];
  if (userId && months && token && jiraUser) {
    const tasks = await getTasks(userId, months, token, jiraUser);
    for (let index = 0; index < tasks.length; index++) {
      if (!tasks[index].endDate) continue;
      const issueDate = new dayjs(tasks[index].endDate);
      if (issueDate.isBefore(minor, "week")) minor = issueDate;
      if (issueDate.isAfter(major, "week")) major = issueDate;
    }
    years[minor.year().toString()] = createYear(minor.toDate());
    if (major.year() != minor.year()) {
      years[major.year().toString()] = createYear(major.toDate());
    }
    for (let index = 0; index < tasks.length; index++) {
      if (tasks[index].endDate && tasks[index].storyPoint) {
        const issue = years[dayjs(tasks[index].endDate).year()][
          dayjs(tasks[index].endDate).week() - 1
        ];
        issue.total += tasks[index].storyPoint;
        issue.issues.push(tasks[index]);
      } else {
        unclasificated.push(tasks[index]);
      }
    }
  }
  const params = { ...req.query, months: parseInt(req.query.months) };
  console.log(params);
  res.render("index", { actual, years, unclasificated, params });
});

app.listen(PORT);

console.log("Listening on port: " + PORT);
