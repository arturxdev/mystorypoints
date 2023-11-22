const express = require("express");
const dayjs = require("dayjs");
var weekOfYear = require("dayjs/plugin/weekOfYear");
const pug = require("pug");
const bodyParser = require("body-parser");
const path = require("path");
const { genCal, getMinMaxDates } = require("./functions");
const { getTasks } = require("./api");
require("dotenv").config();
dayjs.extend(weekOfYear);

const PORT = process.env.PORT || 3000;

const app = express();
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "assets")));

app.get("/", async (req, res) => {
  let cal = [];
  const { userId, months } = req.query;
  const jiraUser = "arturo.guerrero@koibanx.com";
  const token = process.env.TOKEN_JIRA;
  const actual = dayjs().week();
  let unclasificated = [];
  if (userId && months && token && jiraUser) {
    const tasks = await getTasks(userId, months, token, jiraUser);
    const { minor, major } = getMinMaxDates(tasks);
    cal = genCal(minor.subtract(2, "week").toDate(), major.toDate());
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
      }
    }
  }
  const params = { ...req.query, months: parseInt(req.query.months) };
  console.log(params);
  res.render("index", { actual, cal, unclasificated, params });
});

app.listen(PORT);

console.log("Listening on port: " + PORT);
