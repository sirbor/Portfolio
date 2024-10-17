"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-normalize-identifier";
exports.ids = ["vendor-chunks/micromark-util-normalize-identifier"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-util-normalize-identifier/dev/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark-util-normalize-identifier/dev/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeIdentifier: () => (/* binding */ normalizeIdentifier)\n/* harmony export */ });\n/* harmony import */ var micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol/values.js */ \"(rsc)/./node_modules/micromark-util-symbol/values.js\");\n\n\n/**\n * Normalize an identifier (such as used in definitions).\n *\n * @param {string} value\n * @returns {string}\n */\nfunction normalizeIdentifier(value) {\n  return (\n    value\n      // Collapse Markdown whitespace.\n      .replace(/[\\t\\n\\r ]+/g, micromark_util_symbol_values_js__WEBPACK_IMPORTED_MODULE_0__.values.space)\n      // Trim.\n      .replace(/^ | $/g, '')\n      // Some characters are considered “uppercase”, but if their lowercase\n      // counterpart is uppercased will result in a different uppercase\n      // character.\n      // Hence, to get that form, we perform both lower- and uppercase.\n      // Upper case makes sure keys will not interact with default prototypal\n      // methods: no method is uppercase.\n      .toLowerCase()\n      .toUpperCase()\n  )\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtbm9ybWFsaXplLWlkZW50aWZpZXIvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUVBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3d3Ly4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLW5vcm1hbGl6ZS1pZGVudGlmaWVyL2Rldi9pbmRleC5qcz85YTdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dmFsdWVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wvdmFsdWVzLmpzJ1xuXG4vKipcbiAqIE5vcm1hbGl6ZSBhbiBpZGVudGlmaWVyIChzdWNoIGFzIHVzZWQgaW4gZGVmaW5pdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUlkZW50aWZpZXIodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICB2YWx1ZVxuICAgICAgLy8gQ29sbGFwc2UgTWFya2Rvd24gd2hpdGVzcGFjZS5cbiAgICAgIC5yZXBsYWNlKC9bXFx0XFxuXFxyIF0rL2csIHZhbHVlcy5zcGFjZSlcbiAgICAgIC8vIFRyaW0uXG4gICAgICAucmVwbGFjZSgvXiB8ICQvZywgJycpXG4gICAgICAvLyBTb21lIGNoYXJhY3RlcnMgYXJlIGNvbnNpZGVyZWQg4oCcdXBwZXJjYXNl4oCdLCBidXQgaWYgdGhlaXIgbG93ZXJjYXNlXG4gICAgICAvLyBjb3VudGVycGFydCBpcyB1cHBlcmNhc2VkIHdpbGwgcmVzdWx0IGluIGEgZGlmZmVyZW50IHVwcGVyY2FzZVxuICAgICAgLy8gY2hhcmFjdGVyLlxuICAgICAgLy8gSGVuY2UsIHRvIGdldCB0aGF0IGZvcm0sIHdlIHBlcmZvcm0gYm90aCBsb3dlci0gYW5kIHVwcGVyY2FzZS5cbiAgICAgIC8vIFVwcGVyIGNhc2UgbWFrZXMgc3VyZSBrZXlzIHdpbGwgbm90IGludGVyYWN0IHdpdGggZGVmYXVsdCBwcm90b3R5cGFsXG4gICAgICAvLyBtZXRob2RzOiBubyBtZXRob2QgaXMgdXBwZXJjYXNlLlxuICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgIC50b1VwcGVyQ2FzZSgpXG4gIClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-util-normalize-identifier/dev/index.js\n");

/***/ })

};
;