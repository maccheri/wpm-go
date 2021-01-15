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

 //TODO:

/**
 * [] - Errado e certo, utilizar css
 * [] - a frase numa linha só
 * [] - Deixar o projeto bonito
 * [] - lista de palavras editavel
 * [] - criar os presets de desenvolvimento e o que mais a gente quiser
 */

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
        setCount(count => {
          if (!count) clearInterval(countdown);
          return count > 0 && !isFinished ? count - 1 : INITIAL_COUNT_VALUE;
        });
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
  const correctWord = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])((word, index) => {
    if (!typed[index]) return "neutral";
    if (typed[index].includes(word.toLowerCase())) return "right";
    return "wrong";
  }, [typed]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Title"], {
      children: ["CONTAGEM REGRESSIVA: ", count]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 138,
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
      lineNumber: 140,
      columnNumber: 7
    }, undefined), words.map((word, index) => {
      console.log("🚀 ~ file: index.tsx ~ line 148 ~ {words.map ~ correctWord(word, index)", correctWord(word, index));
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Word"], {
        $correct: correctWord(word, index),
        children: word
      }, word, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }, undefined);
    }), isFinished && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "finished",
        children: ["Terminou: ", calcWPM(), " WPM"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: resetGame,
        children: "RESET"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }, undefined)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 137,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/Main/styles.ts":
/*!***************************************!*\
  !*** ./src/components/Main/styles.ts ***!
  \***************************************/
