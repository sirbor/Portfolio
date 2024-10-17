"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-space";
exports.ids = ["vendor-chunks/micromark-factory-space"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-factory-space/dev/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark-factory-space/dev/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factorySpace: () => (/* binding */ factorySpace)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n */\n\n\n\n/**\n * @param {Effects} effects\n * @param {State} ok\n * @param {string} type\n * @param {number} [max=Infinity]\n * @returns {State}\n */\nfunction factorySpace(effects, ok, type, max) {\n  const limit = max ? max - 1 : Number.POSITIVE_INFINITY\n  let size = 0\n\n  return start\n\n  /** @type {State} */\n  function start(code) {\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code)) {\n      effects.enter(type)\n      return prefix(code)\n    }\n\n    return ok(code)\n  }\n\n  /** @type {State} */\n  function prefix(code) {\n    if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code) && size++ < limit) {\n      effects.consume(code)\n      return prefix\n    }\n\n    effects.exit(type)\n    return ok(code)\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQSxhQUFhLHdDQUF3QztBQUNyRCxhQUFhLHNDQUFzQztBQUNuRDs7QUFFc0Q7O0FBRXREO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQSxhQUFhLE9BQU87QUFDcEI7QUFDQSxRQUFRLHVFQUFhO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsT0FBTztBQUNwQjtBQUNBLFFBQVEsdUVBQWE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3d3Ly4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1mYWN0b3J5LXNwYWNlL2Rldi9pbmRleC5qcz9kZjE5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FZmZlY3RzfSBFZmZlY3RzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlN0YXRlfSBTdGF0ZVxuICovXG5cbmltcG9ydCB7bWFya2Rvd25TcGFjZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuXG4vKipcbiAqIEBwYXJhbSB7RWZmZWN0c30gZWZmZWN0c1xuICogQHBhcmFtIHtTdGF0ZX0gb2tcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge251bWJlcn0gW21heD1JbmZpbml0eV1cbiAqIEByZXR1cm5zIHtTdGF0ZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBvaywgdHlwZSwgbWF4KSB7XG4gIGNvbnN0IGxpbWl0ID0gbWF4ID8gbWF4IC0gMSA6IE51bWJlci5QT1NJVElWRV9JTkZJTklUWVxuICBsZXQgc2l6ZSA9IDBcblxuICByZXR1cm4gc3RhcnRcblxuICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIodHlwZSlcbiAgICAgIHJldHVybiBwcmVmaXgoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIHByZWZpeChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkgJiYgc2l6ZSsrIDwgbGltaXQpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHByZWZpeFxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-factory-space/dev/index.js\n");

/***/ })

};
;