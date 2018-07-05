/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/client/index.jsx","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/Result.jsx":
/*!*******************************!*\
  !*** ./src/client/Result.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Result; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// borra todas las paradas intermedias\nfunction beautifyRoute(points) {\n    console.log(points);\n    return points.reduce((route, point) => {\n        const resp = route.concat(point);\n\n        if (resp.length < 3) {\n            return resp;\n        }\n\n        if (resp[resp.length - 2].branch_id === resp[resp.length - 1].branch_id && resp[resp.length - 3].branch_id === resp[resp.length - 2].branch_id) {\n            resp.splice(resp.length - 2, 1);\n            return resp;\n        }\n        return resp;\n    }, []);\n}\n\nfunction Result(props) {\n    if (!props.route || !props.route.length) return null;\n    const route = beautifyRoute(props.route);\n    const lis = route.map((point, i) => {\n        const action = i % 2 == 0 ? \"Caminar hasta la parada \" : \"Bajarse en \";\n        const label = point.name + \" del ramal #\" + point.branch_id;\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"li\",\n            { key: i },\n            action + label\n        );\n    });\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        \"ul\",\n        null,\n        lis\n    );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L1Jlc3VsdC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9SZXN1bHQuanN4P2M0YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vLyBib3JyYSB0b2RhcyBsYXMgcGFyYWRhcyBpbnRlcm1lZGlhc1xuZnVuY3Rpb24gYmVhdXRpZnlSb3V0ZSggcG9pbnRzICl7XG4gICAgY29uc29sZS5sb2cocG9pbnRzKVxuICAgIHJldHVybiBwb2ludHMucmVkdWNlKCAocm91dGUscG9pbnQpPT4ge1xuICAgICAgICBjb25zdCByZXNwID0gcm91dGUuY29uY2F0KHBvaW50KVxuICAgICAgICBcbiAgICAgICAgaWYocmVzcC5sZW5ndGggPCAzKXtcbiAgICAgICAgICAgIHJldHVybiByZXNwXG4gICAgICAgIH1cblxuICAgICAgICBpZiggcmVzcFtyZXNwLmxlbmd0aCAtIDJdLmJyYW5jaF9pZCA9PT0gcmVzcFtyZXNwLmxlbmd0aCAtIDFdLmJyYW5jaF9pZCAmJlxuICAgICAgICAgICAgcmVzcFtyZXNwLmxlbmd0aCAtIDNdLmJyYW5jaF9pZCA9PT0gcmVzcFtyZXNwLmxlbmd0aCAtIDJdLmJyYW5jaF9pZCApe1xuICAgICAgICAgICAgcmVzcC5zcGxpY2UoIHJlc3AubGVuZ3RoIC0gMiAsIDEgKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcFxuXG4gICAgfSAsW10pXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0IChwcm9wcyl7XG4gICAgaWYoISBwcm9wcy5yb3V0ZSB8fCAhcHJvcHMucm91dGUubGVuZ3RoKVxuICAgICAgICByZXR1cm4gbnVsbCBcbiAgICBjb25zdCByb3V0ZSA9IGJlYXV0aWZ5Um91dGUocHJvcHMucm91dGUpXG4gICAgY29uc3QgbGlzID0gcm91dGUubWFwKCAocG9pbnQsaSkgID0+e1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBpICUgMiA9PSAwID8gXCJDYW1pbmFyIGhhc3RhIGxhIHBhcmFkYSBcIiA6IFwiQmFqYXJzZSBlbiBcIiBcbiAgICAgICAgY29uc3QgbGFiZWwgPSBwb2ludC5uYW1lICsgXCIgZGVsIHJhbWFsICNcIiArIHBvaW50LmJyYW5jaF9pZFxuICAgICAgICByZXR1cm4gPGxpIGtleT17aX0+eyBhY3Rpb24gKyBsYWJlbCB9PC9saT5cbiAgICB9KVxuICAgIHJldHVybiA8dWw+e2xpc308L3VsPlxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/Result.jsx\n");

/***/ }),

