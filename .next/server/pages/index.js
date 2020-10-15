module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Main/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Main/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Main/styles.ts\");\nvar _jsxFileName = \"/home/efraim-andrade/Projects/Goomer/wpm-go/src/components/Main/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst unshuffledWords = [\"Arrow\", \"Tomato\", \"Star\", \"Wheel\"];\n\nconst Main = ({\n  title = \"WPM GOOOOO\"\n}) => {\n  const {\n    0: count,\n    1: setCount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(60);\n  const {\n    0: playing,\n    1: setPlaying\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: words,\n    1: setWords\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (playing) {\n      const countdown = setInterval(() => {\n        setCount(count => count > 0 ? count - 1 : 60);\n      }, 1000);\n      return () => {\n        clearInterval(countdown);\n      };\n    }\n  }, [playing]);\n  const shuffleArray = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(arr => {\n    return arr.map(a => [Math.random(), a]).sort().map(a => a[1]);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    //Concertar a parte da tipagem\n    if (words.length === 0) {\n      console.log(shuffleArray(unshuffledWords)); // setWords(shuffleArray(unshuffledWords));\n    }\n  }, []);\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, \"CONTAGEM REGRESSIVA: \", count), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"TextBox\"], {\n    type: \"text\",\n    onFocus: () => setPlaying(true),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL2luZGV4LnRzeD9iYmNjIl0sIm5hbWVzIjpbInVuc2h1ZmZsZWRXb3JkcyIsIk1haW4iLCJ0aXRsZSIsImNvdW50Iiwic2V0Q291bnQiLCJ1c2VTdGF0ZSIsInBsYXlpbmciLCJzZXRQbGF5aW5nIiwid29yZHMiLCJzZXRXb3JkcyIsInVzZUVmZmVjdCIsImNvdW50ZG93biIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNodWZmbGVBcnJheSIsInVzZUNhbGxiYWNrIiwiYXJyIiwibWFwIiwiYSIsIk1hdGgiLCJyYW5kb20iLCJzb3J0IiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUVBLE1BQU1BLGVBQWUsR0FBRyxDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE1BQXBCLEVBQTRCLE9BQTVCLENBQXhCOztBQUVBLE1BQU1DLElBQUksR0FBRyxDQUFDO0FBQUVDLE9BQUssR0FBRztBQUFWLENBQUQsS0FBOEI7QUFDekMsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkosc0RBQVEsQ0FBVyxFQUFYLENBQWxDO0FBRUFLLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlKLE9BQUosRUFBYTtBQUNYLFlBQU1LLFNBQVMsR0FBR0MsV0FBVyxDQUFDLE1BQU07QUFDbENSLGdCQUFRLENBQUVELEtBQUQsSUFBWUEsS0FBSyxHQUFHLENBQVIsR0FBWUEsS0FBSyxHQUFHLENBQXBCLEdBQXdCLEVBQXJDLENBQVI7QUFDRCxPQUY0QixFQUUxQixJQUYwQixDQUE3QjtBQUlBLGFBQU8sTUFBTTtBQUNYVSxxQkFBYSxDQUFDRixTQUFELENBQWI7QUFDRCxPQUZEO0FBR0Q7QUFDRixHQVZRLEVBVU4sQ0FBQ0wsT0FBRCxDQVZNLENBQVQ7QUFZQSxRQUFNUSxZQUFZLEdBQUdDLHlEQUFXLENBQUVDLEdBQUQsSUFBbUI7QUFDbEQsV0FBT0EsR0FBRyxDQUNQQyxHQURJLENBQ0NDLENBQUQsSUFBTyxDQUFDQyxJQUFJLENBQUNDLE1BQUwsRUFBRCxFQUFnQkYsQ0FBaEIsQ0FEUCxFQUVKRyxJQUZJLEdBR0pKLEdBSEksQ0FHQ0MsQ0FBRCxJQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUhSLENBQVA7QUFJRCxHQUwrQixFQUs3QixFQUw2QixDQUFoQztBQU9BUix5REFBUyxDQUFDLE1BQU07QUFDZDtBQUNBLFFBQUlGLEtBQUssQ0FBQ2MsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUN0QkMsYUFBTyxDQUFDQyxHQUFSLENBQVlWLFlBQVksQ0FBQ2QsZUFBRCxDQUF4QixFQURzQixDQUV0QjtBQUNEO0FBQ0YsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUErQkcsS0FBL0IsQ0FERixFQUdFLE1BQUMsK0NBQUQ7QUFBVyxRQUFJLEVBQUMsTUFBaEI7QUFBdUIsV0FBTyxFQUFFLE1BQU1JLFVBQVUsQ0FBQyxJQUFELENBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGO0FBU0QsQ0F6Q0Q7O0FBMkNlTixtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01haW4vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IHVuc2h1ZmZsZWRXb3JkcyA9IFtcIkFycm93XCIsIFwiVG9tYXRvXCIsIFwiU3RhclwiLCBcIldoZWVsXCJdO1xuXG5jb25zdCBNYWluID0gKHsgdGl0bGUgPSBcIldQTSBHT09PT09cIiB9KSA9PiB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoNjApO1xuICBjb25zdCBbcGxheWluZywgc2V0UGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICBjb25zdCBjb3VudGRvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldENvdW50KChjb3VudCkgPT4gKGNvdW50ID4gMCA/IGNvdW50IC0gMSA6IDYwKSk7XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd24pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtwbGF5aW5nXSk7XG5cbiAgY29uc3Qgc2h1ZmZsZUFycmF5ID0gdXNlQ2FsbGJhY2soKGFycjogc3RyaW5nW10pID0+IHtcbiAgICByZXR1cm4gYXJyXG4gICAgICAubWFwKChhKSA9PiBbTWF0aC5yYW5kb20oKSwgYV0pXG4gICAgICAuc29ydCgpXG4gICAgICAubWFwKChhKSA9PiBhWzFdKTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy9Db25jZXJ0YXIgYSBwYXJ0ZSBkYSB0aXBhZ2VtXG4gICAgaWYgKHdvcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc29sZS5sb2coc2h1ZmZsZUFycmF5KHVuc2h1ZmZsZWRXb3JkcykpO1xuICAgICAgLy8gc2V0V29yZHMoc2h1ZmZsZUFycmF5KHVuc2h1ZmZsZWRXb3JkcykpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFMuQ29udGFpbmVyPlxuICAgICAgPFMuVGl0bGU+Q09OVEFHRU0gUkVHUkVTU0lWQToge2NvdW50fTwvUy5UaXRsZT5cblxuICAgICAgPFMuVGV4dEJveCB0eXBlPVwidGV4dFwiIG9uRm9jdXM9eygpID0+IHNldFBsYXlpbmcodHJ1ZSl9IC8+XG5cbiAgICAgIHt9XG4gICAgPC9TLkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main/index.tsx\n");

