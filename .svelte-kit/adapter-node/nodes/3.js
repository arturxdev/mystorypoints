import * as server from '../entries/pages/_userId_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_userId_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[userId]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.700f79f1.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.20f83c5e.js","_app/immutable/chunks/each.e59479a4.js"];
export const stylesheets = [];
export const fonts = [];
