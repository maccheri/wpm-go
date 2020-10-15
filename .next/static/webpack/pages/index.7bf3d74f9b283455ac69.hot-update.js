webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Main/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Main/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Main/styles.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/home/efraim-andrade/Projects/Goomer/wpm-go/src/components/Main/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Main = function Main(_ref) {\n  _s();\n\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? \"WPM GOOOOO\" : _ref$title;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(60),\n      count = _useState[0],\n      setCount = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      playing = _useState2[0],\n      setPlaying = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var countdown = setInterval(function () {\n      setCount(function (count) {\n        return count > 0 ? count - 1 : 60;\n      });\n    }, 1000);\n    return function () {\n      clearInterval(countdown);\n    };\n  }, [playing]);\n  var words = [\"Arrow\", \"Tomato\", \"Star\", \"Wheel\"];\n\n  var shuffleArray = function shuffleArray(arr) {\n    return arr.map(function (a) {\n      return [Math.random(), a];\n    }).sort().map(function (a) {\n      return a[1];\n    });\n  };\n\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: function onClick() {\n      return setPlaying(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"Iniciar\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"CONTAGEM REGRESSIVA: \", count), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"TextBox\"], {\n    type: \"text\",\n    onFocus: function onFocus() {\n      return setPlaying(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }), shuffleArray(words).map(function (word) {\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }\n    }, word);\n  }));\n};\n\n_s(Main, \"WElKyezDvzsT5wkpqE6k+0k1Afg=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3g/YmJjYyJdLCJuYW1lcyI6WyJNYWluIiwidGl0bGUiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsInVzZUVmZmVjdCIsImNvdW50ZG93biIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIndvcmRzIiwic2h1ZmZsZUFycmF5IiwiYXJyIiwibWFwIiwiYSIsIk1hdGgiLCJyYW5kb20iLCJzb3J0Iiwid29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE4QjtBQUFBOztBQUFBLHdCQUEzQkMsS0FBMkI7QUFBQSxNQUEzQkEsS0FBMkIsMkJBQW5CLFlBQW1COztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLEVBQUQsQ0FETztBQUFBLE1BQ2xDQyxLQURrQztBQUFBLE1BQzNCQyxRQUQyQjs7QUFBQSxtQkFFWEYsc0RBQVEsQ0FBQyxLQUFELENBRkc7QUFBQSxNQUVsQ0csT0FGa0M7QUFBQSxNQUV6QkMsVUFGeUI7O0FBSXpDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxTQUFTLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ2xDTCxjQUFRLENBQUMsVUFBQ0QsS0FBRDtBQUFBLGVBQVlBLEtBQUssR0FBRyxDQUFSLEdBQVlBLEtBQUssR0FBRyxDQUFwQixHQUF3QixFQUFwQztBQUFBLE9BQUQsQ0FBUjtBQUNELEtBRjRCLEVBRTFCLElBRjBCLENBQTdCO0FBSUEsV0FBTyxZQUFNO0FBQ1hPLG1CQUFhLENBQUNGLFNBQUQsQ0FBYjtBQUNELEtBRkQ7QUFHRCxHQVJRLEVBUU4sQ0FBQ0gsT0FBRCxDQVJNLENBQVQ7QUFVQSxNQUFNTSxLQUFLLEdBQUcsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixNQUFwQixFQUE0QixPQUE1QixDQUFkOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEdBQUQ7QUFBQSxXQUNuQkEsR0FBRyxDQUNBQyxHQURILENBQ08sVUFBQ0MsQ0FBRDtBQUFBLGFBQU8sQ0FBQ0MsSUFBSSxDQUFDQyxNQUFMLEVBQUQsRUFBZ0JGLENBQWhCLENBQVA7QUFBQSxLQURQLEVBRUdHLElBRkgsR0FHR0osR0FISCxDQUdPLFVBQUNDLENBQUQ7QUFBQSxhQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFSO0FBQUEsS0FIUCxDQURtQjtBQUFBLEdBQXJCOztBQU1BLFNBQ0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw4Q0FBRDtBQUFVLFdBQU8sRUFBRTtBQUFBLGFBQU1ULFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsS0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBRUUsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUErQkgsS0FBL0IsQ0FGRixFQUlFLE1BQUMsK0NBQUQ7QUFBVyxRQUFJLEVBQUMsTUFBaEI7QUFBdUIsV0FBTyxFQUFFO0FBQUEsYUFBTUcsVUFBVSxDQUFDLElBQUQsQ0FBaEI7QUFBQSxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFNR00sWUFBWSxDQUFDRCxLQUFELENBQVosQ0FBb0JHLEdBQXBCLENBQXdCLFVBQUNLLElBQUQ7QUFBQSxXQUN2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlBLElBQUosQ0FEdUI7QUFBQSxHQUF4QixDQU5ILENBREY7QUFZRCxDQWxDRDs7R0FBTW5CLEk7O0tBQUFBLEk7QUFvQ1NBLG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgKiBhcyBTIGZyb20gXCIuL3N0eWxlc1wiO1xuXG5jb25zdCBNYWluID0gKHsgdGl0bGUgPSBcIldQTSBHT09PT09cIiB9KSA9PiB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoNjApO1xuICBjb25zdCBbcGxheWluZywgc2V0UGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb3VudGRvd24gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRDb3VudCgoY291bnQpID0+IChjb3VudCA+IDAgPyBjb3VudCAtIDEgOiA2MCkpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRkb3duKTtcbiAgICB9O1xuICB9LCBbcGxheWluZ10pO1xuXG4gIGNvbnN0IHdvcmRzID0gW1wiQXJyb3dcIiwgXCJUb21hdG9cIiwgXCJTdGFyXCIsIFwiV2hlZWxcIl07XG5cbiAgY29uc3Qgc2h1ZmZsZUFycmF5ID0gKGFycjogQXJyYXk8c3RyaW5nPikgPT5cbiAgICBhcnJcbiAgICAgIC5tYXAoKGEpID0+IFtNYXRoLnJhbmRvbSgpLCBhXSlcbiAgICAgIC5zb3J0KClcbiAgICAgIC5tYXAoKGEpID0+IGFbMV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFMuQ29udGFpbmVyPlxuICAgICAgPFMuQnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBsYXlpbmcodHJ1ZSl9PkluaWNpYXI8L1MuQnV0dG9uPlxuICAgICAgPFMuVGl0bGU+Q09OVEFHRU0gUkVHUkVTU0lWQToge2NvdW50fTwvUy5UaXRsZT5cblxuICAgICAgPFMuVGV4dEJveCB0eXBlPVwidGV4dFwiIG9uRm9jdXM9eygpID0+IHNldFBsYXlpbmcodHJ1ZSl9IC8+XG5cbiAgICAgIHtzaHVmZmxlQXJyYXkod29yZHMpLm1hcCgod29yZCkgPT4gKFxuICAgICAgICA8cD57d29yZH08L3A+XG4gICAgICApKX1cbiAgICA8L1MuQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Main/index.tsx\n");

/***/ })

})