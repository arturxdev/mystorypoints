import { g as getTasks } from "../../../chunks/index2.js";
import { f as fail, r as redirect } from "../../../chunks/index.js";
let info = {};
const load = async ({ url, params }) => {
  const months = url.searchParams.get("months");
  const fetchTasks = async () => {
    return getTasks(months, params.userId);
  };
  info = { tasks: fetchTasks(), userId: params.userId, months };
  return info;
};
const tasks = async ({ request }) => {
  const data = await request.formData();
  const months = data.get("months");
  const userId = data.get("userId");
  console.log(months, userId);
  if (typeof months !== "string" || typeof userId !== "string" || !months || !userId) {
    return fail(400, { invalid: true });
  }
  throw redirect(301, `/${userId}?months=${months}`);
};
const actions = { tasks };
export {
  actions,
  load
};