/***/ "./src/client/RouteForm.jsx":
/*!**********************************!*\
  !*** ./src/client/RouteForm.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RouterForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass RouterForm extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n    constructor(props) {\n        super(props);\n        this.state = { valueFrom: \"\", valueTo: \"\" };\n        this.getInputValueFrom = this.getInputValueFrom.bind(this);\n        this.getInputValueTo = this.getInputValueTo.bind(this);\n        this.printRoute = this.printRoute.bind(this);\n    }\n\n    getInputValueFrom(event) {\n        this.setState({ valueFrom: event.target.value });\n    }\n\n    getInputValueTo(event) {\n        this.setState({ valueTo: event.target.value });\n    }\n\n    printRoute() {\n\n        let googleKey = \"AIzaSyD-9eVfLZ8aOuIUrh84nDcvAZsS53RRoiQ\";\n\n        if (this.state.valueFrom != \"\" & this.state.valueTo != \"\") {\n            debugger;\n            const fromP = fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=\" + googleKey + \"&address=\" + this.state.valueFrom).then(r => r.json()).then(msg => {\n                return { lat: msg.results[0].geometry.location.lat, lng: msg.results[0].geometry.location.lng };\n            });\n\n            const toP = fetch(\"https://maps.googleapis.com/maps/api/geocode/json?key=\" + googleKey + \"&address=\" + this.state.valueTo).then(r => r.json()).then(msg => {\n                return { lat: msg.results[0].geometry.location.lat, lng: msg.results[0].geometry.location.lng };\n            });\n\n            Promise.all([fromP, toP]).then(([from, to]) => {\n                this.props.onFind({ from, to });\n            });\n        } else {\n            console.log(\"Defina un Desde y un Hasta\");\n        }\n    }\n\n    render() {\n\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"div\",\n            { className: \"row\" },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"div\",\n                { className: \"col-md-6\" },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    \"label\",\n                    { className: \"sp\" },\n                    \"Desde: \"\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"text\", value: this.state.valueFrom, onChange: this.getInputValueFrom, className: \"form-control\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    \"label\",\n                    { className: \"sp\" },\n                    \"Hasta: \"\n                ),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", { type: \"text\", value: this.state.valueTo, onChange: this.getInputValueTo, className: \"form-control\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    \"div\",\n                    { className: \"sp\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        \"button\",\n                        { onClick: this.printRoute, type: \"button\", className: \"btn btn-secondary btn-block\" },\n                        \"Buscar rutas\"\n                    )\n                )\n            )\n        );\n    }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L1JvdXRlRm9ybS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9Sb3V0ZUZvcm0uanN4PzRlZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZUZyb20gOiBcIlwiLCB2YWx1ZVRvOiBcIlwiIH1cbiAgICAgICAgdGhpcy5nZXRJbnB1dFZhbHVlRnJvbSA9IHRoaXMuZ2V0SW5wdXRWYWx1ZUZyb20uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRJbnB1dFZhbHVlVG8gPSB0aGlzLmdldElucHV0VmFsdWVUby5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnByaW50Um91dGUgPSB0aGlzLnByaW50Um91dGUuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgXG4gICAgZ2V0SW5wdXRWYWx1ZUZyb20oZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVGcm9tOiBldmVudC50YXJnZXQudmFsdWV9KTtcbiAgICB9XG4gICAgXG4gICAgZ2V0SW5wdXRWYWx1ZVRvKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlVG86IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH1cblxuICAgIHByaW50Um91dGUoKXtcbiAgICAgICAgXG4gICAgICAgIGxldCBnb29nbGVLZXkgPSBcIkFJemFTeUQtOWVWZkxaOGFPdUlVcmg4NG5EY3ZBWnNTNTNSUm9pUVwiXG4gICAgICAgIFxuICAgICAgICBpZih0aGlzLnN0YXRlLnZhbHVlRnJvbSAhPSBcIlwiICYgdGhpcy5zdGF0ZS52YWx1ZVRvICE9IFwiXCIpe1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIGNvbnN0IGZyb21QID0gIGZldGNoKFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9rZXk9XCIgKyBnb29nbGVLZXkgKyBcIiZhZGRyZXNzPVwiICsgdGhpcy5zdGF0ZS52YWx1ZUZyb20pXG4gICAgICAgICAgICAgICAgLnRoZW4oIHIgPT4gci5qc29uKCkgKVxuICAgICAgICAgICAgICAgIC50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7bGF0OiBtc2cucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsIGxuZzogbXNnLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRvUCA9ICBmZXRjaChcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/a2V5PVwiICsgZ29vZ2xlS2V5ICsgXCImYWRkcmVzcz1cIiArIHRoaXMuc3RhdGUudmFsdWVUbylcbiAgICAgICAgICAgICAgICAudGhlbiggciA9PiByLmpzb24oKSApXG4gICAgICAgICAgICAgICAgLnRoZW4obXNnID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtsYXQ6IG1zZy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCwgbG5nOiBtc2cucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmd9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW2Zyb21QLHRvUF0pXG4gICAgICAgICAgICAgICAgLnRoZW4oIChbZnJvbSx0b10pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZpbmQoIHsgZnJvbSAsIHRvIH0pXG4gICAgICAgICAgICAgICAgfSApXG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGVmaW5hIHVuIERlc2RlIHkgdW4gSGFzdGFcIilcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSBcImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzcFwiPkRlc2RlOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZUZyb219IG9uQ2hhbmdlPXt0aGlzLmdldElucHV0VmFsdWVGcm9tfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3BcIj5IYXN0YTogPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWVUb30gb25DaGFuZ2U9e3RoaXMuZ2V0SW5wdXRWYWx1ZVRvfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcmludFJvdXRlfSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLWJsb2NrXCI+QnVzY2FyIHJ1dGFzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTEE7QUFEQTtBQVlBO0FBQ0E7QUFoRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/client/RouteForm.jsx\n");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RouteForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RouteForm */ \"./src/client/RouteForm.jsx\");\n/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Result */ \"./src/client/Result.jsx\");\n/* harmony import */ var _navbar_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.jsx */ \"./src/client/navbar.jsx\");\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n    constructor(props) {\n        super(props);\n        this.findRoute = this.findRoute.bind(this);\n        this.state = {\n            route: {}\n        };\n    }\n\n    findRoute(routeData) {\n        console.log(routeData);\n        fetch(\"/route\", {\n            method: \"POST\",\n            headers: {\n                \"content-type\": \"application/json\"\n            },\n            body: JSON.stringify(routeData)\n        }).then(resp => resp.json()).then(route => {\n            this.setState({\n                route\n            });\n            const points = route.map(s => ({\n                lat: parseFloat(s.latitude),\n                lng: parseFloat(s.longitude)\n            }));\n            const waypoints = points.slice(1, -1).map(p => ({\n                location: p,\n                stopover: false\n            }));\n            points.forEach(parada => {\n                new google.maps.Marker({\n                    position: {\n                        lat: parada[\"lat\"],\n                        lng: parada[\"lng\"]\n                    },\n                    map: map,\n                    draggable: false\n                });\n            });\n\n            debugger;\n            var directionsDisplay = new google.maps.DirectionsRenderer({\n                polylineOptions: {\n                    strokeColor: 'red'\n                }\n            });\n            directionsDisplay.setMap(map);\n            var directionsService = new google.maps.DirectionsService();\n\n            directionsService.route({\n                origin: points[0],\n                destination: points[points.length - 1],\n                waypoints: waypoints,\n                optimizeWaypoints: true,\n                travelMode: 'DRIVING'\n            }, function (response, status) {\n                if (status === 'OK') {\n                    directionsDisplay.setDirections(response);\n                    directionsDisplay.setOptions({\n                        suppressMarkers: true\n                    });\n                } else {\n                    console.error(response);\n                }\n            });\n        }).catch(alert);\n    }\n\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'main',\n            null,\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null),\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                'div',\n                { className: 'container-fluid' },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { onFind: this.findRoute }),\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Result__WEBPACK_IMPORTED_MODULE_3__[\"default\"], { route: this.state.route })\n            )\n        );\n    }\n\n}\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n// Mapa de google maps\n// var directionsDisplay = new google.maps.DirectionsRenderer;\n// var directionsService = new google.maps.DirectionsService;\n\nvar bsas = {\n    lat: -34.6037,\n    lng: -58.3816\n};\n\nvar map = new google.maps.Map(document.getElementById('map'), {\n    zoom: 12,\n    center: bsas\n});\ndirectionsDisplay.setMap(map);\n\nfetch(\"/allRoutes\").then(resp => resp.json()).then().catch(console.error);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY2xpZW50L2luZGV4LmpzeD85OTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICAgIHJlbmRlclxufSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJvdXRlckZvcm0gZnJvbSAnLi9Sb3V0ZUZvcm0nO1xuaW1wb3J0IFJlc3VsdCBmcm9tICcuL1Jlc3VsdCc7XG5pbXBvcnQgTmF2QmFyUmVhY3QgZnJvbSAnLi9uYXZiYXIuanN4JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLmZpbmRSb3V0ZSA9IHRoaXMuZmluZFJvdXRlLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJvdXRlOiB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZFJvdXRlKHJvdXRlRGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhyb3V0ZURhdGEpXG4gICAgICAgIGZldGNoKFwiL3JvdXRlXCIsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJvdXRlRGF0YSlcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzcCA9PiByZXNwLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKHJvdXRlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50cyA9IHJvdXRlLm1hcChzID0+ICh7XG4gICAgICAgICAgICAgICAgICAgIGxhdDogcGFyc2VGbG9hdChzLmxhdGl0dWRlKSxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBwYXJzZUZsb2F0KHMubG9uZ2l0dWRlKVxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIGNvbnN0IHdheXBvaW50cyA9IHBvaW50cy5zbGljZSgxLCAtMSkubWFwKHAgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHAsXG4gICAgICAgICAgICAgICAgICAgIHN0b3BvdmVyOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKHBhcmFkYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IHBhcmFkYVtcImxhdFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHBhcmFkYVtcImxuZ1wiXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbnNEaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcih7XG4gICAgICAgICAgICAgICAgICAgIHBvbHlsaW5lT3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICdyZWQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnNEaXNwbGF5LnNldE1hcChtYXApO1xuICAgICAgICAgICAgICAgIHZhciBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZTtcblxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBwb2ludHNbMF0sXG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uOiBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICAgICAgICB3YXlwb2ludHM6IHdheXBvaW50cyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW1pemVXYXlwb2ludHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHRyYXZlbE1vZGU6ICdEUklWSU5HJ1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdPSycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbnNEaXNwbGF5LnNldERpcmVjdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uc0Rpc3BsYXkuc2V0T3B0aW9ucyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcHJlc3NNYXJrZXJzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goYWxlcnQpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxOYXZCYXJSZWFjdCAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJjb250YWluZXItZmx1aWRcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXJGb3JtIG9uRmluZCA9IHt0aGlzLmZpbmRSb3V0ZX0gLz4gXG4gICAgICAgICAgICAgICAgICAgIDxSZXN1bHQgcm91dGUgPSB7IHRoaXMuc3RhdGUucm91dGUgfS8+XG4gICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbnJlbmRlciggPCBBcHAgLz4gLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG4vLyBNYXBhIGRlIGdvb2dsZSBtYXBzXG4vLyB2YXIgZGlyZWN0aW9uc0Rpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyO1xuLy8gdmFyIGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlO1xuXG52YXIgYnNhcyA9IHtcbiAgICBsYXQ6IC0zNC42MDM3LFxuICAgIGxuZzogLTU4LjM4MTZcbn07XG5cbnZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuICAgIHpvb206IDEyLFxuICAgIGNlbnRlcjogYnNhc1xufSlcbmRpcmVjdGlvbnNEaXNwbGF5LnNldE1hcChtYXApO1xuXG5mZXRjaChcIi9hbGxSb3V0ZXNcIilcbiAgICAudGhlbihyZXNwID0+IHJlc3AuanNvbigpKVxuICAgIC50aGVuKClcbiAgICAuY2F0Y2goY29uc29sZS5lcnJvcikiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQVFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBbkZBO0FBQ0E7QUFxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/index.jsx\n");

/***/ }),

/***/ "./src/client/navbar.jsx":
/*!*******************************!*\
  !*** ./src/client/navbar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBarReact; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass NavBarReact extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n    constructor(props) {\n        super(props);\n    }\n    render() {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            \"nav\",\n            { className: \"navbar navbar-expand-sm navbar-dark bg-primary sticky-top navbar-style\" },\n            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                \"ul\",\n                { className: \"navbar-nav\" },\n                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                    \"li\",\n                    { className: \"nav-item active\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n                        \"a\",\n                        { className: \"navbar-brand\", href: \"#\" },\n                        \"Como llego?\"\n                    )\n                )\n            )\n        );\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L25hdmJhci5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NsaWVudC9uYXZiYXIuanN4PzFhM2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdkJhclJlYWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtc20gbmF2YmFyLWRhcmsgYmctcHJpbWFyeSBzdGlja3ktdG9wIG5hdmJhci1zdHlsZVwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+Q29tbyBsbGVnbz88L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgKTtcclxuICB9XHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFkQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/navbar.jsx\n");

/***/ })

/******/ });