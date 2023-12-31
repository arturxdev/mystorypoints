export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["demo.gif","favicon.png","icons/DEDUCCIONES PERSONALES.pdf","icons/GMM Versatil 1 - Luis Arturo Guerrero.pdf","icons/Reporte Conciliación STC Septiembre depositado operativo y CET.xlsx","icons/Summary.xls","icons/arrow-right-up-line.svg","icons/file-copy-line.svg","icons/loop-left-line.svg","icons/search-line.svg","logo-full.png","logo-fullok.png","logo-fullregular.png","logo-fullset.png","logo.png"]),
	mimeTypes: {".gif":"image/gif",".png":"image/png",".pdf":"application/pdf",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.a4c21e44.js","app":"_app/immutable/entry/app.92a82c6a.js","imports":["_app/immutable/entry/start.a4c21e44.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.ba08655e.js","_app/immutable/entry/app.92a82c6a.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.20f83c5e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[userId]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"userId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
