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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/Main/styles.ts");


var _jsxFileName = "/home/efraim-andrade/Projects/Goomer/wpm-go/src/components/Main/index.tsx";


const unshuffledWords = ["Arrow", "Tomato", "Star", "Wheel"];
const INITIAL_COUNT_VALUE = 10;

const Main = ({
  title = "WPM GOOOOO"
}) => {
  const {
    0: currentWord,
    1: setCurrentWord
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: count,
    1: setCount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(INITIAL_COUNT_VALUE);
  const {
    0: playing,
    1: setPlaying
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: words,
    1: setWords
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: typed,
    1: setTyped
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: wpm,
    1: setWpm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (playing) {
      const countdown = setInterval(() => {
        setCount(count => count > 0 && !isFinished ? count - 1 : INITIAL_COUNT_VALUE);
      }, 1000);
      return () => {
        clearInterval(countdown);
      };
    }
  }, [playing]);
  const shuffleArray = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(arr => {
    return arr.map(a => [Math.random(), a]).sort().map(a => a[1]);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (words.length === 0) {
      const shuffledArray = shuffleArray(unshuffledWords);
      setWords(shuffledArray);
    }
  }, []);
  const isFinished = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => typed.length === words.length || count === 0, [typed, words, count]);
  const checkWord = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    return words[currentIndex].toLowerCase().startsWith(currentWord.toLowerCase()); // return words.some((word) => word.startsWith(currentWord));
  }, [currentWord, currentIndex, words]);
  const checkSpace = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    if (e.key === "Backspace" && !currentWord && currentIndex >= 1) {
      ref.current.value = typed[currentIndex - 1];
      setCurrentWord(typed[currentIndex - 1]);
      setCurrentIndex(index => index - 1);
      setTyped(state => {
        const lastRemoved = state.slice(0, state.length - 1);
        return lastRemoved;
      });
      e.preventDefault();
    }

    if (e.key === " " && !isFinished) {
      e.preventDefault();
      checkWord();
      setTyped(state => {
        return [...state, currentWord];
      });
      setCurrentIndex(index => index + 1);
      setCurrentWord("");
      ref.current.value = "";
    }
  }, [currentWord]);
  const onUserType = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    if (e.key !== " ") {
      setCurrentWord(e.target.value);
    }
  }, []);
  const resetGame = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setTyped([]);
    setPlaying(false);
    setCount(INITIAL_COUNT_VALUE);
  }, []);
  const calcWPM = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => typed.length / (INITIAL_COUNT_VALUE - count), [typed, count]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      children: ["CONTAGEM REGRESSIVA: ", count]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["TextBox"], {
      disabled: isFinished,
      type: "text",
      ref: ref,
      onFocus: () => setPlaying(true),
      onChange: e => onUserType(e),
      onKeyDown: e => checkSpace(e)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, undefined), words.map((word, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [word, " -", " ", typed[index] && typed[index].includes(word.toLowerCase()) ? "certo" : "errado"]
    }, word, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }, undefined)), isFinished && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "finished",
        children: ["Terminou: ", calcWPM(), " WPM"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: resetGame,
        children: "RESET"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/Main/styles.ts":
/*!***************************************!*\
  !*** ./src/components/Main/styles.ts ***!
  \***************************************/
/*! exports provided: Container, Title, Button, TextBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBox", function() { return TextBox; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main`
  width: 100%;
  height: 100%;
  padding: 3rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  .finished {
    color: red;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`
  font-size: 2.5rem;
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  font-size: 2.5rem;
`;
const TextBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input`
  width: 100px;
  height: 50px;
`;

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main */ "./src/components/Main/index.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _Main__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components */ "./src/components/index.ts");

var _jsxFileName = "/home/efraim-andrade/Projects/Goomer/wpm-go/src/pages/index.tsx";



const pages = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components__WEBPACK_IMPORTED_MODULE_2__["Main"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (pages);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsidW5zaHVmZmxlZFdvcmRzIiwiSU5JVElBTF9DT1VOVF9WQUxVRSIsIk1haW4iLCJ0aXRsZSIsImN1cnJlbnRXb3JkIiwic2V0Q3VycmVudFdvcmQiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImNvdW50Iiwic2V0Q291bnQiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsIndvcmRzIiwic2V0V29yZHMiLCJ0eXBlZCIsInNldFR5cGVkIiwid3BtIiwic2V0V3BtIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY291bnRkb3duIiwic2V0SW50ZXJ2YWwiLCJpc0ZpbmlzaGVkIiwiY2xlYXJJbnRlcnZhbCIsInNodWZmbGVBcnJheSIsInVzZUNhbGxiYWNrIiwiYXJyIiwibWFwIiwiYSIsIk1hdGgiLCJyYW5kb20iLCJzb3J0IiwibGVuZ3RoIiwic2h1ZmZsZWRBcnJheSIsInVzZU1lbW8iLCJjaGVja1dvcmQiLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0c1dpdGgiLCJjaGVja1NwYWNlIiwiZSIsImtleSIsImN1cnJlbnQiLCJ2YWx1ZSIsImluZGV4Iiwic3RhdGUiLCJsYXN0UmVtb3ZlZCIsInNsaWNlIiwicHJldmVudERlZmF1bHQiLCJvblVzZXJUeXBlIiwidGFyZ2V0IiwicmVzZXRHYW1lIiwiY2FsY1dQTSIsIndvcmQiLCJpbmNsdWRlcyIsIkNvbnRhaW5lciIsInN0eWxlZCIsIm1haW4iLCJUaXRsZSIsImgxIiwiQnV0dG9uIiwiYnV0dG9uIiwiVGV4dEJveCIsImlucHV0IiwicGFnZXMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFRQTtBQUVBLE1BQU1BLGVBQWUsR0FBRyxDQUFDLE9BQUQsRUFBVSxRQUFWLEVBQW9CLE1BQXBCLEVBQTRCLE9BQTVCLENBQXhCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcsRUFBNUI7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLENBQUM7QUFBRUMsT0FBSyxHQUFHO0FBQVYsQ0FBRCxLQUE4QjtBQUN6QyxRQUFNO0FBQUEsT0FBQ0MsV0FBRDtBQUFBLE9BQWND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QUQxRCxlQUVFO0FBQVEsZUFBTyxFQUFFRCxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLG9CQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQThCRCxDQXBJRDs7QUFzSWVsRCxtRUFBZixFOzs7Ozs7Ozs7Ozs7QUNuSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1zRCxTQUFTLEdBQUdDLHdEQUFNLENBQUNDLElBQUs7Ozs7Ozs7Ozs7OztDQUE5QjtBQWNBLE1BQU1DLEtBQUssR0FBR0Ysd0RBQU0sQ0FBQ0csRUFBRzs7Q0FBeEI7QUFJQSxNQUFNQyxNQUFNLEdBQUdKLHdEQUFNLENBQUNLLE1BQU87O0NBQTdCO0FBSUEsTUFBTUMsT0FBTyxHQUFHTix3REFBTSxDQUFDTyxLQUFNOzs7Q0FBN0IsQzs7Ozs7Ozs7Ozs7O0FDeEJQO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBOztBQUVBLE1BQU1DLEtBQWUsR0FBRyxNQUFNO0FBQzVCLHNCQUFPLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSWVBLG9FQUFmLEU7Ozs7Ozs7Ozs7O0FDUkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHtcbiAgdXNlTWVtbyxcbiAgdXNlRWZmZWN0LFxuICB1c2VTdGF0ZSxcbiAgdXNlQ2FsbGJhY2ssXG4gIHVzZVJlZixcbn0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCAqIGFzIFMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmNvbnN0IHVuc2h1ZmZsZWRXb3JkcyA9IFtcIkFycm93XCIsIFwiVG9tYXRvXCIsIFwiU3RhclwiLCBcIldoZWVsXCJdO1xuY29uc3QgSU5JVElBTF9DT1VOVF9WQUxVRSA9IDEwO1xuXG5jb25zdCBNYWluID0gKHsgdGl0bGUgPSBcIldQTSBHT09PT09cIiB9KSA9PiB7XG4gIGNvbnN0IFtjdXJyZW50V29yZCwgc2V0Q3VycmVudFdvcmRdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoSU5JVElBTF9DT1VOVF9WQUxVRSk7XG4gIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbdHlwZWQsIHNldFR5cGVkXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFt3cG0sIHNldFdwbV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCByZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocGxheWluZykge1xuICAgICAgY29uc3QgY291bnRkb3duID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRDb3VudCgoY291bnQpID0+XG4gICAgICAgICAgY291bnQgPiAwICYmICFpc0ZpbmlzaGVkID8gY291bnQgLSAxIDogSU5JVElBTF9DT1VOVF9WQUxVRVxuICAgICAgICApO1xuICAgICAgfSwgMTAwMCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbcGxheWluZ10pO1xuXG4gIGNvbnN0IHNodWZmbGVBcnJheSA9IHVzZUNhbGxiYWNrKChhcnI6IHN0cmluZ1tdKSA9PiB7XG4gICAgcmV0dXJuIGFyclxuICAgICAgLm1hcCgoYSkgPT4gW01hdGgucmFuZG9tKCksIGFdKVxuICAgICAgLnNvcnQoKVxuICAgICAgLm1hcCgoYSkgPT4gYVsxXSkgYXMgc3RyaW5nW107XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh3b3Jkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHNodWZmbGVkQXJyYXkgPSBzaHVmZmxlQXJyYXkodW5zaHVmZmxlZFdvcmRzKTtcblxuICAgICAgc2V0V29yZHMoc2h1ZmZsZWRBcnJheSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgaXNGaW5pc2hlZCA9IHVzZU1lbW8oXG4gICAgKCkgPT4gdHlwZWQubGVuZ3RoID09PSB3b3Jkcy5sZW5ndGggfHwgY291bnQgPT09IDAsXG4gICAgW3R5cGVkLCB3b3JkcywgY291bnRdXG4gICk7XG5cbiAgY29uc3QgY2hlY2tXb3JkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHJldHVybiB3b3Jkc1tjdXJyZW50SW5kZXhdXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnN0YXJ0c1dpdGgoY3VycmVudFdvcmQudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAvLyByZXR1cm4gd29yZHMuc29tZSgod29yZCkgPT4gd29yZC5zdGFydHNXaXRoKGN1cnJlbnRXb3JkKSk7XG4gIH0sIFtjdXJyZW50V29yZCwgY3VycmVudEluZGV4LCB3b3Jkc10pO1xuXG4gIGNvbnN0IGNoZWNrU3BhY2UgPSB1c2VDYWxsYmFjayhcbiAgICAoZSkgPT4ge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkJhY2tzcGFjZVwiICYmICFjdXJyZW50V29yZCAmJiBjdXJyZW50SW5kZXggPj0gMSkge1xuICAgICAgICByZWYuY3VycmVudC52YWx1ZSA9IHR5cGVkW2N1cnJlbnRJbmRleCAtIDFdO1xuICAgICAgICBzZXRDdXJyZW50V29yZCh0eXBlZFtjdXJyZW50SW5kZXggLSAxXSk7XG4gICAgICAgIHNldEN1cnJlbnRJbmRleCgoaW5kZXgpID0+IGluZGV4IC0gMSk7XG5cbiAgICAgICAgc2V0VHlwZWQoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGFzdFJlbW92ZWQgPSBzdGF0ZS5zbGljZSgwLCBzdGF0ZS5sZW5ndGggLSAxKTtcbiAgICAgICAgICByZXR1cm4gbGFzdFJlbW92ZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUua2V5ID09PSBcIiBcIiAmJiAhaXNGaW5pc2hlZCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNoZWNrV29yZCgpO1xuXG4gICAgICAgIHNldFR5cGVkKChzdGF0ZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGN1cnJlbnRXb3JkXTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0Q3VycmVudEluZGV4KChpbmRleCkgPT4gaW5kZXggKyAxKTtcbiAgICAgICAgc2V0Q3VycmVudFdvcmQoXCJcIik7XG5cbiAgICAgICAgcmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgW2N1cnJlbnRXb3JkXVxuICApO1xuXG4gIGNvbnN0IG9uVXNlclR5cGUgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xuICAgIGlmIChlLmtleSAhPT0gXCIgXCIpIHtcbiAgICAgIHNldEN1cnJlbnRXb3JkKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCByZXNldEdhbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0VHlwZWQoW10pO1xuICAgIHNldFBsYXlpbmcoZmFsc2UpO1xuICAgIHNldENvdW50KElOSVRJQUxfQ09VTlRfVkFMVUUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgY2FsY1dQTSA9IHVzZUNhbGxiYWNrKFxuICAgICgpID0+IHR5cGVkLmxlbmd0aCAvIChJTklUSUFMX0NPVU5UX1ZBTFVFIC0gY291bnQpLFxuICAgIFt0eXBlZCwgY291bnRdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Uy5Db250YWluZXI+XG4gICAgICA8Uy5UaXRsZT5DT05UQUdFTSBSRUdSRVNTSVZBOiB7Y291bnR9PC9TLlRpdGxlPlxuXG4gICAgICA8Uy5UZXh0Qm94XG4gICAgICAgIGRpc2FibGVkPXtpc0ZpbmlzaGVkfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRQbGF5aW5nKHRydWUpfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uVXNlclR5cGUoZSl9XG4gICAgICAgIG9uS2V5RG93bj17KGUpID0+IGNoZWNrU3BhY2UoZSl9XG4gICAgICAvPlxuXG4gICAgICB7d29yZHMubWFwKCh3b3JkLCBpbmRleCkgPT4gKFxuICAgICAgICA8cCBrZXk9e3dvcmR9PlxuICAgICAgICAgIHt3b3JkfSAte1wiIFwifVxuICAgICAgICAgIHt0eXBlZFtpbmRleF0gJiYgdHlwZWRbaW5kZXhdLmluY2x1ZGVzKHdvcmQudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgID8gXCJjZXJ0b1wiXG4gICAgICAgICAgICA6IFwiZXJyYWRvXCJ9XG4gICAgICAgIDwvcD5cbiAgICAgICkpfVxuXG4gICAgICB7aXNGaW5pc2hlZCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZpbmlzaGVkXCI+VGVybWlub3U6IHtjYWxjV1BNKCl9IFdQTTwvaDE+e1wiIFwifVxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVzZXRHYW1lfT5SRVNFVDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9TLkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLm1haW5gXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDNyZW07XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAuZmluaXNoZWQge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dEJveCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG5gO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBNYWluIH0gZnJvbSAnLi9NYWluJ1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBNYWluIH0gZnJvbSBcIn4vY29tcG9uZW50c1wiO1xuXG5jb25zdCBwYWdlczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiA8TWFpbiAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=