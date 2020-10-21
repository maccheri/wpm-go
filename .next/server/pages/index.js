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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Main/styles.ts\");\nvar _jsxFileName = \"/home/efraim-andrade/Projects/Goomer/wpm-go/src/components/Main/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst unshuffledWords = [\"Arrow\", \"Tomato\", \"Star\", \"Wheel\"];\n\nconst Main = ({\n  title = \"WPM GOOOOO\"\n}) => {\n  const {\n    0: currentWord,\n    1: setCurrentWord\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: currentIndex,\n    1: setCurrentIndex\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: count,\n    1: setCount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(60);\n  const {\n    0: playing,\n    1: setPlaying\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: words,\n    1: setWords\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: typed,\n    1: setTyped\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (playing) {\n      const countdown = setInterval(() => {\n        setCount(count => count > 0 ? count - 1 : 60);\n      }, 1000);\n      return () => {\n        clearInterval(countdown);\n      };\n    }\n  }, [playing]);\n  const shuffleArray = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(arr => {\n    return arr.map(a => [Math.random(), a]).sort().map(a => a[1]);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (words.length === 0) {\n      const shuffledArray = shuffleArray(unshuffledWords);\n      setWords(shuffledArray);\n    }\n  }, []);\n  const checkWord = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(() => {\n    console.log(\"checkWord -> words[currentIndex]\", words[currentIndex]);\n    return words[currentIndex].toLowerCase().startsWith(currentWord); // return words.some((word) => word.startsWith(currentWord));\n  }, [currentWord, currentIndex, words]);\n\n  const checkSpace = e => {\n    if (e.key === \" \") {\n      setCurrentIndex(index => index + 1);\n    }\n  };\n\n  const onUserType = e => {\n    setCurrentWord(e.target.value);\n    console.log(checkWord());\n  };\n\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, \"CONTAGEM REGRESSIVA: \", count), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"TextBox\"], {\n    type: \"text\",\n    onFocus: () => setPlaying(true),\n    onChange: e => onUserType(e),\n    onKeyPress: e => checkSpace(e),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }), words.map(word => __jsx(\"p\", {\n    key: word,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, word)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL2luZGV4LnRzeD9iYmNjIl0sIm5hbWVzIjpbInVuc2h1ZmZsZWRXb3JkcyIsIk1haW4iLCJ0aXRsZSIsImN1cnJlbnRXb3JkIiwic2V0Q3VycmVudFdvcmQiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImNvdW50Iiwic2V0Q291bnQiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsIndvcmRzIiwic2V0V29yZHMiLCJ0eXBlZCIsInNldFR5cGVkIiwidXNlRWZmZWN0IiwiY291bnRkb3duIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2h1ZmZsZUFycmF5IiwidXNlQ2FsbGJhY2siLCJhcnIiLCJtYXAiLCJhIiwiTWF0aCIsInJhbmRvbSIsInNvcnQiLCJsZW5ndGgiLCJzaHVmZmxlZEFycmF5IiwiY2hlY2tXb3JkIiwiY29uc29sZSIsImxvZyIsInRvTG93ZXJDYXNlIiwic3RhcnRzV2l0aCIsImNoZWNrU3BhY2UiLCJlIiwia2V5IiwiaW5kZXgiLCJvblVzZXJUeXBlIiwidGFyZ2V0IiwidmFsdWUiLCJ3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBRUEsTUFBTUEsZUFBZSxHQUFHLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsTUFBcEIsRUFBNEIsT0FBNUIsQ0FBeEI7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLENBQUM7QUFBRUMsT0FBSyxHQUFHO0FBQVYsQ0FBRCxLQUE4QjtBQUN6QyxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NDLHNEQUFRLENBQVMsRUFBVCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0Ysc0RBQVEsQ0FBUyxDQUFULENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CSixzREFBUSxD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eEIsS0FBSyxDQUFDVyxHQUFOLENBQVdtQixJQUFELElBQ1Q7QUFBRyxPQUFHLEVBQUVBLElBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlQSxJQUFmLENBREQsQ0FWSCxDQURGO0FBZ0JELENBckVEOztBQXVFZXpDLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgdW5zaHVmZmxlZFdvcmRzID0gW1wiQXJyb3dcIiwgXCJUb21hdG9cIiwgXCJTdGFyXCIsIFwiV2hlZWxcIl07XG5cbmNvbnN0IE1haW4gPSAoeyB0aXRsZSA9IFwiV1BNIEdPT09PT1wiIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRXb3JkLCBzZXRDdXJyZW50V29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSg2MCk7XG4gIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbdHlwZWQsIHNldFR5cGVkXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGxheWluZykge1xuICAgICAgY29uc3QgY291bnRkb3duID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRDb3VudCgoY291bnQpID0+IChjb3VudCA+IDAgPyBjb3VudCAtIDEgOiA2MCkpO1xuICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbcGxheWluZ10pO1xuXG4gIGNvbnN0IHNodWZmbGVBcnJheSA9IHVzZUNhbGxiYWNrKChhcnI6IHN0cmluZ1tdKSA9PiB7XG4gICAgcmV0dXJuIGFyclxuICAgICAgLm1hcCgoYSkgPT4gW01hdGgucmFuZG9tKCksIGFdKVxuICAgICAgLnNvcnQoKVxuICAgICAgLm1hcCgoYSkgPT4gYVsxXSkgYXMgc3RyaW5nW107XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3b3Jkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHNodWZmbGVkQXJyYXkgPSBzaHVmZmxlQXJyYXkodW5zaHVmZmxlZFdvcmRzKTtcblxuICAgICAgc2V0V29yZHMoc2h1ZmZsZWRBcnJheSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgY2hlY2tXb3JkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiY2hlY2tXb3JkIC0+IHdvcmRzW2N1cnJlbnRJbmRleF1cIiwgd29yZHNbY3VycmVudEluZGV4XSk7XG4gICAgcmV0dXJuIHdvcmRzW2N1cnJlbnRJbmRleF0udG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKGN1cnJlbnRXb3JkKTtcblxuICAgIC8vIHJldHVybiB3b3Jkcy5zb21lKCh3b3JkKSA9PiB3b3JkLnN0YXJ0c1dpdGgoY3VycmVudFdvcmQpKTtcbiAgfSwgW2N1cnJlbnRXb3JkLCBjdXJyZW50SW5kZXgsIHdvcmRzXSk7XG5cbiAgY29uc3QgY2hlY2tTcGFjZSA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIiBcIikge1xuICAgICAgc2V0Q3VycmVudEluZGV4KChpbmRleCkgPT4gaW5kZXggKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25Vc2VyVHlwZSA9IChlKSA9PiB7XG4gICAgc2V0Q3VycmVudFdvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKGNoZWNrV29yZCgpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTLkNvbnRhaW5lcj5cbiAgICAgIDxTLlRpdGxlPkNPTlRBR0VNIFJFR1JFU1NJVkE6IHtjb3VudH08L1MuVGl0bGU+XG5cbiAgICAgIDxTLlRleHRCb3hcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRQbGF5aW5nKHRydWUpfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uVXNlclR5cGUoZSl9XG4gICAgICAgIG9uS2V5UHJlc3M9eyhlKSA9PiBjaGVja1NwYWNlKGUpfVxuICAgICAgLz5cblxuICAgICAge3dvcmRzLm1hcCgod29yZCkgPT4gKFxuICAgICAgICA8cCBrZXk9e3dvcmR9Pnt3b3JkfTwvcD5cbiAgICAgICkpfVxuICAgIDwvUy5Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main/index.tsx\n");

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