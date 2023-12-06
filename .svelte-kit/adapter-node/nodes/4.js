import * as server from '../entries/pages/register/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/register/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.9392c101.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.20f83c5e.js"];
export const stylesheets = [];
export const fonts = [];
