webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Main/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Main/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/Main/styles.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/home/efraim-andrade/Projects/Goomer/wpm-go/src/components/Main/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Main = function Main(_ref) {\n  _s();\n\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? \"WPM GOOOOO\" : _ref$title;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(60),\n      count = _useState[0],\n      setCount = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      playing = _useState2[0],\n      setPlaying = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (playing) {\n      var countdown = setInterval(function () {\n        setCount(function (count) {\n          return count > 0 ? count - 1 : 60;\n        });\n      }, 1000);\n      return function () {\n        clearInterval(countdown);\n      };\n    }\n  }, [playing]);\n  var words = [\"Arrow\", \"Tomato\", \"Star\", \"Wheel\"];\n\n  var shuffleArray = function shuffleArray(arr) {\n    return arr.map(function (a) {\n      return [Math.random(), a];\n    }).sort().map(function (a) {\n      return a[1];\n    });\n  };\n\n  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, \"CONTAGEM REGRESSIVA: \", count), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"TextBox\"], {\n    type: \"text\",\n    onFocus: function onFocus() {\n      return setPlaying(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), shuffleArray(words).map(function (word) {\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }\n    }, word);\n  }));\n};\n\n_s(Main, \"WElKyezDvzsT5wkpqE6k+0k1Afg=\");\n\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\n\nvar _c;\n\n$RefreshReg$(_c, \"Main\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi9pbmRleC50c3g/YmJjYyJdLCJuYW1lcyI6WyJNYWluIiwidGl0bGUiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsInVzZUVmZmVjdCIsImNvdW50ZG93biIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIndvcmRzIiwic2h1ZmZsZUFycmF5IiwiYXJyIiwibWFwIiwiYSIsIk1hdGgiLCJyYW5kb20iLCJzb3J0Iiwid29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUE4QjtBQUFBOztBQUFBLHdCQUEzQkMsS0FBMkI7QUFBQSxNQUEzQkEsS0FBMkIsMkJBQW5CLFlBQW1COztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLEVBQUQsQ0FETztBQUFBLE1BQ2xDQyxLQURrQztBQUFBLE1BQzNCQyxRQUQyQjs7QUFBQSxtQkFFWEYsc0RBQVEsQ0FBQyxLQUFELENBRkc7QUFBQSxNQUVsQ0csT0FGa0M7QUFBQSxNQUV6QkMsVUFGeUI7O0FBSXpDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJRixPQUFKLEVBQWE7QUFDWCxVQUFNRyxTQUFTLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQ2xDTCxnQkFBUSxDQUFDLFVBQUNELEtBQUQ7QUFBQSxpQkFBWUEsS0FBSyxHQUFHLENBQVIsR0FBWUEsS0FBSyxHQUFHLENBQXBCLEdBQXdCLEVBQXBDO0FBQUEsU0FBRCxDQUFSO0FBQ0QsT0FGNEIsRUFFMUIsSUFGMEIsQ0FBN0I7QUFJQSxhQUFPLFlBQU07QUFDWE8scUJBQWEsQ0FBQ0YsU0FBRCxDQUFiO0FBQ0QsT0FGRDtBQUdEO0FBQ0YsR0FWUSxFQVVOLENBQUNILE9BQUQsQ0FWTSxDQUFUO0FBWUEsTUFBTU0sS0FBSyxHQUFHLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsTUFBcEIsRUFBNEIsT0FBNUIsQ0FBZDs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxHQUFEO0FBQUEsV0FDbkJBLEdBQUcsQ0FDQUMsR0FESCxDQUNPLFVBQUNDLENBQUQ7QUFBQSxhQUFPLENBQUNDLElBQUksQ0FBQ0MsTUFBTCxFQUFELEVBQWdCRixDQUFoQixDQUFQO0FBQUEsS0FEUCxFQUVHRyxJQUZILEdBR0dKLEdBSEgsQ0FHTyxVQUFDQyxDQUFEO0FBQUEsYUFBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBUjtBQUFBLEtBSFAsQ0FEbUI7QUFBQSxHQUFyQjs7QUFNQSxTQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBK0JaLEtBQS9CLENBREYsRUFHRSxNQUFDLCtDQUFEO0FBQVcsUUFBSSxFQUFDLE1BQWhCO0FBQXVCLFdBQU8sRUFBRTtBQUFBLGFBQU1HLFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLEVBS0dNLFlBQVksQ0FBQ0QsS0FBRCxDQUFaLENBQW9CRyxHQUFwQixDQUF3QixVQUFDSyxJQUFEO0FBQUEsV0FDdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJQSxJQUFKLENBRHVCO0FBQUEsR0FBeEIsQ0FMSCxDQURGO0FBV0QsQ0FuQ0Q7O0dBQU1uQixJOztLQUFBQSxJO0FBcUNTQSxtRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01haW4vaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0ICogYXMgUyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuY29uc3QgTWFpbiA9ICh7IHRpdGxlID0gXCJXUE0gR09PT09PXCIgfSkgPT4ge1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDYwKTtcbiAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBsYXlpbmcpIHtcbiAgICAgIGNvbnN0IGNvdW50ZG93biA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgc2V0Q291bnQoKGNvdW50KSA9PiAoY291bnQgPiAwID8gY291bnQgLSAxIDogNjApKTtcbiAgICAgIH0sIDEwMDApO1xuXG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBjbGVhckludGVydmFsKGNvdW50ZG93bik7XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW3BsYXlpbmddKTtcblxuICBjb25zdCB3b3JkcyA9IFtcIkFycm93XCIsIFwiVG9tYXRvXCIsIFwiU3RhclwiLCBcIldoZWVsXCJdO1xuXG4gIGNvbnN0IHNodWZmbGVBcnJheSA9IChhcnI6IEFycmF5PHN0cmluZz4pID0+XG4gICAgYXJyXG4gICAgICAubWFwKChhKSA9PiBbTWF0aC5yYW5kb20oKSwgYV0pXG4gICAgICAuc29ydCgpXG4gICAgICAubWFwKChhKSA9PiBhWzFdKTtcblxuICByZXR1cm4gKFxuICAgIDxTLkNvbnRhaW5lcj5cbiAgICAgIDxTLlRpdGxlPkNPTlRBR0VNIFJFR1JFU1NJVkE6IHtjb3VudH08L1MuVGl0bGU+XG5cbiAgICAgIDxTLlRleHRCb3ggdHlwZT1cInRleHRcIiBvbkZvY3VzPXsoKSA9PiBzZXRQbGF5aW5nKHRydWUpfSAvPlxuXG4gICAgICB7c2h1ZmZsZUFycmF5KHdvcmRzKS5tYXAoKHdvcmQpID0+IChcbiAgICAgICAgPHA+e3dvcmR9PC9wPlxuICAgICAgKSl9XG4gICAgPC9TLkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Main/index.tsx\n");

/***/ })

})