/***/ }),

/***/ "./src/components/Main/styles.ts":
/*!***************************************!*\
  !*** ./src/components/Main/styles.ts ***!
  \***************************************/
/*! exports provided: Container, Title, Button, TextBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextBox\", function() { return TextBox; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main`\n  width: 100%;\n  height: 100%;\n  padding: 3rem;\n\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n`;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`\n  font-size: 2.5rem;\n`;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`\n  font-size: 2.5rem;\n`;\nconst TextBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input`\n  width: 100px;\n  height: 50px;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL3N0eWxlcy50cz82MzA0Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsIm1haW4iLCJUaXRsZSIsImgxIiwiQnV0dG9uIiwiYnV0dG9uIiwiVGV4dEJveCIsImlucHV0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxJQUFLOzs7Ozs7OztDQUE5QjtBQVVBLE1BQU1DLEtBQUssR0FBR0Ysd0RBQU0sQ0FBQ0csRUFBRzs7Q0FBeEI7QUFJQSxNQUFNQyxNQUFNLEdBQUdKLHdEQUFNLENBQUNLLE1BQU87O0NBQTdCO0FBSUEsTUFBTUMsT0FBTyxHQUFHTix3REFBTSxDQUFDTyxLQUFNOzs7Q0FBN0IiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluL3N0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQubWFpbmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogM3JlbTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDIuNXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBmb250LXNpemU6IDIuNXJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBUZXh0Qm94ID0gc3R5bGVkLmlucHV0YFxuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNTBweDtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main/styles.ts\n");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ \"./src/components/Main/index.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return _Main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC50cz8zNjE3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIE1haW4gfSBmcm9tICcuL01haW4nXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/index.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/components */ \"./src/components/index.ts\");\nvar _jsxFileName = \"/home/efraim-andrade/Projects/Goomer/wpm-go/src/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst pages = () => {\n  return __jsx(_components__WEBPACK_IMPORTED_MODULE_1__[\"Main\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 10\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pages);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsicGFnZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7O0FBRUEsTUFBTUEsS0FBZSxHQUFHLE1BQU07QUFDNUIsU0FBTyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELENBRkQ7O0FBSWVBLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCJ+L2NvbXBvbmVudHNcIjtcblxuY29uc3QgcGFnZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gPE1haW4gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlcztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });