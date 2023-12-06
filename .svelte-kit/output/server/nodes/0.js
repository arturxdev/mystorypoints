

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ff9f0a72.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.20f83c5e.js"];
export const stylesheets = ["_app/immutable/assets/0.2303b890.css"];
export const fonts = [];
