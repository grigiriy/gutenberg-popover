/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_block_js__);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("var _wp$richText = wp.richText,\n    registerFormatType = _wp$richText.registerFormatType,\n    toggleFormat = _wp$richText.toggleFormat,\n    applyFormat = _wp$richText.applyFormat,\n    removeFormat = _wp$richText.removeFormat,\n    remove = _wp$richText.remove,\n    replace = _wp$richText.replace;\nvar RichTextToolbarButton = wp.blockEditor.RichTextToolbarButton;\nvar _wp$compose = wp.compose,\n    compose = _wp$compose.compose,\n    ifCondition = _wp$compose.ifCondition;\n\n\nvar setPopoverContent = function setPopoverContent(value) {\n  var _value = prompt('what?');\n\n  console.log(value);\n  // if (value.activeFormats[0]) {\n  if (_value.length > 0) {\n    return applyFormat(value, {\n      type: 'popover/popover',\n      attributes: {\n        'data-toggle': 'popover',\n        'data-placement': 'top',\n        'data-content': _value,\n        style: 'border-bottom: solid 3px lightblue'\n      }\n    });\n  } else {\n    return applyFormat(value, {\n      type: 'popover/popover'\n    });\n  }\n};\n\nvar MyPopover = function MyPopover(_ref) {\n  var isActive = _ref.isActive,\n      value = _ref.value,\n      onChange = _ref.onChange;\n\n  return wp.element.createElement(RichTextToolbarButton, {\n    icon: 'admin-comments',\n    title: 'MyPopover',\n    onClick: function onClick() {\n      onChange(setPopoverContent(value));\n    },\n    isActive: isActive\n  });\n};\n\nregisterFormatType('popover/popover', {\n  title: 'MyPopover',\n  tagName: 'span',\n  className: 'pop',\n  edit: MyPopover\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfd3AkcmljaFRleHQgPSB3cC5yaWNoVGV4dCxcbiAgICByZWdpc3RlckZvcm1hdFR5cGUgPSBfd3AkcmljaFRleHQucmVnaXN0ZXJGb3JtYXRUeXBlLFxuICAgIHRvZ2dsZUZvcm1hdCA9IF93cCRyaWNoVGV4dC50b2dnbGVGb3JtYXQsXG4gICAgYXBwbHlGb3JtYXQgPSBfd3AkcmljaFRleHQuYXBwbHlGb3JtYXQsXG4gICAgcmVtb3ZlRm9ybWF0ID0gX3dwJHJpY2hUZXh0LnJlbW92ZUZvcm1hdCxcbiAgICByZW1vdmUgPSBfd3AkcmljaFRleHQucmVtb3ZlLFxuICAgIHJlcGxhY2UgPSBfd3AkcmljaFRleHQucmVwbGFjZTtcbnZhciBSaWNoVGV4dFRvb2xiYXJCdXR0b24gPSB3cC5ibG9ja0VkaXRvci5SaWNoVGV4dFRvb2xiYXJCdXR0b247XG52YXIgX3dwJGNvbXBvc2UgPSB3cC5jb21wb3NlLFxuICAgIGNvbXBvc2UgPSBfd3AkY29tcG9zZS5jb21wb3NlLFxuICAgIGlmQ29uZGl0aW9uID0gX3dwJGNvbXBvc2UuaWZDb25kaXRpb247XG5cblxudmFyIHNldFBvcG92ZXJDb250ZW50ID0gZnVuY3Rpb24gc2V0UG9wb3ZlckNvbnRlbnQodmFsdWUpIHtcbiAgdmFyIF92YWx1ZSA9IHByb21wdCgnd2hhdD8nKTtcblxuICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gIC8vIGlmICh2YWx1ZS5hY3RpdmVGb3JtYXRzWzBdKSB7XG4gIGlmIChfdmFsdWUubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBhcHBseUZvcm1hdCh2YWx1ZSwge1xuICAgICAgdHlwZTogJ3BvcG92ZXIvcG9wb3ZlcicsXG4gICAgICBhdHRyaWJ1dGVzOiB7XG4gICAgICAgICdkYXRhLXRvZ2dsZSc6ICdwb3BvdmVyJyxcbiAgICAgICAgJ2RhdGEtcGxhY2VtZW50JzogJ3RvcCcsXG4gICAgICAgICdkYXRhLWNvbnRlbnQnOiBfdmFsdWUsXG4gICAgICAgIHN0eWxlOiAnYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IGxpZ2h0Ymx1ZSdcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXBwbHlGb3JtYXQodmFsdWUsIHtcbiAgICAgIHR5cGU6ICdwb3BvdmVyL3BvcG92ZXInXG4gICAgfSk7XG4gIH1cbn07XG5cbnZhciBNeVBvcG92ZXIgPSBmdW5jdGlvbiBNeVBvcG92ZXIoX3JlZikge1xuICB2YXIgaXNBY3RpdmUgPSBfcmVmLmlzQWN0aXZlLFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuXG4gIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHRUb29sYmFyQnV0dG9uLCB7XG4gICAgaWNvbjogJ2FkbWluLWNvbW1lbnRzJyxcbiAgICB0aXRsZTogJ015UG9wb3ZlcicsXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgIG9uQ2hhbmdlKHNldFBvcG92ZXJDb250ZW50KHZhbHVlKSk7XG4gICAgfSxcbiAgICBpc0FjdGl2ZTogaXNBY3RpdmVcbiAgfSk7XG59O1xuXG5yZWdpc3RlckZvcm1hdFR5cGUoJ3BvcG92ZXIvcG9wb3ZlcicsIHtcbiAgdGl0bGU6ICdNeVBvcG92ZXInLFxuICB0YWdOYW1lOiAnc3BhbicsXG4gIGNsYXNzTmFtZTogJ3BvcCcsXG4gIGVkaXQ6IE15UG9wb3ZlclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);