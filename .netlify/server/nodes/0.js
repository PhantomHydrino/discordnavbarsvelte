

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DLoZEp6G.js","_app/immutable/chunks/BNVMqHwu.js","_app/immutable/chunks/WqQjzbQs.js"];
export const stylesheets = [];
export const fonts = [];
