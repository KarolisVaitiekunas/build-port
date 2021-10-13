"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(35);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./styles/theme.ts
var theme = __webpack_require__(454);
// EXTERNAL MODULE: ./src/createEmotionCache.ts + 1 modules
var createEmotionCache = __webpack_require__(295);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Box"
const Box_namespaceObject = require("@mui/material/Box");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(219);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: ./public/logo_test3.svg
/* harmony default export */ const logo_test3 = ({"src":"/_next/static/image/public/logo_test3.b370f402b9d87581661a2fc77b6c9a26.svg","height":1058,"width":1058});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/Navbar.tsx









function ButtonAppBar() {
  const TransparentAppBar = (0,styles_.styled)((AppBar_default()))`
    margin-left: auto;
    margin-right: auto;
    height: 7vh;
    width: 90%;
    background-color: transparent;
    border: none;
    box-shadow: none;
  `;
  const AppBarToolbar = (0,styles_.styled)((Toolbar_default()))`
    display: flex;
    justify-content: center;
  `;
  const AppBarNav = (0,styles_.styled)((Box_default()))(({
    theme
  }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }));
  return /*#__PURE__*/jsx_runtime_.jsx(TransparentAppBar, {
    position: "static",
    children: /*#__PURE__*/jsx_runtime_.jsx(AppBarToolbar, {
      children: /*#__PURE__*/jsx_runtime_.jsx((IconButton_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: logo_test3,
          alt: "logo",
          width: "30px",
          height: "30px"
        })
      })
    })
  });
}
;// CONCATENATED MODULE: external "@mui/material/BottomNavigation"
const BottomNavigation_namespaceObject = require("@mui/material/BottomNavigation");
var BottomNavigation_default = /*#__PURE__*/__webpack_require__.n(BottomNavigation_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(949);
;// CONCATENATED MODULE: ./components/BottomBar.tsx






function SimpleBottomNavigation() {
  const BotNav = (0,styles_.styled)((BottomNavigation_default()))(({
    theme
  }) => ({
    backgroundColor: `${theme.palette.secondary.main}`,
    borderTop: `4px solid ${theme.palette.text.third}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }));
  const ContactText = (0,styles_.styled)(material_.Typography)(({
    theme
  }) => ({
    fontSize: "1.3rem",
    fontFamily: "Share, cursive"
  }));
  const theme = (0,styles_.useTheme)();
  return /*#__PURE__*/jsx_runtime_.jsx(BotNav, {
    children: /*#__PURE__*/jsx_runtime_.jsx(ContactText, {
      children: "Contact: karolisvaitiekunas1@gmail.com"
    })
  });
}
;// CONCATENATED MODULE: ./components/Layout.tsx





function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ButtonAppBar, {}), children, /*#__PURE__*/jsx_runtime_.jsx(SimpleBottomNavigation, {})]
  });
}

/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // Client-side cache, shared for the whole session of the user in the browser.



const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function MyApp(props) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
    value: emotionCache,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Portfolio"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Portfolio, Karolis Vaitiek\u016Bnas"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "keywords",
        content: "HTML, CSS, JavaScript, Portfolio, Karolis Vaitiek\u016Bnas"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "author",
        content: "Karolis Vaitiek\u016Bnas"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1, width=device-width"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
      theme: theme/* default */.Z,
      children: [/*#__PURE__*/jsx_runtime_.jsx((CssBaseline_default()), {}), /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })]
    })]
  });
}

/***/ }),

/***/ 295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/createEmotionCache.ts

function createEmotionCache() {
  return cache_default()({
    key: "css"
  });
}

/***/ }),

/***/ 454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);

// Create a theme instance.
const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff"
    },
    primary: {
      main: "#fefefe"
    },
    secondary: {
      main: "#181818"
    },
    text: {
      primary: "#fefefe",
      secondary: "#926cA6",
      third: "#2da195" //createPalette.d.ts //line 16

    }
  },
  status: {
    danger: "#926cA6"
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ }),

/***/ 949:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 219:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 35:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(636)));
module.exports = __webpack_exports__;

})();