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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Main/styles.ts\");\nvar _jsxFileName = \"/home/efraim-andrade/Projects/Goomer/wpm-go/src/components/Main/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst unshuffledWords = [\"Arrow\", \"Tomato\", \"Star\", \"Wheel\"];\n\nconst Main = ({\n  title = \"WPM GOOOOO\"\n}) => {\n  const {\n    0: currentWord,\n    1: setCurrentWord\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");\n  const {\n    0: currentIndex,\n    1: setCurrentIndex\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: count,\n    1: setCount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(60);\n  const {\n    0: playing,\n    1: setPlaying\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const {\n    0: words,\n    1: setWords\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    0: typed,\n    1: setTyped\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  console.log(\"Main -> typed\", typed);\n  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (playing) {\n      const countdown = setInterval(() => {\n        setCount(count => count > 0 ? count - 1 : 60);\n      }, 1000);\n      return () => {\n        clearInterval(countdown);\n      };\n    }\n  }, [playing]);\n  const shuffleArray = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(arr => {\n    return arr.map(a => [Math.random(), a]).sort().map(a => a[1]);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (words.length === 0) {\n      const shuffledArray = shuffleArray(unshuffledWords);\n      setWords(shuffledArray);\n    }\n  }, []);\n  const checkWord = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(() => {\n    console.log(\"checkWord -> words[currentIndex]\", words[currentIndex]);\n    return words[currentIndex].toLowerCase().startsWith(currentWord.toLowerCase()); // return words.some((word) => word.startsWith(currentWord));\n  }, [currentWord, currentIndex, words]);\n  const checkSpace = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    if (e.key === \"Backspace\" && !currentWord && currentIndex >= 1) {\n      ref.current.value = typed[currentIndex - 1];\n      setCurrentWord(typed[currentIndex - 1]);\n      setCurrentIndex(index => index - 1);\n    }\n\n    if (e.key === \" \") {\n      checkWord();\n      setTyped(state => {\n        return [...state, currentWord];\n      });\n      setCurrentIndex(index => index + 1);\n      setCurrentWord(\"\");\n      ref.current.value = \"\";\n    }\n  }, [currentWord]);\n  const onUserType = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(e => {\n    if (e.key !== \" \") {\n      setCurrentWord(e.target.value);\n    }\n  }, []);\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, \"CONTAGEM REGRESSIVA: \", count), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"TextBox\"], {\n    type: \"text\",\n    ref: ref,\n    onFocus: () => setPlaying(true),\n    onChange: e => onUserType(e),\n    onKeyDown: e => checkSpace(e),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 7\n    }\n  }), words.map((word, index) => __jsx(\"p\", {\n    key: word,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }\n  }, word, \" -\", \" \", typed[index] && typed[index].includes(word.toLowerCase()) ? \"certo\" : \"errado\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL2luZGV4LnRzeD9iYmNjIl0sIm5hbWVzIjpbInVuc2h1ZmZsZWRXb3JkcyIsIk1haW4iLCJ0aXRsZSIsImN1cnJlbnRXb3JkIiwic2V0Q3VycmVudFdvcmQiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImNvdW50Iiwic2V0Q291bnQiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsIndvcmRzIiwic2V0V29yZHMiLCJ0eXBlZCIsInNldFR5cGVkIiwiY29uc29sZSIsImxvZyIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImNvdW50ZG93biIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNodWZmbGVBcnJheSIsInVzZUNhbGxiYWNrIiwiYXJyIiwibWFwIiwiYSIsIk1hdGgiLCJyYW5kb20iLCJzb3J0IiwibGVuZ3RoIiwic2h1ZmZsZWRBcnJheSIsImNoZWNrV29yZCIsInRvTG93ZXJDYXNlIiwic3RhcnRzV2l0aCIsImNoZWNrU3BhY2UiLCJlIiwia2V5IiwiY3VycmVudCIsInZhbHVlIiwiaW5kZXgiLCJzdGF0ZSIsIm9uVXNlclR5cGUiLCJ0YXJnZXQiLCJ3b3JkIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBUUE7QUFFQSxNQUFNQSxlQUFlLEdBQUcsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixNQUFwQixFQUE0QixPQUE1QixDQUF4Qjs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQztBQUFFQyxPQUFLLEdBQUc7QUFBVixDQUFELEtBQThCO0FBQ3pDLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBUyxFQUFULENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQWtDRixzREFBUSxDQUFTLENBQVQsQ0FBaEQ7QUFDQSxRQUFNO0FB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QkQsSUFBSSxDQUFDWCxXQUFMLEVBQXRCLENBQWhCLEdBQ0csT0FESCxHQUVHLFFBSk4sQ0FERCxDQVhILENBREY7QUFzQkQsQ0FuR0Q7O0FBcUdlbEMsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VNZW1vLFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlUmVmLFxufSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgdW5zaHVmZmxlZFdvcmRzID0gW1wiQXJyb3dcIiwgXCJUb21hdG9cIiwgXCJTdGFyXCIsIFwiV2hlZWxcIl07XG5cbmNvbnN0IE1haW4gPSAoeyB0aXRsZSA9IFwiV1BNIEdPT09PT1wiIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRXb3JkLCBzZXRDdXJyZW50V29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSg2MCk7XG4gIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbdHlwZWQsIHNldFR5cGVkXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnNvbGUubG9nKFwiTWFpbiAtPiB0eXBlZFwiLCB0eXBlZCk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICBjb25zdCBjb3VudGRvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldENvdW50KChjb3VudCkgPT4gKGNvdW50ID4gMCA/IGNvdW50IC0gMSA6IDYwKSk7XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd24pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtwbGF5aW5nXSk7XG5cbiAgY29uc3Qgc2h1ZmZsZUFycmF5ID0gdXNlQ2FsbGJhY2soKGFycjogc3RyaW5nW10pID0+IHtcbiAgICByZXR1cm4gYXJyXG4gICAgICAubWFwKChhKSA9PiBbTWF0aC5yYW5kb20oKSwgYV0pXG4gICAgICAuc29ydCgpXG4gICAgICAubWFwKChhKSA9PiBhWzFdKSBhcyBzdHJpbmdbXTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdvcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc2h1ZmZsZWRBcnJheSA9IHNodWZmbGVBcnJheSh1bnNodWZmbGVkV29yZHMpO1xuXG4gICAgICBzZXRXb3JkcyhzaHVmZmxlZEFycmF5KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBjaGVja1dvcmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJjaGVja1dvcmQgLT4gd29yZHNbY3VycmVudEluZGV4XVwiLCB3b3Jkc1tjdXJyZW50SW5kZXhdKTtcblxuICAgIHJldHVybiB3b3Jkc1tjdXJyZW50SW5kZXhdXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnN0YXJ0c1dpdGgoY3VycmVudFdvcmQudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAvLyByZXR1cm4gd29yZHMuc29tZSgod29yZCkgPT4gd29yZC5zdGFydHNXaXRoKGN1cnJlbnRXb3JkKSk7XG4gIH0sIFtjdXJyZW50V29yZCwgY3VycmVudEluZGV4LCB3b3Jkc10pO1xuXG4gIGNvbnN0IGNoZWNrU3BhY2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmICFjdXJyZW50V29yZCAmJiBjdXJyZW50SW5kZXggPj0gMSkge1xuICAgICAgICByZWYuY3VycmVudC52YWx1ZSA9IHR5cGVkW2N1cnJlbnRJbmRleCAtIDFdO1xuICAgICAgICBzZXRDdXJyZW50V29yZCh0eXBlZFtjdXJyZW50SW5kZXggLSAxXSk7XG4gICAgICAgIHNldEN1cnJlbnRJbmRleCgoaW5kZXgpID0+IGluZGV4IC0gMSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgY2hlY2tXb3JkKCk7XG5cbiAgICAgICAgc2V0VHlwZWQoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgY3VycmVudFdvcmRdO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRDdXJyZW50SW5kZXgoKGluZGV4KSA9PiBpbmRleCArIDEpO1xuICAgICAgICBzZXRDdXJyZW50V29yZChcIlwiKTtcblxuICAgICAgICByZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBbY3VycmVudFdvcmRdXG4gICk7XG5cbiAgY29uc3Qgb25Vc2VyVHlwZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgaWYgKGUua2V5ICE9PSBcIiBcIikge1xuICAgICAgc2V0Q3VycmVudFdvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFMuQ29udGFpbmVyPlxuICAgICAgPFMuVGl0bGU+Q09OVEFHRU0gUkVHUkVTU0lWQToge2NvdW50fTwvUy5UaXRsZT5cblxuICAgICAgPFMuVGV4dEJveFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRQbGF5aW5nKHRydWUpfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uVXNlclR5cGUoZSl9XG4gICAgICAgIG9uS2V5RG93bj17KGUpID0+IGNoZWNrU3BhY2UoZSl9XG4gICAgICAvPlxuXG4gICAgICB7d29yZHMubWFwKCh3b3JkLCBpbmRleCkgPT4gKFxuICAgICAgICA8cCBrZXk9e3dvcmR9PlxuICAgICAgICAgIHt3b3JkfSAte1wiIFwifVxuICAgICAgICAgIHt0eXBlZFtpbmRleF0gJiYgdHlwZWRbaW5kZXhdLmluY2x1ZGVzKHdvcmQudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgID8gXCJjZXJ0b1wiXG4gICAgICAgICAgICA6IFwiZXJyYWRvXCJ9XG4gICAgICAgIDwvcD5cbiAgICAgICkpfVxuICAgIDwvUy5Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main/index.tsx\n");

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