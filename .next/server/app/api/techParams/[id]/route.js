"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/techParams/[id]/route";
exports.ids = ["app/api/techParams/[id]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FtechParams%2F%5Bid%5D%2Froute&page=%2Fapi%2FtechParams%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FtechParams%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cissif%5CND-project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cissif%5CND-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=http%3A%2F%2Flocalhost%3A3000&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FtechParams%2F%5Bid%5D%2Froute&page=%2Fapi%2FtechParams%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FtechParams%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cissif%5CND-project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cissif%5CND-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=http%3A%2F%2Flocalhost%3A3000&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/node-polyfill-headers */ \"(rsc)/./node_modules/next/dist/server/node-polyfill-headers.js\");\n/* harmony import */ var next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_headers__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_issif_ND_project_src_app_api_techParams_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/techParams/[id]/route.ts */ \"(rsc)/./src/app/api/techParams/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_1__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_2__.RouteKind.APP_ROUTE,\n        page: \"/api/techParams/[id]/route\",\n        pathname: \"/api/techParams/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/techParams/[id]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\issif\\\\ND-project\\\\src\\\\app\\\\api\\\\techParams\\\\[id]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_issif_ND_project_src_app_api_techParams_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/techParams/[id]/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0ZWNoUGFyYW1zJTJGJTVCaWQlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnRlY2hQYXJhbXMlMkYlNUJpZCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnRlY2hQYXJhbXMlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNpc3NpZiU1Q05ELXByb2plY3QlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q2lzc2lmJTVDTkQtcHJvamVjdCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD1odHRwJTNBJTJGJTJGbG9jYWxob3N0JTNBMzAwMCZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ3NEO0FBQ3ZDO0FBQ3FDO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ2lKOztBQUVqSiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvcml6b24tdGFpbHdpbmQtcmVhY3QtbmV4dGpzLz80ZjQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIm5leHQvZGlzdC9zZXJ2ZXIvbm9kZS1wb2x5ZmlsbC1oZWFkZXJzXCI7XG5pbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxpc3NpZlxcXFxORC1wcm9qZWN0XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHRlY2hQYXJhbXNcXFxcW2lkXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdGVjaFBhcmFtcy9baWRdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdGVjaFBhcmFtcy9baWRdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90ZWNoUGFyYW1zL1tpZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxpc3NpZlxcXFxORC1wcm9qZWN0XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHRlY2hQYXJhbXNcXFxcW2lkXVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS90ZWNoUGFyYW1zL1tpZF0vcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FtechParams%2F%5Bid%5D%2Froute&page=%2Fapi%2FtechParams%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FtechParams%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cissif%5CND-project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cissif%5CND-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=http%3A%2F%2Flocalhost%3A3000&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/techParams/[id]/route.ts":
/*!**********************************************!*\
  !*** ./src/app/api/techParams/[id]/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/db */ \"(rsc)/./src/app/lib/db.ts\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n//Get single  TechParams\nasync function GET(req, route) {\n    try {\n        const id = route.params.id;\n        const techParams = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].technicalParameter.findUnique({\n            where: {\n                id: id\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(techParams, {\n            status: 200\n        });\n    } catch (e) {\n        if (e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientKnownRequestError || e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientUnknownRequestError || e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientValidationError || e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientRustPanicError) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(e, {\n                status: 403\n            });\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(e, {\n            status: 500\n        });\n    }\n}\n//Update  TechParams\nasync function PUT(req, route) {\n    try {\n        const id = route.params.id;\n        const result = await req.json();\n        const { processId } = result;\n        if (!processId) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                message: \"You are missing a required data\"\n            }, {\n                status: 401\n            });\n        }\n        const techParams = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].technicalParameter.findUnique({\n            where: {\n                id\n            }\n        });\n        const updatedtechParams = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].technicalParameter.update({\n            where: {\n                id: id\n            },\n            data: {\n                ...result\n            }\n        });\n        const techParamsData = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].technicalParameter.findMany({\n            where: {\n                processId\n            },\n            orderBy: [\n                {\n                    createdAt: \"asc\"\n                }\n            ]\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(techParamsData, {\n            status: 200\n        });\n    } catch (e) {\n        if (e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientKnownRequestError || e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientUnknownRequestError || e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientValidationError || e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientRustPanicError) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(e, {\n                status: 403\n            });\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(e, {\n            status: 500\n        });\n    }\n}\n//Delete  TechParams\nasync function DELETE(req, route) {\n    try {\n        //TODO: restrict unathorized user : only normal and admin allowed\n        const id = route.params.id;\n        const deletedTechParams = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].technicalParameter.delete({\n            where: {\n                id: id\n            }\n        });\n        const techParamsData = await _lib_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].technicalParameter.findMany({\n            where: {\n                machineId: deletedTechParams.machineId\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(techParamsData, {\n            status: 200\n        });\n    } catch (e) {\n        if (e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientKnownRequestError || e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientUnknownRequestError || e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientValidationError || e instanceof _prisma_client__WEBPACK_IMPORTED_MODULE_2__.Prisma.PrismaClientRustPanicError) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(e, {\n                status: 403\n            });\n        }\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(e, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90ZWNoUGFyYW1zL1tpZF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3RDtBQUNuQjtBQUN1QjtBQUU1RCx3QkFBd0I7QUFDakIsZUFBZUcsSUFBSUMsR0FBZ0IsRUFBRUMsS0FBaUM7SUFDM0UsSUFBSTtRQUNGLE1BQU1DLEtBQUtELE1BQU1FLE1BQU0sQ0FBQ0QsRUFBRTtRQUMxQixNQUFNRSxhQUNKLE1BQU1QLCtDQUFNQSxDQUFDUSxrQkFBa0IsQ0FBQ0MsVUFBVSxDQUFDO1lBQ3pDQyxPQUFPO2dCQUFFTCxJQUFJQTtZQUFHO1FBQ2xCO1FBQ0YsT0FBT04sa0ZBQVlBLENBQUNZLElBQUksQ0FBQ0osWUFBWTtZQUFFSyxRQUFRO1FBQUk7SUFDckQsRUFBRSxPQUFPQyxHQUFHO1FBQ1YsSUFDRUEsYUFBYVosa0RBQU1BLENBQUNhLDZCQUE2QixJQUNqREQsYUFBYVosa0RBQU1BLENBQUNjLCtCQUErQixJQUNuREYsYUFBYVosa0RBQU1BLENBQUNlLDJCQUEyQixJQUMvQ0gsYUFBYVosa0RBQU1BLENBQUNnQiwwQkFBMEIsRUFDOUM7WUFDQSxPQUFPbEIsa0ZBQVlBLENBQUNZLElBQUksQ0FBQ0UsR0FBRztnQkFBRUQsUUFBUTtZQUFJO1FBQzVDO1FBQ0EsT0FBT2Isa0ZBQVlBLENBQUNZLElBQUksQ0FBQ0UsR0FBRztZQUFFRCxRQUFRO1FBQUk7SUFDNUM7QUFDRjtBQUVBLG9CQUFvQjtBQUNiLGVBQWVNLElBQUlmLEdBQWdCLEVBQUVDLEtBQWlDO0lBQzNFLElBQUk7UUFDRixNQUFNQyxLQUFLRCxNQUFNRSxNQUFNLENBQUNELEVBQUU7UUFDMUIsTUFBTWMsU0FBNkIsTUFBTWhCLElBQUlRLElBQUk7UUFDakQsTUFBTSxFQUFFUyxTQUFTLEVBQUUsR0FBR0Q7UUFFdEIsSUFBSSxDQUFDQyxXQUFXO1lBQ2QsT0FBT3JCLGtGQUFZQSxDQUFDWSxJQUFJLENBQ3RCO2dCQUFFVSxTQUFTO1lBQWtDLEdBQzdDO2dCQUFFVCxRQUFRO1lBQUk7UUFFbEI7UUFFQSxNQUFNTCxhQUNKLE1BQU1QLCtDQUFNQSxDQUFDUSxrQkFBa0IsQ0FBQ0MsVUFBVSxDQUFDO1lBQ3pDQyxPQUFPO2dCQUFFTDtZQUFHO1FBQ2Q7UUFFRixNQUFNaUIsb0JBQW9CLE1BQU10QiwrQ0FBTUEsQ0FBQ1Esa0JBQWtCLENBQUNlLE1BQU0sQ0FBQztZQUMvRGIsT0FBTztnQkFDTEwsSUFBSUE7WUFDTjtZQUNBbUIsTUFBTTtnQkFDSixHQUFHTCxNQUFNO1lBQ1g7UUFDRjtRQUVBLE1BQU1NLGlCQUFpQixNQUFNekIsK0NBQU1BLENBQUNRLGtCQUFrQixDQUFDa0IsUUFBUSxDQUFDO1lBQzlEaEIsT0FBTztnQkFBRVU7WUFBVTtZQUNuQk8sU0FBUztnQkFBQztvQkFBRUMsV0FBVztnQkFBTTthQUFFO1FBQ2pDO1FBRUEsT0FBTzdCLGtGQUFZQSxDQUFDWSxJQUFJLENBQUNjLGdCQUFnQjtZQUFFYixRQUFRO1FBQUk7SUFDekQsRUFBRSxPQUFPQyxHQUFHO1FBQ1YsSUFDRUEsYUFBYVosa0RBQU1BLENBQUNhLDZCQUE2QixJQUNqREQsYUFBYVosa0RBQU1BLENBQUNjLCtCQUErQixJQUNuREYsYUFBYVosa0RBQU1BLENBQUNlLDJCQUEyQixJQUMvQ0gsYUFBYVosa0RBQU1BLENBQUNnQiwwQkFBMEIsRUFDOUM7WUFDQSxPQUFPbEIsa0ZBQVlBLENBQUNZLElBQUksQ0FBQ0UsR0FBRztnQkFBRUQsUUFBUTtZQUFJO1FBQzVDO1FBQ0EsT0FBT2Isa0ZBQVlBLENBQUNZLElBQUksQ0FBQ0UsR0FBRztZQUFFRCxRQUFRO1FBQUk7SUFDNUM7QUFDRjtBQUVBLG9CQUFvQjtBQUNiLGVBQWVpQixPQUNwQjFCLEdBQWdCLEVBQ2hCQyxLQUFpQztJQUVqQyxJQUFJO1FBQ0YsaUVBQWlFO1FBQ2pFLE1BQU1DLEtBQUtELE1BQU1FLE1BQU0sQ0FBQ0QsRUFBRTtRQUMxQixNQUFNeUIsb0JBQW9CLE1BQU05QiwrQ0FBTUEsQ0FBQ1Esa0JBQWtCLENBQUN1QixNQUFNLENBQUM7WUFDL0RyQixPQUFPO2dCQUNMTCxJQUFJQTtZQUNOO1FBQ0Y7UUFDQSxNQUFNb0IsaUJBQWlCLE1BQU16QiwrQ0FBTUEsQ0FBQ1Esa0JBQWtCLENBQUNrQixRQUFRLENBQUM7WUFDOURoQixPQUFPO2dCQUFFc0IsV0FBV0Ysa0JBQWtCRSxTQUFTO1lBQUM7UUFDbEQ7UUFDQSxPQUFPakMsa0ZBQVlBLENBQUNZLElBQUksQ0FBQ2MsZ0JBQWdCO1lBQUViLFFBQVE7UUFBSTtJQUN6RCxFQUFFLE9BQU9DLEdBQUc7UUFDVixJQUNFQSxhQUFhWixrREFBTUEsQ0FBQ2EsNkJBQTZCLElBQ2pERCxhQUFhWixrREFBTUEsQ0FBQ2MsK0JBQStCLElBQ25ERixhQUFhWixrREFBTUEsQ0FBQ2UsMkJBQTJCLElBQy9DSCxhQUFhWixrREFBTUEsQ0FBQ2dCLDBCQUEwQixFQUM5QztZQUNBLE9BQU9sQixrRkFBWUEsQ0FBQ1ksSUFBSSxDQUFDRSxHQUFHO2dCQUFFRCxRQUFRO1lBQUk7UUFDNUM7UUFDQSxPQUFPYixrRkFBWUEsQ0FBQ1ksSUFBSSxDQUFDRSxHQUFHO1lBQUVELFFBQVE7UUFBSTtJQUM1QztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9yaXpvbi10YWlsd2luZC1yZWFjdC1uZXh0anMvLi9zcmMvYXBwL2FwaS90ZWNoUGFyYW1zL1tpZF0vcm91dGUudHM/OWYzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9kYic7XHJcbmltcG9ydCB7IFByaXNtYSwgVGVjaG5pY2FsUGFyYW1ldGVyIH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxuLy9HZXQgc2luZ2xlICBUZWNoUGFyYW1zXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCwgcm91dGU6IHsgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfSB9KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGlkID0gcm91dGUucGFyYW1zLmlkO1xyXG4gICAgY29uc3QgdGVjaFBhcmFtczogVGVjaG5pY2FsUGFyYW1ldGVyID1cclxuICAgICAgYXdhaXQgcHJpc21hLnRlY2huaWNhbFBhcmFtZXRlci5maW5kVW5pcXVlKHtcclxuICAgICAgICB3aGVyZTogeyBpZDogaWQgfSxcclxuICAgICAgfSk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odGVjaFBhcmFtcywgeyBzdGF0dXM6IDIwMCB9KTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGUgaW5zdGFuY2VvZiBQcmlzbWEuUHJpc21hQ2xpZW50S25vd25SZXF1ZXN0RXJyb3IgfHxcclxuICAgICAgZSBpbnN0YW5jZW9mIFByaXNtYS5QcmlzbWFDbGllbnRVbmtub3duUmVxdWVzdEVycm9yIHx8XHJcbiAgICAgIGUgaW5zdGFuY2VvZiBQcmlzbWEuUHJpc21hQ2xpZW50VmFsaWRhdGlvbkVycm9yIHx8XHJcbiAgICAgIGUgaW5zdGFuY2VvZiBQcmlzbWEuUHJpc21hQ2xpZW50UnVzdFBhbmljRXJyb3JcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZSwgeyBzdGF0dXM6IDQwMyB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihlLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy9VcGRhdGUgIFRlY2hQYXJhbXNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXE6IE5leHRSZXF1ZXN0LCByb3V0ZTogeyBwYXJhbXM6IHsgaWQ6IHN0cmluZyB9IH0pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgaWQgPSByb3V0ZS5wYXJhbXMuaWQ7XHJcbiAgICBjb25zdCByZXN1bHQ6IFRlY2huaWNhbFBhcmFtZXRlciA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBjb25zdCB7IHByb2Nlc3NJZCB9ID0gcmVzdWx0O1xyXG5cclxuICAgIGlmICghcHJvY2Vzc0lkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IG1lc3NhZ2U6ICdZb3UgYXJlIG1pc3NpbmcgYSByZXF1aXJlZCBkYXRhJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0ZWNoUGFyYW1zOiBUZWNobmljYWxQYXJhbWV0ZXIgPVxyXG4gICAgICBhd2FpdCBwcmlzbWEudGVjaG5pY2FsUGFyYW1ldGVyLmZpbmRVbmlxdWUoe1xyXG4gICAgICAgIHdoZXJlOiB7IGlkIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWR0ZWNoUGFyYW1zID0gYXdhaXQgcHJpc21hLnRlY2huaWNhbFBhcmFtZXRlci51cGRhdGUoe1xyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIGlkOiBpZCxcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIC4uLnJlc3VsdCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHRlY2hQYXJhbXNEYXRhID0gYXdhaXQgcHJpc21hLnRlY2huaWNhbFBhcmFtZXRlci5maW5kTWFueSh7XHJcbiAgICAgIHdoZXJlOiB7IHByb2Nlc3NJZCB9LFxyXG4gICAgICBvcmRlckJ5OiBbeyBjcmVhdGVkQXQ6ICdhc2MnIH1dLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHRlY2hQYXJhbXNEYXRhLCB7IHN0YXR1czogMjAwIH0pO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIGlmIChcclxuICAgICAgZSBpbnN0YW5jZW9mIFByaXNtYS5QcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvciB8fFxyXG4gICAgICBlIGluc3RhbmNlb2YgUHJpc21hLlByaXNtYUNsaWVudFVua25vd25SZXF1ZXN0RXJyb3IgfHxcclxuICAgICAgZSBpbnN0YW5jZW9mIFByaXNtYS5QcmlzbWFDbGllbnRWYWxpZGF0aW9uRXJyb3IgfHxcclxuICAgICAgZSBpbnN0YW5jZW9mIFByaXNtYS5QcmlzbWFDbGllbnRSdXN0UGFuaWNFcnJvclxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihlLCB7IHN0YXR1czogNDAzIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGUsIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vL0RlbGV0ZSAgVGVjaFBhcmFtc1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKFxyXG4gIHJlcTogTmV4dFJlcXVlc3QsXHJcbiAgcm91dGU6IHsgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfSB9LFxyXG4pIHtcclxuICB0cnkge1xyXG4gICAgLy9UT0RPOiByZXN0cmljdCB1bmF0aG9yaXplZCB1c2VyIDogb25seSBub3JtYWwgYW5kIGFkbWluIGFsbG93ZWRcclxuICAgIGNvbnN0IGlkID0gcm91dGUucGFyYW1zLmlkO1xyXG4gICAgY29uc3QgZGVsZXRlZFRlY2hQYXJhbXMgPSBhd2FpdCBwcmlzbWEudGVjaG5pY2FsUGFyYW1ldGVyLmRlbGV0ZSh7XHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCB0ZWNoUGFyYW1zRGF0YSA9IGF3YWl0IHByaXNtYS50ZWNobmljYWxQYXJhbWV0ZXIuZmluZE1hbnkoe1xyXG4gICAgICB3aGVyZTogeyBtYWNoaW5lSWQ6IGRlbGV0ZWRUZWNoUGFyYW1zLm1hY2hpbmVJZCB9LFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odGVjaFBhcmFtc0RhdGEsIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBlIGluc3RhbmNlb2YgUHJpc21hLlByaXNtYUNsaWVudEtub3duUmVxdWVzdEVycm9yIHx8XHJcbiAgICAgIGUgaW5zdGFuY2VvZiBQcmlzbWEuUHJpc21hQ2xpZW50VW5rbm93blJlcXVlc3RFcnJvciB8fFxyXG4gICAgICBlIGluc3RhbmNlb2YgUHJpc21hLlByaXNtYUNsaWVudFZhbGlkYXRpb25FcnJvciB8fFxyXG4gICAgICBlIGluc3RhbmNlb2YgUHJpc21hLlByaXNtYUNsaWVudFJ1c3RQYW5pY0Vycm9yXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGUsIHsgc3RhdHVzOiA0MDMgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oZSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByaXNtYSIsIlByaXNtYSIsIkdFVCIsInJlcSIsInJvdXRlIiwiaWQiLCJwYXJhbXMiLCJ0ZWNoUGFyYW1zIiwidGVjaG5pY2FsUGFyYW1ldGVyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwianNvbiIsInN0YXR1cyIsImUiLCJQcmlzbWFDbGllbnRLbm93blJlcXVlc3RFcnJvciIsIlByaXNtYUNsaWVudFVua25vd25SZXF1ZXN0RXJyb3IiLCJQcmlzbWFDbGllbnRWYWxpZGF0aW9uRXJyb3IiLCJQcmlzbWFDbGllbnRSdXN0UGFuaWNFcnJvciIsIlBVVCIsInJlc3VsdCIsInByb2Nlc3NJZCIsIm1lc3NhZ2UiLCJ1cGRhdGVkdGVjaFBhcmFtcyIsInVwZGF0ZSIsImRhdGEiLCJ0ZWNoUGFyYW1zRGF0YSIsImZpbmRNYW55Iiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsIkRFTEVURSIsImRlbGV0ZWRUZWNoUGFyYW1zIiwiZGVsZXRlIiwibWFjaGluZUlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/techParams/[id]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/db.ts":
/*!***************************!*\
  !*** ./src/app/lib/db.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n//const db_url = 'postgresql://postgres:mau1234@localhost:5433/postgres'; //Uthman\nconst db_url = \"postgresql://postgres:majeed123@localhost:5432/postgres\"; //Majeed\n//const db_url=\"postgresql://postgres:159357@localhost:5432/bpms_Db?schema=public\";  //Shiraz\nconst prismaClientSingleton = ()=>{\n    return new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n        datasources: {\n            db: {\n                url: db_url\n            }\n        }\n    });\n};\nconst prisma = globalThis.prisma ?? prismaClientSingleton();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\nif (true) globalThis.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsa0ZBQWtGO0FBQ2xGLE1BQU1DLFNBQVMsMkRBQTJELFFBQVE7QUFDbEYsNkZBQTZGO0FBRTdGLE1BQU1DLHdCQUF3QjtJQUM1QixPQUFPLElBQUlGLHdEQUFZQSxDQUFDO1FBQ3RCRyxhQUFhO1lBQ1hDLElBQUk7Z0JBQUVDLEtBQUtKO1lBQU87UUFDcEI7SUFDRjtBQUNGO0FBTUEsTUFBTUssU0FBU0MsV0FBV0QsTUFBTSxJQUFJSjtBQUVwQyxpRUFBZUksTUFBTUEsRUFBQztBQUV0QixJQUFJRSxJQUF5QixFQUFjRCxXQUFXRCxNQUFNLEdBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9yaXpvbi10YWlsd2luZC1yZWFjdC1uZXh0anMvLi9zcmMvYXBwL2xpYi9kYi50cz84NzVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbi8vY29uc3QgZGJfdXJsID0gJ3Bvc3RncmVzcWw6Ly9wb3N0Z3JlczptYXUxMjM0QGxvY2FsaG9zdDo1NDMzL3Bvc3RncmVzJzsgLy9VdGhtYW5cclxuY29uc3QgZGJfdXJsID0gJ3Bvc3RncmVzcWw6Ly9wb3N0Z3JlczptYWplZWQxMjNAbG9jYWxob3N0OjU0MzIvcG9zdGdyZXMnOyAvL01hamVlZFxyXG4vL2NvbnN0IGRiX3VybD1cInBvc3RncmVzcWw6Ly9wb3N0Z3JlczoxNTkzNTdAbG9jYWxob3N0OjU0MzIvYnBtc19EYj9zY2hlbWE9cHVibGljXCI7ICAvL1NoaXJhelxyXG5cclxuY29uc3QgcHJpc21hQ2xpZW50U2luZ2xldG9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBuZXcgUHJpc21hQ2xpZW50KHtcclxuICAgIGRhdGFzb3VyY2VzOiB7XHJcbiAgICAgIGRiOiB7IHVybDogZGJfdXJsIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59O1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIHZhciBwcmlzbWE6IHVuZGVmaW5lZCB8IFJldHVyblR5cGU8dHlwZW9mIHByaXNtYUNsaWVudFNpbmdsZXRvbj47XHJcbn1cclxuXHJcbmNvbnN0IHByaXNtYSA9IGdsb2JhbFRoaXMucHJpc21hID8/IHByaXNtYUNsaWVudFNpbmdsZXRvbigpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbFRoaXMucHJpc21hID0gcHJpc21hO1xyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZGJfdXJsIiwicHJpc21hQ2xpZW50U2luZ2xldG9uIiwiZGF0YXNvdXJjZXMiLCJkYiIsInVybCIsInByaXNtYSIsImdsb2JhbFRoaXMiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2FtechParams%2F%5Bid%5D%2Froute&page=%2Fapi%2FtechParams%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FtechParams%2F%5Bid%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cissif%5CND-project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cissif%5CND-project&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=http%3A%2F%2Flocalhost%3A3000&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();