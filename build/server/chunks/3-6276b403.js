import { g as getTasks } from './index2-f71212ca.js';
import { f as fail, r as redirect } from './index-0087e825.js';
import 'dayjs';
import 'axios';
import 'dayjs/plugin/weekOfYear.js';

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

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-ab900775.js')).default;
const server_id = "src/routes/[userId]/+page.server.ts";
const imports = ["_app/immutable/nodes/3.700f79f1.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.20f83c5e.js","_app/immutable/chunks/each.e59479a4.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-6276b403.js.map
