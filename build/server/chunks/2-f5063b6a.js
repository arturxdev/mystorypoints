import { g as getTasks } from './index2-f71212ca.js';
import { f as fail } from './index-0087e825.js';
import 'dayjs';
import 'axios';
import 'dayjs/plugin/weekOfYear.js';

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

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8d637aef.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.cec00ee7.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.20f83c5e.js","_app/immutable/chunks/each.e59479a4.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-f5063b6a.js.map
