import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CCMm1gFF.js","app":"_app/immutable/entry/app.BfJz4bsy.js","imports":["_app/immutable/entry/start.CCMm1gFF.js","_app/immutable/chunks/iaLqY4F0.js","_app/immutable/chunks/WqQjzbQs.js","_app/immutable/chunks/BkSvtNpJ.js","_app/immutable/entry/app.BfJz4bsy.js","_app/immutable/chunks/WqQjzbQs.js","_app/immutable/chunks/CqSt25Pw.js","_app/immutable/chunks/BNVMqHwu.js","_app/immutable/chunks/Cj_OqhnG.js","_app/immutable/chunks/BkSvtNpJ.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
