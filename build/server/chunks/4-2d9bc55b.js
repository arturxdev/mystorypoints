const load = async ({ url }) => {
  console.log(url.searchParams.get("userId"));
  console.log(url.searchParams.get("months"));
  return { test: "hola" };
};
const tasks = async ({ request }) => {
  const data = await request.formData();
  const userId = data.get("userId");
  const months = data.get("months");
  console.log(userId, months);
  return { status: true };
};
const actions = { tasks };

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-1f7d9c45.js')).default;
const server_id = "src/routes/register/+page.server.ts";
const imports = ["_app/immutable/nodes/4.9392c101.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.20f83c5e.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-2d9bc55b.js.map
