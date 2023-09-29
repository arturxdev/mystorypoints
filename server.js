const express = require("express");
const dayjs = require("dayjs");
var weekOfYear = require("dayjs/plugin/weekOfYear");
const pug = require("pug");
const bodyParser = require("body-parser");
const path = require("path");
const { v4: uuid } = require("uuid");
const { getTasks, createWeeksofMonth, createYear } = require("./functions");
dayjs.extend(weekOfYear);

const PORT = process.env.PORT || 3000;

const app = express();
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "assets")));

let todos = [
  {
    id: uuid(),
    name: "Taste htmx",
    done: true,
  },
  {
    id: uuid(),
    name: "Buy a unicorn",
    done: false,
  },
];

app.get("/", async (req, res) => {
  let year = createYear();
  let unclasificated = [];
  const actual = dayjs().week();
  res.render("index", { todos, year, actual, unclasificated });
});

app.post("/todos", (req, res) => {
  const { todo } = req.body;
  const newTodo = {
    id: uuid(),
    name: todo,
    done: false,
  };
  todos.push(newTodo);
  let template = pug.compileFile("views/includes/todo-item.pug");
  let markup = template({ todo: newTodo });
  res.send(markup);
});

app.get("/tasks", async (req, res) => {
  const { userId,months } = req.query;
  const tasks = await getTasks(userId,months);
  let year = createYear();
  let unclasificated = [];
  const actual = dayjs().week();
  for (let index = 0; index < tasks.length; index++) {
    if (tasks[index].endDate && tasks[index].storyPoint) {
      const issue =year[dayjs(tasks[index].endDate).week()-1]
      issue.total += tasks[index].storyPoint;
      issue.issues.push(tasks[index]);
    } else {
      unclasificated.push(tasks[index]);
    }
  }
  let template = pug.compileFile("views/includes/task-items.pug");
  let markup = template({ year, actual, unclasificated });
  res.send(markup);
});

app.listen(PORT);

console.log("Listening on port: " + PORT);
