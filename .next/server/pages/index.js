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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/Main/styles.ts\");\n\n\nvar _jsxFileName = \"/home/efraim-andrade/Projects/Goomer/wpm-go/src/components/Main/index.tsx\";\n\n\nconst unshuffledWords = [\"Arrow\", \"Tomato\", \"Star\", \"Wheel\"];\nconst INITIAL_COUNT_VALUE = 10;\n\nconst Main = ({\n  title = \"WPM GOOOOO\"\n}) => {\n  const {\n    0: currentWord,\n    1: setCurrentWord\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: currentIndex,\n    1: setCurrentIndex\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: count,\n    1: setCount\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(INITIAL_COUNT_VALUE);\n  const {\n    0: playing,\n    1: setPlaying\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const {\n    0: words,\n    1: setWords\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: typed,\n    1: setTyped\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const {\n    0: wpm,\n    1: setWpm\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const ref = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (playing) {\n      const countdown = setInterval(() => {\n        setCount(count => count > 0 && !isFinished ? count - 1 : INITIAL_COUNT_VALUE);\n      }, 1000);\n      return () => {\n        clearInterval(countdown);\n      };\n    }\n  }, [playing]);\n  const shuffleArray = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(arr => {\n    return arr.map(a => [Math.random(), a]).sort().map(a => a[1]);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (words.length === 0) {\n      const shuffledArray = shuffleArray(unshuffledWords);\n      setWords(shuffledArray);\n    }\n  }, []);\n  const isFinished = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(() => typed.length === words.length || count === 0, [typed, words, count]);\n  const checkWord = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(() => {\n    return words[currentIndex].toLowerCase().startsWith(currentWord.toLowerCase()); // return words.some((word) => word.startsWith(currentWord));\n  }, [currentWord, currentIndex, words]);\n  const checkSpace = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(e => {\n    if (e.key === \"Backspace\" && !currentWord && currentIndex >= 1) {\n      ref.current.value = typed[currentIndex - 1];\n      setCurrentWord(typed[currentIndex - 1]);\n      setCurrentIndex(index => index - 1);\n      setTyped(state => {\n        const lastRemoved = state.slice(0, state.length - 1);\n        return lastRemoved;\n      });\n      e.preventDefault();\n    }\n\n    if (e.key === \" \" && !isFinished) {\n      e.preventDefault();\n      checkWord();\n      setTyped(state => {\n        return [...state, currentWord];\n      });\n      setCurrentIndex(index => index + 1);\n      setCurrentWord(\"\");\n      ref.current.value = \"\";\n    }\n  }, [currentWord]);\n  const onUserType = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(e => {\n    if (e.key !== \" \") {\n      setCurrentWord(e.target.value);\n    }\n  }, []);\n  const resetGame = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(() => {\n    setTyped([]);\n    setPlaying(false);\n    setCount(INITIAL_COUNT_VALUE);\n  }, []);\n  const calcWPM = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(() => typed.length / (INITIAL_COUNT_VALUE - count), [typed, count]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"Title\"], {\n      children: [\"CONTAGEM REGRESSIVA: \", count]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles__WEBPACK_IMPORTED_MODULE_2__[\"TextBox\"], {\n      disabled: isFinished,\n      type: \"text\",\n      ref: ref,\n      onFocus: () => setPlaying(true),\n      onChange: e => onUserType(e),\n      onKeyDown: e => checkSpace(e)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }, undefined), words.map((word, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [word, \" -\", \" \", typed[index] && typed[index].includes(word.toLowerCase()) ? \"certo\" : \"errado\"]\n    }, word, true, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 9\n    }, undefined)), isFinished && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"finished\",\n        children: [\"Terminou: \", calcWPM(), \" WPM\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 11\n      }, undefined), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: resetGame,\n        children: \"RESET\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 117,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL2luZGV4LnRzeD9iYmNjIl0sIm5hbWVzIjpbInVuc2h1ZmZsZWRXb3JkcyIsIklOSVRJQUxfQ09VTlRfVkFMVUUiLCJNYWluIiwidGl0bGUiLCJjdXJyZW50V29yZCIsInNldEN1cnJlbnRXb3JkIiwidXNlU3RhdGUiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJjb3VudCIsInNldENvdW50IiwicGxheWluZyIsInNldFBsYXlpbmciLCJ3b3JkcyIsInNldFdvcmRzIiwidHlwZWQiLCJzZXRUeXBlZCIsIndwbSIsInNldFdwbSIsInJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsImNvdW50ZG93biIsInNldEludGVydmFsIiwiaXNGaW5pc2hlZCIsImNsZWFySW50ZXJ2YWwiLCJzaHVmZmxlQXJyYXkiLCJ1c2VDYWxsYmFjayIsImFyciIsIm1hcCIsImEiLCJNYXRoIiwicmFuZG9tIiwic29ydCIsImxlbmd0aCIsInNodWZmbGVkQXJyYXkiLCJ1c2VNZW1vIiwiY2hlY2tXb3JkIiwidG9Mb3dlckNhc2UiLCJzdGFydHNXaXRoIiwiY2hlY2tTcGFjZSIsImUiLCJrZXkiLCJjdXJyZW50IiwidmFsdWUiLCJpbmRleCIsInN0YXRlIiwibGFzdFJlbW92ZWQiLCJzbGljZSIsInByZXZlbnREZWZhdWx0Iiwib25Vc2VyVHlwZSIsInRhcmdldCIsInJlc2V0R2FtZSIsImNhbGNXUE0iLCJ3b3JkIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBUUE7QUFFQSxNQUFNQSxlQUFlLEdBQUcsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixNQUFwQixFQUE0QixPQUE1QixDQUF4QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLEVBQTVCOztBQUVBLE1BQU1DLElBQUksR0FBRyxDQUFDO0FBQUVDLE9BQUssR0FBRztBQUFWLENBQUQsS0FBOEI7QUFDekMsUUFBTTtBQUFBLE9B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O0FBQUEsbUJBREYsRUFDMEQsR0FEMUQsZUFFRTtBQUFRLGVBQU8sRUFBRUQsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQSxvQkF0Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE4QkQsQ0FwSUQ7O0FBc0llbEQsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICB1c2VNZW1vLFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxuICB1c2VDYWxsYmFjayxcbiAgdXNlUmVmLFxufSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgdW5zaHVmZmxlZFdvcmRzID0gW1wiQXJyb3dcIiwgXCJUb21hdG9cIiwgXCJTdGFyXCIsIFwiV2hlZWxcIl07XG5jb25zdCBJTklUSUFMX0NPVU5UX1ZBTFVFID0gMTA7XG5cbmNvbnN0IE1haW4gPSAoeyB0aXRsZSA9IFwiV1BNIEdPT09PT1wiIH0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRXb3JkLCBzZXRDdXJyZW50V29yZF0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShJTklUSUFMX0NPVU5UX1ZBTFVFKTtcbiAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbd29yZHMsIHNldFdvcmRzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFt0eXBlZCwgc2V0VHlwZWRdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW3dwbSwgc2V0V3BtXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICBjb25zdCBjb3VudGRvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHNldENvdW50KChjb3VudCkgPT5cbiAgICAgICAgICBjb3VudCA+IDAgJiYgIWlzRmluaXNoZWQgPyBjb3VudCAtIDEgOiBJTklUSUFMX0NPVU5UX1ZBTFVFXG4gICAgICAgICk7XG4gICAgICB9LCAxMDAwKTtcblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGRvd24pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtwbGF5aW5nXSk7XG5cbiAgY29uc3Qgc2h1ZmZsZUFycmF5ID0gdXNlQ2FsbGJhY2soKGFycjogc3RyaW5nW10pID0+IHtcbiAgICByZXR1cm4gYXJyXG4gICAgICAubWFwKChhKSA9PiBbTWF0aC5yYW5kb20oKSwgYV0pXG4gICAgICAuc29ydCgpXG4gICAgICAubWFwKChhKSA9PiBhWzFdKSBhcyBzdHJpbmdbXTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHdvcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc2h1ZmZsZWRBcnJheSA9IHNodWZmbGVBcnJheSh1bnNodWZmbGVkV29yZHMpO1xuXG4gICAgICBzZXRXb3JkcyhzaHVmZmxlZEFycmF5KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBpc0ZpbmlzaGVkID0gdXNlTWVtbyhcbiAgICAoKSA9PiB0eXBlZC5sZW5ndGggPT09IHdvcmRzLmxlbmd0aCB8fCBjb3VudCA9PT0gMCxcbiAgICBbdHlwZWQsIHdvcmRzLCBjb3VudF1cbiAgKTtcblxuICBjb25zdCBjaGVja1dvcmQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmV0dXJuIHdvcmRzW2N1cnJlbnRJbmRleF1cbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAuc3RhcnRzV2l0aChjdXJyZW50V29yZC50b0xvd2VyQ2FzZSgpKTtcblxuICAgIC8vIHJldHVybiB3b3Jkcy5zb21lKCh3b3JkKSA9PiB3b3JkLnN0YXJ0c1dpdGgoY3VycmVudFdvcmQpKTtcbiAgfSwgW2N1cnJlbnRXb3JkLCBjdXJyZW50SW5kZXgsIHdvcmRzXSk7XG5cbiAgY29uc3QgY2hlY2tTcGFjZSA9IHVzZUNhbGxiYWNrKFxuICAgIChlKSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiQmFja3NwYWNlXCIgJiYgIWN1cnJlbnRXb3JkICYmIGN1cnJlbnRJbmRleCA+PSAxKSB7XG4gICAgICAgIHJlZi5jdXJyZW50LnZhbHVlID0gdHlwZWRbY3VycmVudEluZGV4IC0gMV07XG4gICAgICAgIHNldEN1cnJlbnRXb3JkKHR5cGVkW2N1cnJlbnRJbmRleCAtIDFdKTtcbiAgICAgICAgc2V0Q3VycmVudEluZGV4KChpbmRleCkgPT4gaW5kZXggLSAxKTtcblxuICAgICAgICBzZXRUeXBlZCgoc3RhdGUpID0+IHtcbiAgICAgICAgICBjb25zdCBsYXN0UmVtb3ZlZCA9IHN0YXRlLnNsaWNlKDAsIHN0YXRlLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIHJldHVybiBsYXN0UmVtb3ZlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXkgPT09IFwiIFwiICYmICFpc0ZpbmlzaGVkKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2hlY2tXb3JkKCk7XG5cbiAgICAgICAgc2V0VHlwZWQoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFsuLi5zdGF0ZSwgY3VycmVudFdvcmRdO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZXRDdXJyZW50SW5kZXgoKGluZGV4KSA9PiBpbmRleCArIDEpO1xuICAgICAgICBzZXRDdXJyZW50V29yZChcIlwiKTtcblxuICAgICAgICByZWYuY3VycmVudC52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBbY3VycmVudFdvcmRdXG4gICk7XG5cbiAgY29uc3Qgb25Vc2VyVHlwZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XG4gICAgaWYgKGUua2V5ICE9PSBcIiBcIikge1xuICAgICAgc2V0Q3VycmVudFdvcmQoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlc2V0R2FtZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRUeXBlZChbXSk7XG4gICAgc2V0UGxheWluZyhmYWxzZSk7XG4gICAgc2V0Q291bnQoSU5JVElBTF9DT1VOVF9WQUxVRSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBjYWxjV1BNID0gdXNlQ2FsbGJhY2soXG4gICAgKCkgPT4gdHlwZWQubGVuZ3RoIC8gKElOSVRJQUxfQ09VTlRfVkFMVUUgLSBjb3VudCksXG4gICAgW3R5cGVkLCBjb3VudF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxTLkNvbnRhaW5lcj5cbiAgICAgIDxTLlRpdGxlPkNPTlRBR0VNIFJFR1JFU1NJVkE6IHtjb3VudH08L1MuVGl0bGU+XG5cbiAgICAgIDxTLlRleHRCb3hcbiAgICAgICAgZGlzYWJsZWQ9e2lzRmluaXNoZWR9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldFBsYXlpbmcodHJ1ZSl9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25Vc2VyVHlwZShlKX1cbiAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gY2hlY2tTcGFjZShlKX1cbiAgICAgIC8+XG5cbiAgICAgIHt3b3Jkcy5tYXAoKHdvcmQsIGluZGV4KSA9PiAoXG4gICAgICAgIDxwIGtleT17d29yZH0+XG4gICAgICAgICAge3dvcmR9IC17XCIgXCJ9XG4gICAgICAgICAge3R5cGVkW2luZGV4XSAmJiB0eXBlZFtpbmRleF0uaW5jbHVkZXMod29yZC50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgPyBcImNlcnRvXCJcbiAgICAgICAgICAgIDogXCJlcnJhZG9cIn1cbiAgICAgICAgPC9wPlxuICAgICAgKSl9XG5cbiAgICAgIHtpc0ZpbmlzaGVkICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmluaXNoZWRcIj5UZXJtaW5vdToge2NhbGNXUE0oKX0gV1BNPC9oMT57XCIgXCJ9XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZXNldEdhbWV9PlJFU0VUPC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICA8L1MuQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main/index.tsx\n");

/***/ }),

/***/ "./src/components/Main/styles.ts":
/*!***************************************!*\
  !*** ./src/components/Main/styles.ts ***!
  \***************************************/
/*! exports provided: Container, Title, Button, TextBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextBox\", function() { return TextBox; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main`\n  width: 100%;\n  height: 100%;\n  padding: 3rem;\n\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  .finished {\n    color: red;\n  }\n`;\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1`\n  font-size: 2.5rem;\n`;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`\n  font-size: 2.5rem;\n`;\nconst TextBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input`\n  width: 100px;\n  height: 50px;\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYWluL3N0eWxlcy50cz82MzA0Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsIm1haW4iLCJUaXRsZSIsImgxIiwiQnV0dG9uIiwiYnV0dG9uIiwiVGV4dEJveCIsImlucHV0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxJQUFLOzs7Ozs7Ozs7Ozs7Q0FBOUI7QUFjQSxNQUFNQyxLQUFLLEdBQUdGLHdEQUFNLENBQUNHLEVBQUc7O0NBQXhCO0FBSUEsTUFBTUMsTUFBTSxHQUFHSix3REFBTSxDQUFDSyxNQUFPOztDQUE3QjtBQUlBLE1BQU1DLE9BQU8sR0FBR04sd0RBQU0sQ0FBQ08sS0FBTTs7O0NBQTdCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWFpbi9zdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLm1haW5gXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDNyZW07XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAuZmluaXNoZWQge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgZm9udC1zaXplOiAyLjVyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dEJveCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main/styles.ts\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/components */ \"./src/components/index.ts\");\n\nvar _jsxFileName = \"/home/efraim-andrade/Projects/Goomer/wpm-go/src/pages/index.tsx\";\n\n\n\nconst pages = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components__WEBPACK_IMPORTED_MODULE_2__[\"Main\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pages);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsicGFnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxNQUFNQSxLQUFlLEdBQUcsTUFBTTtBQUM1QixzQkFBTyxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUllQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IE1haW4gfSBmcm9tIFwifi9jb21wb25lbnRzXCI7XG5cbmNvbnN0IHBhZ2VzOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIDxNYWluIC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

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