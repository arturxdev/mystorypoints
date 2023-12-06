import { g as getTasks } from "../../chunks/index2.js";
import { f as fail } from "../../chunks/index.js";
const load = async ({ url }) => {
  console.log("hola");
  const fetchTasks = async () => {
    const months = url.searchParams.get("months");
    const userId = url.searchParams.get("userId");
    console.log(months, userId, "hola");
    return getTasks(months, userId);
  };
  return { tasks: fetchTasks() };
};
const tasks = async ({ request }) => {
  const data = await request.formData();
  const months = data.get("months");
  const userId = data.get("userId");
  if (typeof months !== "string" || typeof userId !== "string" || !months || !userId) {
    return fail(400, { invalid: true });
  }
  return getTasks(months, userId);
};
const actions = { tasks };
export {
  actions,
  load
};
