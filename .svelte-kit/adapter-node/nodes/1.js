

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a0ca2122.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.20f83c5e.js","_app/immutable/chunks/singletons.ba08655e.js"];
export const stylesheets = [];
export const fonts = [];