/*! exports provided: Container, Title, Button, TextBox, Word */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBox", function() { return TextBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Word", function() { return Word; });
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
const wordModifiers = {
  neutral: () => styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    color: black;
  `,
  right: () => styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    color: green;
  `,
  wrong: () => styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    color: red;
  `
};
const Word = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span`
  ${({
  $correct
}) => styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    ${!!$correct && wordModifiers[$correct]()}
  `}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsidW5zaHVmZmxlZFdvcmRzIiwiSU5JVElBTF9DT1VOVF9WQUxVRSIsIk1haW4iLCJ0aXRsZSIsImN1cnJlbnRXb3JkIiwic2V0Q3VycmVudFdvcmQiLCJ1c2VTdGF0ZSIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImNvdW50Iiwic2V0Q291bnQiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsIndvcmRzIiwic2V0V29yZHMiLCJ0eXBlZCIsInNldFR5cGVkIiwid3BtIiwic2V0V3BtIiwicmVmIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY291bnRkb3duIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaXNGaW5pc2hlZCIsInNodWZmbGVBcnJheSIsInVzZUNhbGxiYWNrIiwiYXJyIiwibWFwIiwiYSIsIk1hdGgiLCJyYW5kb20iLCJzb3J0IiwibGVuZ3RoIiwic2h1ZmZsZWRBcnJheSIsInVzZU1lbW8iLCJjaGVja1dvcmQiLCJ0b0xvd2VyQ2FzZSIsInN0YXJ0c1dpdGgiLCJjaGVja1NwYWNlIiwiZSIsImtleSIsImN1cnJlbnQiLCJ2YWx1ZSIsImluZGV4Iiwic3RhdGUiLCJsYXN0UmVtb3ZlZCIsInNsaWNlIiwicHJldmVudERlZmF1bHQiLCJvblVzZXJUeXBlIiwidGFyZ2V0IiwicmVzZXRHYW1lIiwiY2FsY1dQTSIsImNvcnJlY3RXb3JkIiwid29yZCIsImluY2x1ZGVzIiwiY29uc29sZSIsImxvZyIsIkNvbnRhaW5lciIsInN0eWxlZCIsIm1haW4iLCJUaXRsZSIsImgxIiwiQnV0dG9uIiwiYnV0dG9uIiwiVGV4dEJveCIsImlucHV0Iiwid29yZE1vZGlmaWVycyIsIm5ldXRyYWwiLCJjc3MiLCJyaWdodCIsIndyb25nIiwiV29yZCIsInNwYW4iLCIkY29ycmVjdCIsInBhZ2VzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0NBVUE7O0FBQ0E7Ozs7Ozs7O0FBUUEsTUFBTUEsZUFBZSxHQUFHLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsTUFBcEIsRUFBNEIsT0FBNUIsQ0FBeEI7QUFDQSxNQUFN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TyxFQUFFLE1BQU1DLHFEQUFJOztHQURDO0FBSXBCQyxPQUFLLEVBQUUsTUFBTUQscURBQUk7O0dBSkc7QUFPcEJFLE9BQUssRUFBRSxNQUFNRixxREFBSTs7O0FBUEcsQ0FBdEI7QUFZTyxNQUFNRyxJQUFJLEdBQUdiLHdEQUFNLENBQUNjLElBQWtEO0lBQ3pFLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCTCxxREFBSTtNQUNwQixDQUFDLENBQUNLLFFBQUYsSUFBY1AsYUFBYSxDQUFDTyxRQUFELENBQWIsRUFBMEI7R0FDMUM7Q0FIRyxDOzs7Ozs7Ozs7Ozs7QUN6Q1A7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7O0FBRUEsTUFBTUMsS0FBZSxHQUFHLE1BQU07QUFDNUIsc0JBQU8scUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7QUFJZUEsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUNSQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwge1xuICB1c2VNZW1vLFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlUmVmLFxufSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuLy9UT0RPOlxuLyoqXG4gKiBbXSAtIEVycmFkbyBlIGNlcnRvLCB1dGlsaXphciBjc3NcbiAqIFtdIC0gYSBmcmFzZSBudW1hIGxpbmhhIHPDs1xuICogW10gLSBEZWl4YXIgbyBwcm9qZXRvIGJvbml0b1xuICogW10gLSBsaXN0YSBkZSBwYWxhdnJhcyBlZGl0YXZlbFxuICogW10gLSBjcmlhciBvcyBwcmVzZXRzIGRlIGRlc2Vudm9sdmltZW50byBlIG8gcXVlIG1haXMgYSBnZW50ZSBxdWlzZXJcbiAqL1xuXG5jb25zdCB1bnNodWZmbGVkV29yZHMgPSBbXCJBcnJvd1wiLCBcIlRvbWF0b1wiLCBcIlN0YXJcIiwgXCJXaGVlbFwiXTtcbmNvbnN0IElOSVRJQUxfQ09VTlRfVkFMVUUgPSAxMDtcblxuY29uc3QgTWFpbiA9ICh7IHRpdGxlID0gXCJXUE0gR09PT09PXCIgfSkgPT4ge1xuICBjb25zdCBbY3VycmVudFdvcmQsIHNldEN1cnJlbnRXb3JkXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKElOSVRJQUxfQ09VTlRfVkFMVUUpO1xuICBjb25zdCBbcGxheWluZywgc2V0UGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt3b3Jkcywgc2V0V29yZHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW3R5cGVkLCBzZXRUeXBlZF0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbd3BtLCBzZXRXcG1dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICBjb25zdCBjb3VudGRvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldENvdW50KChjb3VudCkgPT4ge1xuICAgICAgICAgIGlmICghY291bnQpIGNsZWFySW50ZXJ2YWwoY291bnRkb3duKTtcbiAgICAgICAgICByZXR1cm4gY291bnQgPiAwICYmICFpc0ZpbmlzaGVkID8gY291bnQgLSAxIDogSU5JVElBTF9DT1VOVF9WQUxVRTtcbiAgICAgICAgfSk7XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd24pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtwbGF5aW5nXSk7XG5cbiAgY29uc3Qgc2h1ZmZsZUFycmF5ID0gdXNlQ2FsbGJhY2soKGFycjogc3RyaW5nW10pID0+IHtcbiAgICByZXR1cm4gYXJyXG4gICAgICAubWFwKChhKSA9PiBbTWF0aC5yYW5kb20oKSwgYV0pXG4gICAgICAuc29ydCgpXG4gICAgICAubWFwKChhKSA9PiBhWzFdKSBhcyBzdHJpbmdbXTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdvcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc2h1ZmZsZWRBcnJheSA9IHNodWZmbGVBcnJheSh1bnNodWZmbGVkV29yZHMpO1xuXG4gICAgICBzZXRXb3JkcyhzaHVmZmxlZEFycmF5KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBpc0ZpbmlzaGVkID0gdXNlTWVtbyhcbiAgICAoKSA9PiB0eXBlZC5sZW5ndGggPT09IHdvcmRzLmxlbmd0aCB8fCBjb3VudCA9PT0gMCxcbiAgICBbdHlwZWQsIHdvcmRzLCBjb3VudF1cbiAgKTtcblxuICBjb25zdCBjaGVja1dvcmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmV0dXJuIHdvcmRzW2N1cnJlbnRJbmRleF1cbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAuc3RhcnRzV2l0aChjdXJyZW50V29yZC50b0xvd2VyQ2FzZSgpKTtcblxuICAgIC8vIHJldHVybiB3b3Jkcy5zb21lKCh3b3JkKSA9PiB3b3JkLnN0YXJ0c1dpdGgoY3VycmVudFdvcmQpKTtcbiAgfSwgW2N1cnJlbnRXb3JkLCBjdXJyZW50SW5kZXgsIHdvcmRzXSk7XG5cbiAgY29uc3QgY2hlY2tTcGFjZSA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgIWN1cnJlbnRXb3JkICYmIGN1cnJlbnRJbmRleCA+PSAxKSB7XG4gICAgICAgIHJlZi5jdXJyZW50LnZhbHVlID0gdHlwZWRbY3VycmVudEluZGV4IC0gMV07XG4gICAgICAgIHNldEN1cnJlbnRXb3JkKHR5cGVkW2N1cnJlbnRJbmRleCAtIDFdKTtcbiAgICAgICAgc2V0Q3VycmVudEluZGV4KChpbmRleCkgPT4gaW5kZXggLSAxKTtcblxuICAgICAgICBzZXRUeXBlZCgoc3RhdGUpID0+IHtcbiAgICAgICAgICBjb25zdCBsYXN0UmVtb3ZlZCA9IHN0YXRlLnNsaWNlKDAsIHN0YXRlLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIHJldHVybiBsYXN0UmVtb3ZlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXkgPT09IFwiIFwiICYmICFpc0ZpbmlzaGVkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2hlY2tXb3JkKCk7XG5cbiAgICAgICAgc2V0VHlwZWQoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgY3VycmVudFdvcmRdO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRDdXJyZW50SW5kZXgoKGluZGV4KSA9PiBpbmRleCArIDEpO1xuICAgICAgICBzZXRDdXJyZW50V29yZChcIlwiKTtcblxuICAgICAgICByZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBbY3VycmVudFdvcmRdXG4gICk7XG5cbiAgY29uc3Qgb25Vc2VyVHlwZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgaWYgKGUua2V5ICE9PSBcIiBcIikge1xuICAgICAgc2V0Q3VycmVudFdvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlc2V0R2FtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRUeXBlZChbXSk7XG4gICAgc2V0UGxheWluZyhmYWxzZSk7XG4gICAgc2V0Q291bnQoSU5JVElBTF9DT1VOVF9WQUxVRSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjYWxjV1BNID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gdHlwZWQubGVuZ3RoIC8gKElOSVRJQUxfQ09VTlRfVkFMVUUgLSBjb3VudCksXG4gICAgW3R5cGVkLCBjb3VudF1cbiAgKTtcblxuICBjb25zdCBjb3JyZWN0V29yZCA9IHVzZUNhbGxiYWNrKFxuICAgICh3b3JkLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKCF0eXBlZFtpbmRleF0pIHJldHVybiBcIm5ldXRyYWxcIjtcblxuICAgICAgaWYgKHR5cGVkW2luZGV4XS5pbmNsdWRlcyh3b3JkLnRvTG93ZXJDYXNlKCkpKSByZXR1cm4gXCJyaWdodFwiO1xuXG4gICAgICByZXR1cm4gXCJ3cm9uZ1wiO1xuICAgIH0sXG4gICAgW3R5cGVkXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFMuQ29udGFpbmVyPlxuICAgICAgPFMuVGl0bGU+Q09OVEFHRU0gUkVHUkVTU0lWQToge2NvdW50fTwvUy5UaXRsZT5cblxuICAgICAgPFMuVGV4dEJveFxuICAgICAgICBkaXNhYmxlZD17aXNGaW5pc2hlZH1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0UGxheWluZyh0cnVlKX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvblVzZXJUeXBlKGUpfVxuICAgICAgICBvbktleURvd249eyhlKSA9PiBjaGVja1NwYWNlKGUpfVxuICAgICAgLz5cblxuICAgICAge3dvcmRzLm1hcCgod29yZCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgXCLwn5qAIH4gZmlsZTogaW5kZXgudHN4IH4gbGluZSAxNDggfiB7d29yZHMubWFwIH4gY29ycmVjdFdvcmQod29yZCwgaW5kZXgpXCIsXG4gICAgICAgICAgY29ycmVjdFdvcmQod29yZCwgaW5kZXgpXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFMuV29yZCBrZXk9e3dvcmR9ICRjb3JyZWN0PXtjb3JyZWN0V29yZCh3b3JkLCBpbmRleCl9PlxuICAgICAgICAgICAge3dvcmR9XG4gICAgICAgICAgPC9TLldvcmQ+XG4gICAgICAgICk7XG4gICAgICB9KX1cblxuICAgICAge2lzRmluaXNoZWQgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmaW5pc2hlZFwiPlRlcm1pbm91OiB7Y2FsY1dQTSgpfSBXUE08L2gxPntcIiBcIn1cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Jlc2V0R2FtZX0+UkVTRVQ8L2J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvUy5Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5tYWluYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAzcmVtO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLmZpbmlzaGVkIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRleHRCb3ggPSBzdHlsZWQuaW5wdXRgXG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuYDtcblxuY29uc3Qgd29yZE1vZGlmaWVycyA9IHtcbiAgbmV1dHJhbDogKCkgPT4gY3NzYFxuICAgIGNvbG9yOiBibGFjaztcbiAgYCxcbiAgcmlnaHQ6ICgpID0+IGNzc2BcbiAgICBjb2xvcjogZ3JlZW47XG4gIGAsXG4gIHdyb25nOiAoKSA9PiBjc3NgXG4gICAgY29sb3I6IHJlZDtcbiAgYCxcbn07XG5cbmV4cG9ydCBjb25zdCBXb3JkID0gc3R5bGVkLnNwYW48eyAkY29ycmVjdDogXCJuZXV0cmFsXCIgfCBcInJpZ2h0XCIgfCBcIndyb25nXCIgfT5gXG4gICR7KHsgJGNvcnJlY3QgfSkgPT4gY3NzYFxuICAgICR7ISEkY29ycmVjdCAmJiB3b3JkTW9kaWZpZXJzWyRjb3JyZWN0XSgpfVxuICBgfVxuYDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTWFpbiB9IGZyb20gJy4vTWFpbidcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCJ+L2NvbXBvbmVudHNcIjtcblxuY29uc3QgcGFnZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICByZXR1cm4gPE1haW4gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9