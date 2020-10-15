webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Main/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Main/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Main/styles.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/home/efraim-andrade/Projects/Goomer/wpm-go/src/components/Main/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar unshuffledWords = [\"Arrow\", \"Tomato\", \"Star\", \"Wheel\"];\n\nvar Main = function Main(_ref) {\n  _s();\n\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? \"WPM GOOOOO\" : _ref$title;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(60),\n      count = _useState[0],\n      setCount = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      playing = _useState2[0],\n      setPlaying = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      words = _useState3[0],\n      setWords = _useState3[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (playing) {\n      var countdown = setInterval(function () {\n        setCount(function (count) {\n          return count > 0 ? count - 1 : 60;\n        });\n      }, 1000);\n      return function () {\n        clearInterval(countdown);\n      };\n    }\n  }, [playing]);\n  var shuffleArray = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function (arr) {\n    return arr.map(function (a) {\n      return [Math.random(), a];\n    }).sort().map(function (a) {\n      return a[1];\n    });\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    //Concertar a parte da tipagem\n    if (words.length === 0) {\n      console.log(shuffleArray(unshuffledWords)); // setWords(shuffleArray(unshuffledWords));\n    }\n  }, []);\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, \"CONTAGEM REGRESSIVA: \", count), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"TextBox\"], {\n    type: \"text\",\n    onFocus: function onFocus() {\n      return setPlaying(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Main, \"rdwteRszCxoZ1/xS1iVhKtATaUU=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3g/YmJjYyJdLCJuYW1lcyI6WyJ1bnNodWZmbGVkV29yZHMiLCJNYWluIiwidGl0bGUiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsIndvcmRzIiwic2V0V29yZHMiLCJ1c2VFZmZlY3QiLCJjb3VudGRvd24iLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzaHVmZmxlQXJyYXkiLCJ1c2VDYWxsYmFjayIsImFyciIsIm1hcCIsImEiLCJNYXRoIiwicmFuZG9tIiwic29ydCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQSxJQUFNQSxlQUFlLEdBQUcsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixNQUFwQixFQUE0QixPQUE1QixDQUF4Qjs7QUFFQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE4QjtBQUFBOztBQUFBLHdCQUEzQkMsS0FBMkI7QUFBQSxNQUEzQkEsS0FBMkIsMkJBQW5CLFlBQW1COztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLEVBQUQsQ0FETztBQUFBLE1BQ2xDQyxLQURrQztBQUFBLE1BQzNCQyxRQUQyQjs7QUFBQSxtQkFFWEYsc0RBQVEsQ0FBQyxLQUFELENBRkc7QUFBQSxNQUVsQ0csT0FGa0M7QUFBQSxNQUV6QkMsVUFGeUI7O0FBQUEsbUJBR2ZKLHNEQUFRLENBQVcsRUFBWCxDQUhPO0FBQUEsTUFHbENLLEtBSGtDO0FBQUEsTUFHM0JDLFFBSDJCOztBQUt6Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUosT0FBSixFQUFhO0FBQ1gsVUFBTUssU0FBUyxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUNsQ1AsZ0JBQVEsQ0FBQyxVQUFDRCxLQUFEO0FBQUEsaUJBQVlBLEtBQUssR0FBRyxDQUFSLEdBQVlBLEtBQUssR0FBRyxDQUFwQixHQUF3QixFQUFwQztBQUFBLFNBQUQsQ0FBUjtBQUNELE9BRjRCLEVBRTFCLElBRjBCLENBQTdCO0FBSUEsYUFBTyxZQUFNO0FBQ1hTLHFCQUFhLENBQUNGLFNBQUQsQ0FBYjtBQUNELE9BRkQ7QUFHRDtBQUNGLEdBVlEsRUFVTixDQUFDTCxPQUFELENBVk0sQ0FBVDtBQVlBLE1BQU1RLFlBQVksR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxHQUFELEVBQW1CO0FBQ2xELFdBQU9BLEdBQUcsQ0FDUEMsR0FESSxDQUNBLFVBQUNDLENBQUQ7QUFBQSxhQUFPLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxFQUFELEVBQWdCRixDQUFoQixDQUFQO0FBQUEsS0FEQSxFQUVKRyxJQUZJLEdBR0pKLEdBSEksQ0FHQSxVQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBUjtBQUFBLEtBSEEsQ0FBUDtBQUlELEdBTCtCLEVBSzdCLEVBTDZCLENBQWhDO0FBT0FSLHlEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0EsUUFBSUYsS0FBSyxDQUFDYyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3RCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWVYsWUFBWSxDQUFDZCxlQUFELENBQXhCLEVBRHNCLENBRXRCO0FBQ0Q7QUFDRixHQU5RLEVBTU4sRUFOTSxDQUFUO0FBUUEsU0FDRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQStCSSxLQUEvQixDQURGLEVBR0UsTUFBQywrQ0FBRDtBQUFXLFFBQUksRUFBQyxNQUFoQjtBQUF1QixXQUFPLEVBQUU7QUFBQSxhQUFNRyxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURGO0FBU0QsQ0F6Q0Q7O0dBQU1OLEk7O0tBQUFBLEk7QUEyQ1NBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgdW5zaHVmZmxlZFdvcmRzID0gW1wiQXJyb3dcIiwgXCJUb21hdG9cIiwgXCJTdGFyXCIsIFwiV2hlZWxcIl07XG5cbmNvbnN0IE1haW4gPSAoeyB0aXRsZSA9IFwiV1BNIEdPT09PT1wiIH0pID0+IHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSg2MCk7XG4gIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3dvcmRzLCBzZXRXb3Jkc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgIGNvbnN0IGNvdW50ZG93biA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0Q291bnQoKGNvdW50KSA9PiAoY291bnQgPiAwID8gY291bnQgLSAxIDogNjApKTtcbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGNvdW50ZG93bik7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW3BsYXlpbmddKTtcblxuICBjb25zdCBzaHVmZmxlQXJyYXkgPSB1c2VDYWxsYmFjaygoYXJyOiBzdHJpbmdbXSkgPT4ge1xuICAgIHJldHVybiBhcnJcbiAgICAgIC5tYXAoKGEpID0+IFtNYXRoLnJhbmRvbSgpLCBhXSlcbiAgICAgIC5zb3J0KClcbiAgICAgIC5tYXAoKGEpID0+IGFbMV0pO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvL0NvbmNlcnRhciBhIHBhcnRlIGRhIHRpcGFnZW1cbiAgICBpZiAod29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhzaHVmZmxlQXJyYXkodW5zaHVmZmxlZFdvcmRzKSk7XG4gICAgICAvLyBzZXRXb3JkcyhzaHVmZmxlQXJyYXkodW5zaHVmZmxlZFdvcmRzKSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Uy5Db250YWluZXI+XG4gICAgICA8Uy5UaXRsZT5DT05UQUdFTSBSRUdSRVNTSVZBOiB7Y291bnR9PC9TLlRpdGxlPlxuXG4gICAgICA8Uy5UZXh0Qm94IHR5cGU9XCJ0ZXh0XCIgb25Gb2N1cz17KCkgPT4gc2V0UGxheWluZyh0cnVlKX0gLz5cblxuICAgICAge31cbiAgICA8L1MuQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main/index.tsx\n");

/***/ })

})