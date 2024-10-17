"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-resolve-all";
exports.ids = ["vendor-chunks/micromark-util-resolve-all"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-util-resolve-all/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/micromark-util-resolve-all/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   resolveAll: () => (/* binding */ resolveAll)\n/* harmony export */ });\n/**\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n * @typedef {import('micromark-util-types').Event} Event\n * @typedef {import('micromark-util-types').Resolver} Resolver\n */\n\n/**\n * Call all `resolveAll`s.\n *\n * @param {{resolveAll?: Resolver}[]} constructs\n * @param {Event[]} events\n * @param {TokenizeContext} context\n * @returns {Event[]}\n */\nfunction resolveAll(constructs, events, context) {\n  /** @type {Resolver[]} */\n  const called = []\n  let index = -1\n\n  while (++index < constructs.length) {\n    const resolve = constructs[index].resolveAll\n\n    if (resolve && !called.includes(resolve)) {\n      events = resolve(events, context)\n      called.push(resolve)\n    }\n  }\n\n  return events\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtcmVzb2x2ZS1hbGwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsYUFBYSxnREFBZ0Q7QUFDN0QsYUFBYSxzQ0FBc0M7QUFDbkQsYUFBYSx5Q0FBeUM7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzQkFBc0IsSUFBSTtBQUN0QyxXQUFXLFNBQVM7QUFDcEIsV0FBVyxpQkFBaUI7QUFDNUIsYUFBYTtBQUNiO0FBQ087QUFDUCxhQUFhLFlBQVk7QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3d3dy8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1yZXNvbHZlLWFsbC9pbmRleC5qcz9mMjUzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5Ub2tlbml6ZUNvbnRleHR9IFRva2VuaXplQ29udGV4dFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FdmVudH0gRXZlbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuUmVzb2x2ZXJ9IFJlc29sdmVyXG4gKi9cblxuLyoqXG4gKiBDYWxsIGFsbCBgcmVzb2x2ZUFsbGBzLlxuICpcbiAqIEBwYXJhbSB7e3Jlc29sdmVBbGw/OiBSZXNvbHZlcn1bXX0gY29uc3RydWN0c1xuICogQHBhcmFtIHtFdmVudFtdfSBldmVudHNcbiAqIEBwYXJhbSB7VG9rZW5pemVDb250ZXh0fSBjb250ZXh0XG4gKiBAcmV0dXJucyB7RXZlbnRbXX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVBbGwoY29uc3RydWN0cywgZXZlbnRzLCBjb250ZXh0KSB7XG4gIC8qKiBAdHlwZSB7UmVzb2x2ZXJbXX0gKi9cbiAgY29uc3QgY2FsbGVkID0gW11cbiAgbGV0IGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGNvbnN0cnVjdHMubGVuZ3RoKSB7XG4gICAgY29uc3QgcmVzb2x2ZSA9IGNvbnN0cnVjdHNbaW5kZXhdLnJlc29sdmVBbGxcblxuICAgIGlmIChyZXNvbHZlICYmICFjYWxsZWQuaW5jbHVkZXMocmVzb2x2ZSkpIHtcbiAgICAgIGV2ZW50cyA9IHJlc29sdmUoZXZlbnRzLCBjb250ZXh0KVxuICAgICAgY2FsbGVkLnB1c2gocmVzb2x2ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZXZlbnRzXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-util-resolve-all/index.js\n");

/***/ })

};
;