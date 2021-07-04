/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_arseniy_chebynkin_kitnl_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/arseniy-chebynkin-kitnl.jpg */ "./src/img/arseniy-chebynkin-kitnl.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_img_arseniy_chebynkin_kitnl_jpg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --transparent0: rgba(0, 0, 0, .0);\n    --transparent8: rgba(0, 0, 0, .8);\n    --light: hsl(0, 0%, 92%);\n    --dark: hsl(0, 0%, 12%);\n    --givry: hsl(44, 80%, 85%);\n    --auburn: hsl(0, 75%, 65%);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Cairo', sans-serif;\n    background-color: var(--light);\n    color: var(--light);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-attachment: fixed;\n    background-size: 104% 104%;\n    /* background-size: cover; */\n    background-position: center center;\n} \n\nbutton {\n    cursor: pointer;\n    outline: none;\n    border: none;\n    color: var(--light);\n    font-family: 'Cairo', sans-serif;\n}\n\na {\n    text-decoration: none;\n    outline: none;\n    color: var(--light);\n}\n\nh1,h2,h3,h4,h5,h6 {\n    font-family: 'Merienda', cursive;\n    text-align: center;\n}\n\nbutton:hover,\nbutton:focus-visible, \na:hover,\na:focus-visible{\n    text-decoration: underline;\n    text-underline-offset: 30%;\n    color: var(--givry);\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--transparent8);\n}\n\nheader h1 {\n    text-align: center;\n    font-size: 3.5rem;\n    padding: 2rem 1rem 1rem 1rem;\n}\n\nheader nav {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n}\n\nheader nav button{\n    margin: 1rem;\n    font-size: 1.2rem;\n    background: var(--transparent0);\n}\n\n.nav-btn.active {\n    color: var(--auburn);\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\ndiv.content {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    color: var(--midnight-blue);\n    background-color: var(--transparent0);\n}\n\ndiv.content > div {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    margin-top: .5rem;\n    background-color: var(--transparent8);\n    border-radius: 3px;\n}\n\ndiv.content > div > div,\ndiv.content > div > div > div {\n    padding: 1rem;\n}\n\n.div-combo {\n    padding: 0!important;\n    display: flex;\n    flex-direction: row;\n}\n\n.div-combo div:nth-child(1) {\n    background-color: var(--transparent8);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.review {\n    max-width: 50ch;\n}\n\n.review p {\n    padding: .1rem;\n}\n\n.review p::before,\n.review p::after {\n    content: '\"';\n    font-size: 1.3rem;\n    color: gray;\n}\n\n.right {\n    text-align: right;\n    font-weight: bolder;\n}\n\n.right::before {\n    content: \"- \";\n}\n\nh3 {\n    margin-bottom: 1rem;\n}\n\nul {\n    list-style-type: none;\n    text-align: center;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh5::before {\n    content: \"\\00A5\";\n}\n\nh5 {\n    text-align: right;\n}\n\n.content > div > div.food {\n    background-color: var(--transparent8);\n    border-radius: 3px;\n    margin-top: 1rem;\n}\n\n.content > div > div.food img {\n    width: 100%;\n    max-width: 50ch;\n}\n\n.content div.contact p {\n    width: 100%;\n}\n\n.content div.contact p span {\n    float: right;\n}\n\n.content div.contact img,\n.hero img {\n    width: 100%;\n    max-width: 60ch;\n    object-fit: cover;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    background-color: var(--dark);\n}\n\nfooter div{\n    margin: .5rem 1rem;\n    font-size: .9rem;\n}\n\ni {\n    font-size: 1.2rem;\n}\n\nfooter div a {\n    font-size: 1rem;  \n}\n\n@media only screen and (max-width: 750px) {\n    header h1 {\n        font-size: 2.5rem;\n        padding: 1rem .5rem .5rem .5rem;\n    }\n    header nav button {\n        margin: .5rem 1rem;\n    }\n    .div-combo {\n        flex-direction: column;\n    }\n    h2 {\n        font-size: 1.7rem;\n    }\n    footer {\n        flex-direction: column;\n    } \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iCAAiC;IACjC,iCAAiC;IACjC,wBAAwB;IACxB,uBAAuB;IACvB,0BAA0B;IAC1B,0BAA0B;AAC9B;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,gCAAgC;IAChC,8BAA8B;IAC9B,mBAAmB;IACnB,yDAAwD;IACxD,4BAA4B;IAC5B,0BAA0B;IAC1B,4BAA4B;IAC5B,kCAAkC;AACtC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;;;;IAII,0BAA0B;IAC1B,0BAA0B;IAC1B,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,qCAAqC;AACzC;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,oBAAoB;IACpB,0BAA0B;IAC1B,0BAA0B;AAC9B;;AAEA;IACI,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,2BAA2B;IAC3B,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,iBAAiB;IACjB,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,WAAW;IACX,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI;QACI,iBAAiB;QACjB,+BAA+B;IACnC;IACA;QACI,kBAAkB;IACtB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,iBAAiB;IACrB;IACA;QACI,sBAAsB;IAC1B;AACJ","sourcesContent":[":root {\n    --transparent0: rgba(0, 0, 0, .0);\n    --transparent8: rgba(0, 0, 0, .8);\n    --light: hsl(0, 0%, 92%);\n    --dark: hsl(0, 0%, 12%);\n    --givry: hsl(44, 80%, 85%);\n    --auburn: hsl(0, 75%, 65%);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Cairo', sans-serif;\n    background-color: var(--light);\n    color: var(--light);\n    background-image: url(./img/arseniy-chebynkin-kitnl.jpg);\n    background-attachment: fixed;\n    background-size: 104% 104%;\n    /* background-size: cover; */\n    background-position: center center;\n} \n\nbutton {\n    cursor: pointer;\n    outline: none;\n    border: none;\n    color: var(--light);\n    font-family: 'Cairo', sans-serif;\n}\n\na {\n    text-decoration: none;\n    outline: none;\n    color: var(--light);\n}\n\nh1,h2,h3,h4,h5,h6 {\n    font-family: 'Merienda', cursive;\n    text-align: center;\n}\n\nbutton:hover,\nbutton:focus-visible, \na:hover,\na:focus-visible{\n    text-decoration: underline;\n    text-underline-offset: 30%;\n    color: var(--givry);\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--transparent8);\n}\n\nheader h1 {\n    text-align: center;\n    font-size: 3.5rem;\n    padding: 2rem 1rem 1rem 1rem;\n}\n\nheader nav {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n}\n\nheader nav button{\n    margin: 1rem;\n    font-size: 1.2rem;\n    background: var(--transparent0);\n}\n\n.nav-btn.active {\n    color: var(--auburn);\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\ndiv.content {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    color: var(--midnight-blue);\n    background-color: var(--transparent0);\n}\n\ndiv.content > div {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    margin-top: .5rem;\n    background-color: var(--transparent8);\n    border-radius: 3px;\n}\n\ndiv.content > div > div,\ndiv.content > div > div > div {\n    padding: 1rem;\n}\n\n.div-combo {\n    padding: 0!important;\n    display: flex;\n    flex-direction: row;\n}\n\n.div-combo div:nth-child(1) {\n    background-color: var(--transparent8);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.review {\n    max-width: 50ch;\n}\n\n.review p {\n    padding: .1rem;\n}\n\n.review p::before,\n.review p::after {\n    content: '\"';\n    font-size: 1.3rem;\n    color: gray;\n}\n\n.right {\n    text-align: right;\n    font-weight: bolder;\n}\n\n.right::before {\n    content: \"- \";\n}\n\nh3 {\n    margin-bottom: 1rem;\n}\n\nul {\n    list-style-type: none;\n    text-align: center;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh5::before {\n    content: \"\\00A5\";\n}\n\nh5 {\n    text-align: right;\n}\n\n.content > div > div.food {\n    background-color: var(--transparent8);\n    border-radius: 3px;\n    margin-top: 1rem;\n}\n\n.content > div > div.food img {\n    width: 100%;\n    max-width: 50ch;\n}\n\n.content div.contact p {\n    width: 100%;\n}\n\n.content div.contact p span {\n    float: right;\n}\n\n.content div.contact img,\n.hero img {\n    width: 100%;\n    max-width: 60ch;\n    object-fit: cover;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    background-color: var(--dark);\n}\n\nfooter div{\n    margin: .5rem 1rem;\n    font-size: .9rem;\n}\n\ni {\n    font-size: 1.2rem;\n}\n\nfooter div a {\n    font-size: 1rem;  \n}\n\n@media only screen and (max-width: 750px) {\n    header h1 {\n        font-size: 2.5rem;\n        padding: 1rem .5rem .5rem .5rem;\n    }\n    header nav button {\n        margin: .5rem 1rem;\n    }\n    .div-combo {\n        flex-direction: column;\n    }\n    h2 {\n        font-size: 1.7rem;\n    }\n    footer {\n        flex-direction: column;\n    } \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/getTarget.js */ "./node_modules/style-loader/dist/runtime/getTarget.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = function(css, style){
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
      while (style.firstChild) {
        style.removeChild(style.firstChild);
      }

      style.appendChild(document.createTextNode(css));
    }
  };
options.setAttributes = function(style) {
        var nonce =
           true ? __webpack_require__.nc : 0;

        if (nonce) {
          style.setAttribute("nonce", nonce);
        }
      };
options.insert = function(style){
    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()("head");

    if (!target) {
      throw new Error(
        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
      );
    }

    target.appendChild(style);
  };
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}

module.exports = getTarget;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_loc_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/loc.png */ "./src/img/loc.png");


'use strict';

const contact = (function(){
    function _createContact(){
        const containerDiv = document.createElement('div');

        containerDiv.setAttribute('class', 'contact');
        containerDiv.innerHTML = `
            <h3>Contact Us</h3>
            <p><strong>Telephone: </strong><span>078-9992661</span></p>
            <p><strong>Mobile: </strong><span>+81-9078314444</span></p>
            <p><strong>Address: </strong>
                <span>
                    2-chome-1 Oakashicho, Akashi, Hyogo 673-0891, Japan
                </span>
            </p>`;
        const locationImg = new Image();
        locationImg.src = _img_loc_png__WEBPACK_IMPORTED_MODULE_0__;
        containerDiv.appendChild(locationImg);
        return containerDiv;
    }

    function display(){
        document.querySelector('#content').appendChild(_createContact());
        document.querySelector('#contact-btn').classList.add('active');
    }

    return { display };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_hero_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/hero.jpeg */ "./src/img/hero.jpeg");


'use strict';
    
const home = (function(){

    function _createCombo(){
        const containerDiv = document.createElement('div');
        const divCombo = document.createElement('div');
        const divHours = document.createElement('div');
        const divReview = document.createElement('div');

        divHours.innerHTML = `
            <h3>Hours</h3>
            <ul>
                <li>Sun-Sat: 9am - 5:30pm</li>
                <li>Mon-Fri: 11am - 9:30pm</li>
            </ul>`;
        divReview.innerHTML = `
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Explicabo eaque enim quibusdam dolorum alias distinctio corrupti 
                accusantium delectus unde deleniti deserunt dolores laboriosam quis 
                voluptas, aliquid nihil.
            </p>
            <div class = "right">Lorem</div>`;
        divCombo.setAttribute('class', 'div-combo');
        divReview.setAttribute('class', 'review');
        
        containerDiv.appendChild(divCombo);
        divCombo.appendChild(divHours);
        divCombo.appendChild(divReview);
        return containerDiv;
    }

    function _createHero(){
        const div = document.createElement('div');

        div.setAttribute('class', 'hero');
        const imgHero = new Image();
        imgHero.src = _img_hero_jpeg__WEBPACK_IMPORTED_MODULE_0__;

        div.appendChild(imgHero);
        return div;
    }

    function display(){
        const content = document.querySelector('#content');
        content.appendChild(_createCombo());
        content.insertBefore(_createHero(), content.firstChild);
        document.querySelector('#home-btn').classList.add('active');
    }
    return { display };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);

/***/ }),

/***/ "./src/img/arseniy-chebynkin-kitnl.jpg":
/*!*********************************************!*\
  !*** ./src/img/arseniy-chebynkin-kitnl.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0fb51cbb8bfec4cbe74.jpg";

/***/ }),

/***/ "./src/img/foods/buttered-salmon.png":
/*!*******************************************!*\
  !*** ./src/img/foods/buttered-salmon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a9ceafb67d95e944923.png";

/***/ }),

/***/ "./src/img/foods/chirashi-sushi.png":
/*!******************************************!*\
  !*** ./src/img/foods/chirashi-sushi.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bdcfdb8ccc3387990e26.png";

/***/ }),

/***/ "./src/img/foods/fried-chicken.png":
/*!*****************************************!*\
  !*** ./src/img/foods/fried-chicken.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbcfad3c00f1c1291c44.png";

/***/ }),

/***/ "./src/img/foods/omelet-rice.png":
/*!***************************************!*\
  !*** ./src/img/foods/omelet-rice.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f305b1b67986aa58ce96.png";

/***/ }),

/***/ "./src/img/foods/roast-beef.png":
/*!**************************************!*\
  !*** ./src/img/foods/roast-beef.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc81dc36c65ef44cfa9d.png";

/***/ }),

/***/ "./src/img/foods/stew.png":
/*!********************************!*\
  !*** ./src/img/foods/stew.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07a5f4199d6a6558c89d.png";

/***/ }),

/***/ "./src/img/foods/tea-over-rice.png":
/*!*****************************************!*\
  !*** ./src/img/foods/tea-over-rice.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "809f2f4881eb36625d6a.png";

/***/ }),

/***/ "./src/img/hero.jpeg":
/*!***************************!*\
  !*** ./src/img/hero.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dbb476fa3e709125fb97.jpeg";

/***/ }),

/***/ "./src/img/loc.png":
/*!*************************!*\
  !*** ./src/img/loc.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a1cdea09aedd03e7b640.png";

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_foods_buttered_salmon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/foods/buttered-salmon.png */ "./src/img/foods/buttered-salmon.png");
/* harmony import */ var _img_foods_chirashi_sushi_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/foods/chirashi-sushi.png */ "./src/img/foods/chirashi-sushi.png");
/* harmony import */ var _img_foods_stew_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/foods/stew.png */ "./src/img/foods/stew.png");
/* harmony import */ var _img_foods_roast_beef_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/foods/roast-beef.png */ "./src/img/foods/roast-beef.png");
/* harmony import */ var _img_foods_tea_over_rice_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/foods/tea-over-rice.png */ "./src/img/foods/tea-over-rice.png");
/* harmony import */ var _img_foods_omelet_rice_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/foods/omelet-rice.png */ "./src/img/foods/omelet-rice.png");
/* harmony import */ var _img_foods_fried_chicken_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/foods/fried-chicken.png */ "./src/img/foods/fried-chicken.png");








'use strict';

const foodFactory = (name, kanji, price, imgSRC) => {
    const logName = function(){
        console.log(name);
    };
    return { name, kanji, price, imgSRC ,logName}
};

const menu = (function(){

    let array = [];

    array.push(foodFactory(
        'Foil-Baked Buttered Salmon and Mushrooms', 
        '鮭ときのこのバターホイル焼き',
        400, _img_foods_buttered_salmon_png__WEBPACK_IMPORTED_MODULE_0__));
    array.push(foodFactory(
        'Spring Chirashi-Sushi', 
        '春のちらし寿司',
        650, _img_foods_chirashi_sushi_png__WEBPACK_IMPORTED_MODULE_1__));
    array.push(foodFactory(
        'Heartwarming Stew',
        'あったか寄せ鍋',
        600, _img_foods_stew_png__WEBPACK_IMPORTED_MODULE_2__));
    array.push(foodFactory(
        'One-Pan Roast Beef',
        'フライパンだけで作るローストビーフ',
        2000, _img_foods_roast_beef_png__WEBPACK_IMPORTED_MODULE_3__));
    array.push(foodFactory(
        'Chilled Green Tea Over Rice',
        'さらりと頂く冷やし茶漬け',
        300, _img_foods_tea_over_rice_png__WEBPACK_IMPORTED_MODULE_4__));
    array.push(foodFactory(
        'Soft and Melty Omelet Rice',
        '特製ふわとろオムライス',
        200, _img_foods_omelet_rice_png__WEBPACK_IMPORTED_MODULE_5__));
    array.push(foodFactory(
        'Fried Chicken',
        '冷めても美味しいからあげ',
        400, _img_foods_fried_chicken_png__WEBPACK_IMPORTED_MODULE_6__));

    function _createMenu(){
        const containerDiv = document.createElement('div');
        const newH2 = document.createElement('h2');

        newH2.innerText = 'Menu';
        containerDiv.appendChild(newH2);

        array.forEach(function(meal){
            const div = document.createElement('div');
            const newH4 = document.createElement('h4');
            const newPara = document.createElement('p');
            const newH5 = document.createElement('h5');
            const foodImage = new Image();

            div.setAttribute('class','food');
            newH4.innerText = meal.name;
            newPara.innerText = meal.kanji;
            newH5.innerText = meal.price.toLocaleString();
            foodImage.src = meal.imgSRC;

            div.appendChild(foodImage);
            div.appendChild(newH4);
            div.appendChild(newPara);
            div.appendChild(newH5);
            containerDiv.appendChild(div);
        });

        return containerDiv;
    }

    function display(){
        document.querySelector('#content').appendChild(_createMenu());
        document.querySelector('#menu-btn').classList.add('active');
    }

    return { display };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





'use strict';

const setUpHeadTag = (function(){
    const headElement = document.querySelector('head');
    const titleElement = document.querySelector('title');

    const newMeta = document.createElement('meta');
    const newScript = document.createElement('script');
    const newLinkFont = document.createElement('link');
    const newLinkIcon = document.createElement('link');

    newMeta.setAttribute('http-equiv','X-UA-Compatible');
    newMeta.setAttribute('content','IE=edge');
    newScript.setAttribute('src', 'https://kit.fontawesome.com/e0b24a08b6.js');
    newScript.setAttribute('crossorigin', 'anonymous');
    newLinkFont.setAttribute('href', 
        'https://fonts.googleapis.com/css2?family=Cairo&family=Merienda&display=swap');
    newLinkFont.setAttribute('rel', 'stylesheet');
    newLinkIcon.setAttribute('href', 'https://openclipart.org/image/400px/177073');
    newLinkIcon.setAttribute('rel', 'icon');

    document.querySelector('html').setAttribute('lang', 'en');
    headElement.insertBefore(newMeta, titleElement);
    headElement.appendChild(newScript);
    headElement.appendChild(newLinkFont);
    headElement.appendChild(newLinkIcon);
})();

const setUpHeaderTag = (function(){
    const bodyElement = document.querySelector('body');

    const newHeader = document.createElement('header');
    const newH1 = document.createElement('h1');
    const newNav = document.createElement('nav');
    const newButtonHome = document.createElement('button');
    const newButtonMenu = document.createElement('button');
    const newButtonContact = document.createElement('button');

    newH1.innerText = 'Emiya Home Restaurant';
    newButtonHome.innerText = 'Home';
    newButtonMenu.innerText = 'Menu';
    newButtonContact.innerText = 'Contact';

    newButtonHome.setAttribute('class', 'nav-btn');
    newButtonHome.setAttribute('id', 'home-btn');
    newButtonHome.setAttribute('tabindex', '1');
    newButtonMenu.setAttribute('class', 'nav-btn');
    newButtonMenu.setAttribute('id', 'menu-btn');
    newButtonContact.setAttribute('class', 'nav-btn');
    newButtonContact.setAttribute('id', 'contact-btn');

    bodyElement.insertBefore(newHeader, bodyElement.firstChild);
    newHeader.appendChild(newH1);
    newHeader.appendChild(newNav);
    newNav.appendChild(newButtonHome);
    newNav.appendChild(newButtonMenu);
    newNav.appendChild(newButtonContact);
})();

const divContent = (function(){
    const element = document.createElement('div');
    element.setAttribute('class', 'content');
    element.setAttribute('id', 'content');
    
    document.querySelector('body').insertBefore(element,
        document.querySelector('body script'));
    return { element };
})();

const setUpFooterTag = (function(){
    const newFooter = document.createElement('footer');
    const newDivCreator = document.createElement('div');
    const newDivSource = document.createElement('div');
    const newDivArt = document.createElement('div');

    newDivCreator.innerHTML = `DEV:&nbsp;
        <a href = "https://github.com/JohnGamboa-L4ck" target="blank">
            <i class="fab fa-github"></i> L4ck
        </a>`;
    newDivSource.innerHTML = `
        <a href = "https://github.com/JohnGamboa-L4ck/restaurant-page" target="blank">
            <i class="fas fa-code"></i> Source Code
        </a>`;
    newDivArt.innerHTML = `BKGD Art by:&nbsp;
        <a href = "https://www.artstation.com/arsenixc" target = "blank">
            <i class="fab fa-artstation"></i> Arseniy Chebynkin
        </a>`;

    newFooter.appendChild(newDivCreator);
    newFooter.appendChild(newDivSource);
    newFooter.appendChild(newDivArt);

    document.querySelector('body').insertBefore
        (newFooter, document.querySelector('body script'));
})();

const clickHandler = function(){
    if(this.classList.contains('active')) return;

    let target = this.id;
    divContent.element.innerHTML = '';
    document.querySelectorAll('nav button').forEach((btn)=>btn.classList.remove('active'));

    if (target == 'home-btn'){ _home_js__WEBPACK_IMPORTED_MODULE_1__.default.display(); }
    else if (target == 'menu-btn'){ _menu_js__WEBPACK_IMPORTED_MODULE_2__.default.display(); }
    else { _contact_js__WEBPACK_IMPORTED_MODULE_3__.default.display(); }
};

document.querySelectorAll('nav button').forEach((button) => {
    button.addEventListener('click', clickHandler);
});

const keydownHandler = function(event){
    if(event.code !== 'Tab') return;
    event.preventDefault();

    const active = document.querySelector('.nav-btn.active');

    if (active.id == 'home-btn'){ 
        document.querySelector('#menu-btn').click(); } 
    else if (active.id == 'menu-btn'){ 
        document.querySelector('#contact-btn').click(); }
    else { document.querySelector('#home-btn').click(); }
};

window.addEventListener('keydown', keydownHandler);
document.querySelector('#home-btn').click();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDTztBQUNsQjtBQUM5RSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyw2REFBNkI7QUFDdEc7QUFDQSxpREFBaUQsd0NBQXdDLHdDQUF3QywrQkFBK0IsOEJBQThCLGlDQUFpQyxpQ0FBaUMsR0FBRywwQkFBMEIsNkJBQTZCLGlCQUFpQixnQkFBZ0IsS0FBSyxVQUFVLHdCQUF3QixvQkFBb0IsNkJBQTZCLHVDQUF1QyxxQ0FBcUMsMEJBQTBCLHdFQUF3RSxtQ0FBbUMsaUNBQWlDLGdDQUFnQyw0Q0FBNEMsR0FBRyxhQUFhLHNCQUFzQixvQkFBb0IsbUJBQW1CLDBCQUEwQix1Q0FBdUMsR0FBRyxPQUFPLDRCQUE0QixvQkFBb0IsMEJBQTBCLEdBQUcsdUJBQXVCLHVDQUF1Qyx5QkFBeUIsR0FBRyxxRUFBcUUsaUNBQWlDLGlDQUFpQywwQkFBMEIsR0FBRyxZQUFZLGtCQUFrQixvQkFBb0IsNkJBQTZCLDRDQUE0QyxHQUFHLGVBQWUseUJBQXlCLHdCQUF3QixtQ0FBbUMsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQiw4QkFBOEIsR0FBRyxzQkFBc0IsbUJBQW1CLHdCQUF3QixzQ0FBc0MsR0FBRyxxQkFBcUIsMkJBQTJCLGlDQUFpQyxpQ0FBaUMsR0FBRyxpQkFBaUIsY0FBYyxvQkFBb0IsOEJBQThCLDBCQUEwQiw2QkFBNkIsb0JBQW9CLGtDQUFrQyw0Q0FBNEMsR0FBRyx1QkFBdUIsb0JBQW9CLG9DQUFvQywwQkFBMEIsNkJBQTZCLG9CQUFvQix3QkFBd0IsNENBQTRDLHlCQUF5QixHQUFHLDZEQUE2RCxvQkFBb0IsR0FBRyxnQkFBZ0IsMkJBQTJCLG9CQUFvQiwwQkFBMEIsR0FBRyxpQ0FBaUMsNENBQTRDLG9CQUFvQiw2QkFBNkIsb0NBQW9DLEdBQUcsYUFBYSxzQkFBc0IsR0FBRyxlQUFlLHFCQUFxQixHQUFHLDBDQUEwQyxvQkFBb0Isd0JBQXdCLGtCQUFrQixHQUFHLFlBQVksd0JBQXdCLDBCQUEwQixHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyxRQUFRLDBCQUEwQixHQUFHLFFBQVEsNEJBQTRCLHlCQUF5QixHQUFHLFFBQVEsd0JBQXdCLEdBQUcsZ0JBQWdCLDBCQUEwQixHQUFHLFFBQVEsd0JBQXdCLEdBQUcsK0JBQStCLDRDQUE0Qyx5QkFBeUIsdUJBQXVCLEdBQUcsbUNBQW1DLGtCQUFrQixzQkFBc0IsR0FBRyw0QkFBNEIsa0JBQWtCLEdBQUcsaUNBQWlDLG1CQUFtQixHQUFHLDBDQUEwQyxrQkFBa0Isc0JBQXNCLHdCQUF3QixHQUFHLFdBQVcsb0JBQW9CLDhCQUE4Qix5QkFBeUIsb0NBQW9DLEdBQUcsZUFBZSx5QkFBeUIsdUJBQXVCLEdBQUcsT0FBTyx3QkFBd0IsR0FBRyxrQkFBa0Isc0JBQXNCLEtBQUssK0NBQStDLGlCQUFpQiw0QkFBNEIsMENBQTBDLE9BQU8seUJBQXlCLDZCQUE2QixPQUFPLGtCQUFrQixpQ0FBaUMsT0FBTyxVQUFVLDRCQUE0QixPQUFPLGNBQWMsaUNBQWlDLE9BQU8sSUFBSSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FB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LENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixDQUFDLHFEQUFZLEdBQUc7QUFDOUMsbUNBQW1DLENBQUMscURBQVksR0FBRztBQUNuRCxVQUFVLENBQUMsd0RBQWUsR0FBRztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUM7QUFDQSxvREFBb0QsRTtBQUNwRCxzQztBQUNBLHVEQUF1RDtBQUN2RCxVQUFVLDZDQUE2QztBQUN2RDs7QUFFQTtBQUNBLDRDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9pbWcvYXJzZW5peS1jaGVieW5raW4ta2l0bmwuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXRyYW5zcGFyZW50MDogcmdiYSgwLCAwLCAwLCAuMCk7XFxuICAgIC0tdHJhbnNwYXJlbnQ4OiByZ2JhKDAsIDAsIDAsIC44KTtcXG4gICAgLS1saWdodDogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWRhcms6IGhzbCgwLCAwJSwgMTIlKTtcXG4gICAgLS1naXZyeTogaHNsKDQ0LCA4MCUsIDg1JSk7XFxuICAgIC0tYXVidXJuOiBoc2woMCwgNzUlLCA2NSUpO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgIFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTA0JSAxMDQlO1xcbiAgICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn0gXFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG5oMSxoMixoMyxoNCxoNSxoNiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWVyaWVuZGEnLCBjdXJzaXZlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMtdmlzaWJsZSwgXFxuYTpob3ZlcixcXG5hOmZvY3VzLXZpc2libGV7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDMwJTtcXG4gICAgY29sb3I6IHZhcigtLWdpdnJ5KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50OCk7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAxcmVtIDFyZW07XFxufVxcblxcbmhlYWRlciBuYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGJ1dHRvbntcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQwKTtcXG59XFxuXFxuLm5hdi1idG4uYWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDMwJTtcXG59XFxuXFxuZGl2LmNvbnRlbnQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLW1pZG5pZ2h0LWJsdWUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDApO1xcbn1cXG5cXG5kaXYuY29udGVudCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQ4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5kaXYuY29udGVudCA+IGRpdiA+IGRpdixcXG5kaXYuY29udGVudCA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5kaXYtY29tYm8ge1xcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmRpdi1jb21ibyBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQ4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5yZXZpZXcge1xcbiAgICBtYXgtd2lkdGg6IDUwY2g7XFxufVxcblxcbi5yZXZpZXcgcCB7XFxuICAgIHBhZGRpbmc6IC4xcmVtO1xcbn1cXG5cXG4ucmV2aWV3IHA6OmJlZm9yZSxcXG4ucmV2aWV3IHA6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ1xcXCInO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ucmlnaHQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCItIFxcXCI7XFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuaDU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMDBBNVxcXCI7XFxufVxcblxcbmg1IHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5jb250ZW50ID4gZGl2ID4gZGl2LmZvb2Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5jb250ZW50ID4gZGl2ID4gZGl2LmZvb2QgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNTBjaDtcXG59XFxuXFxuLmNvbnRlbnQgZGl2LmNvbnRhY3QgcCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCBkaXYuY29udGFjdCBwIHNwYW4ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5jb250ZW50IGRpdi5jb250YWN0IGltZyxcXG4uaGVybyBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA2MGNoO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuZm9vdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuZm9vdGVyIGRpdntcXG4gICAgbWFyZ2luOiAuNXJlbSAxcmVtO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbn1cXG5cXG5pIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmZvb3RlciBkaXYgYSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTsgIFxcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAgIGhlYWRlciBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gLjVyZW0gLjVyZW0gLjVyZW07XFxuICAgIH1cXG4gICAgaGVhZGVyIG5hdiBidXR0b24ge1xcbiAgICAgICAgbWFyZ2luOiAuNXJlbSAxcmVtO1xcbiAgICB9XFxuICAgIC5kaXYtY29tYm8ge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcbiAgICBoMiB7XFxuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgfVxcbiAgICBmb290ZXIge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfSBcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQix5REFBd0Q7SUFDeEQsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFFQTs7OztJQUlJLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQiwrQkFBK0I7SUFDbkM7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS10cmFuc3BhcmVudDA6IHJnYmEoMCwgMCwgMCwgLjApO1xcbiAgICAtLXRyYW5zcGFyZW50ODogcmdiYSgwLCAwLCAwLCAuOCk7XFxuICAgIC0tbGlnaHQ6IGhzbCgwLCAwJSwgOTIlKTtcXG4gICAgLS1kYXJrOiBoc2woMCwgMCUsIDEyJSk7XFxuICAgIC0tZ2l2cnk6IGhzbCg0NCwgODAlLCA4NSUpO1xcbiAgICAtLWF1YnVybjogaHNsKDAsIDc1JSwgNjUlKTtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7ICBcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvYXJzZW5peS1jaGVieW5raW4ta2l0bmwuanBnKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDQlIDEwNCU7XFxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufSBcXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbmgxLGgyLGgzLGg0LGg1LGg2IHtcXG4gICAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYScsIGN1cnNpdmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlLCBcXG5hOmhvdmVyLFxcbmE6Zm9jdXMtdmlzaWJsZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMzAlO1xcbiAgICBjb2xvcjogdmFyKC0tZ2l2cnkpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQ4KTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgcGFkZGluZzogMnJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuaGVhZGVyIG5hdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBuYXYgYnV0dG9ue1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudDApO1xcbn1cXG5cXG4ubmF2LWJ0bi5hY3RpdmUge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMzAlO1xcbn1cXG5cXG5kaXYuY29udGVudCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbWlkbmlnaHQtYmx1ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MCk7XFxufVxcblxcbmRpdi5jb250ZW50ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbmRpdi5jb250ZW50ID4gZGl2ID4gZGl2LFxcbmRpdi5jb250ZW50ID4gZGl2ID4gZGl2ID4gZGl2IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmRpdi1jb21ibyB7XFxuICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZGl2LWNvbWJvIGRpdjpudGgtY2hpbGQoMSkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnJldmlldyB7XFxuICAgIG1heC13aWR0aDogNTBjaDtcXG59XFxuXFxuLnJldmlldyBwIHtcXG4gICAgcGFkZGluZzogLjFyZW07XFxufVxcblxcbi5yZXZpZXcgcDo6YmVmb3JlLFxcbi5yZXZpZXcgcDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnXFxcIic7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5yaWdodDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIi0gXFxcIjtcXG59XFxuXFxuaDMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5oNTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwwMEE1XFxcIjtcXG59XFxuXFxuaDUge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmNvbnRlbnQgPiBkaXYgPiBkaXYuZm9vZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50OCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmNvbnRlbnQgPiBkaXYgPiBkaXYuZm9vZCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA1MGNoO1xcbn1cXG5cXG4uY29udGVudCBkaXYuY29udGFjdCBwIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IGRpdi5jb250YWN0IHAgc3BhbiB7XFxuICAgIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmNvbnRlbnQgZGl2LmNvbnRhY3QgaW1nLFxcbi5oZXJvIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDYwY2g7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG5mb290ZXIgZGl2e1xcbiAgICBtYXJnaW46IC41cmVtIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxufVxcblxcbmkge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuZm9vdGVyIGRpdiBhIHtcXG4gICAgZm9udC1zaXplOiAxcmVtOyAgXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgaGVhZGVyIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgfVxcbiAgICBoZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW46IC41cmVtIDFyZW07XFxuICAgIH1cXG4gICAgLmRpdi1jb21ibyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICB9XFxuICAgIGZvb3RlciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9IFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBnZXRUYXJnZXQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRUYXJnZXQuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gZnVuY3Rpb24oY3NzLCBzdHlsZSl7XG4gICAgICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIH1cbiAgfTtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgIHZhciBub25jZSA9XG4gICAgICAgICAgdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgICAgIGlmIChub25jZSkge1xuICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oc3R5bGUpe1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoXCJoZWFkXCIpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhcmdldDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiaW1wb3J0IExvY2F0aW9uIGZyb20gJy4vaW1nL2xvYy5wbmcnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbnRhY3QgPSAoZnVuY3Rpb24oKXtcbiAgICBmdW5jdGlvbiBfY3JlYXRlQ29udGFjdCgpe1xuICAgICAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb250YWluZXJEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250YWN0Jyk7XG4gICAgICAgIGNvbnRhaW5lckRpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aDM+Q29udGFjdCBVczwvaDM+XG4gICAgICAgICAgICA8cD48c3Ryb25nPlRlbGVwaG9uZTogPC9zdHJvbmc+PHNwYW4+MDc4LTk5OTI2NjE8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHA+PHN0cm9uZz5Nb2JpbGU6IDwvc3Ryb25nPjxzcGFuPis4MS05MDc4MzE0NDQ0PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwPjxzdHJvbmc+QWRkcmVzczogPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDItY2hvbWUtMSBPYWthc2hpY2hvLCBBa2FzaGksIEh5b2dvIDY3My0wODkxLCBKYXBhblxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5gO1xuICAgICAgICBjb25zdCBsb2NhdGlvbkltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBsb2NhdGlvbkltZy5zcmMgPSBMb2NhdGlvbjtcbiAgICAgICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uSW1nKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5KCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQoX2NyZWF0ZUNvbnRhY3QoKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0LWJ0bicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGRpc3BsYXkgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7IiwiaW1wb3J0IEhlcm8gIGZyb20gJy4vaW1nL2hlcm8uanBlZyc7XG5cbid1c2Ugc3RyaWN0JztcbiAgICBcbmNvbnN0IGhvbWUgPSAoZnVuY3Rpb24oKXtcblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVDb21ibygpe1xuICAgICAgICBjb25zdCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2Q29tYm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2UmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgZGl2SG91cnMuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGgzPkhvdXJzPC9oMz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+U3VuLVNhdDogOWFtIC0gNTozMHBtPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TW9uLUZyaTogMTFhbSAtIDk6MzBwbTwvbGk+XG4gICAgICAgICAgICA8L3VsPmA7XG4gICAgICAgIGRpdlJldmlldy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gXG4gICAgICAgICAgICAgICAgRXhwbGljYWJvIGVhcXVlIGVuaW0gcXVpYnVzZGFtIGRvbG9ydW0gYWxpYXMgZGlzdGluY3RpbyBjb3JydXB0aSBcbiAgICAgICAgICAgICAgICBhY2N1c2FudGl1bSBkZWxlY3R1cyB1bmRlIGRlbGVuaXRpIGRlc2VydW50IGRvbG9yZXMgbGFib3Jpb3NhbSBxdWlzIFxuICAgICAgICAgICAgICAgIHZvbHVwdGFzLCBhbGlxdWlkIG5paGlsLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcyA9IFwicmlnaHRcIj5Mb3JlbTwvZGl2PmA7XG4gICAgICAgIGRpdkNvbWJvLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGl2LWNvbWJvJyk7XG4gICAgICAgIGRpdlJldmlldy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3JldmlldycpO1xuICAgICAgICBcbiAgICAgICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRpdkNvbWJvKTtcbiAgICAgICAgZGl2Q29tYm8uYXBwZW5kQ2hpbGQoZGl2SG91cnMpO1xuICAgICAgICBkaXZDb21iby5hcHBlbmRDaGlsZChkaXZSZXZpZXcpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyRGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVIZXJvKCl7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2hlcm8nKTtcbiAgICAgICAgY29uc3QgaW1nSGVybyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWdIZXJvLnNyYyA9IEhlcm87XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGltZ0hlcm8pO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXkoKXtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUNvbWJvKCkpO1xuICAgICAgICBjb250ZW50Lmluc2VydEJlZm9yZShfY3JlYXRlSGVybygpLCBjb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1idG4nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZGlzcGxheSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZTsiLCJpbXBvcnQgQnV0dGVyZWRTYWxtb24gZnJvbSAnLi9pbWcvZm9vZHMvYnV0dGVyZWQtc2FsbW9uLnBuZyc7XG5pbXBvcnQgQ2hpcmFzaGlTdXNoaSBmcm9tICcuL2ltZy9mb29kcy9jaGlyYXNoaS1zdXNoaS5wbmcnO1xuaW1wb3J0IFN0ZXcgZnJvbSAnLi9pbWcvZm9vZHMvc3Rldy5wbmcnO1xuaW1wb3J0IFJvYXN0QmVlZiBmcm9tICcuL2ltZy9mb29kcy9yb2FzdC1iZWVmLnBuZyc7XG5pbXBvcnQgVGVhT3ZlclJpY2UgZnJvbSAnLi9pbWcvZm9vZHMvdGVhLW92ZXItcmljZS5wbmcnO1xuaW1wb3J0IE9tZWxldHRlIGZyb20gJy4vaW1nL2Zvb2RzL29tZWxldC1yaWNlLnBuZyc7XG5pbXBvcnQgRnJpZWRDaGlja2VuIGZyb20gJy4vaW1nL2Zvb2RzL2ZyaWVkLWNoaWNrZW4ucG5nJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmb29kRmFjdG9yeSA9IChuYW1lLCBrYW5qaSwgcHJpY2UsIGltZ1NSQykgPT4ge1xuICAgIGNvbnN0IGxvZ05hbWUgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICB9O1xuICAgIHJldHVybiB7IG5hbWUsIGthbmppLCBwcmljZSwgaW1nU1JDICxsb2dOYW1lfVxufTtcblxuY29uc3QgbWVudSA9IChmdW5jdGlvbigpe1xuXG4gICAgbGV0IGFycmF5ID0gW107XG5cbiAgICBhcnJheS5wdXNoKGZvb2RGYWN0b3J5KFxuICAgICAgICAnRm9pbC1CYWtlZCBCdXR0ZXJlZCBTYWxtb24gYW5kIE11c2hyb29tcycsIFxuICAgICAgICAn6a6t44Go44GN44Gu44GT44Gu44OQ44K/44O844Ob44Kk44Or54S844GNJyxcbiAgICAgICAgNDAwLCBCdXR0ZXJlZFNhbG1vbikpO1xuICAgIGFycmF5LnB1c2goZm9vZEZhY3RvcnkoXG4gICAgICAgICdTcHJpbmcgQ2hpcmFzaGktU3VzaGknLCBcbiAgICAgICAgJ+aYpeOBruOBoeOCieOBl+Wvv+WPuCcsXG4gICAgICAgIDY1MCwgQ2hpcmFzaGlTdXNoaSkpO1xuICAgIGFycmF5LnB1c2goZm9vZEZhY3RvcnkoXG4gICAgICAgICdIZWFydHdhcm1pbmcgU3RldycsXG4gICAgICAgICfjgYLjgaPjgZ/jgYvlr4TjgZvpjYsnLFxuICAgICAgICA2MDAsIFN0ZXcpKTtcbiAgICBhcnJheS5wdXNoKGZvb2RGYWN0b3J5KFxuICAgICAgICAnT25lLVBhbiBSb2FzdCBCZWVmJyxcbiAgICAgICAgJ+ODleODqeOCpOODkeODs+OBoOOBkeOBp+S9nOOCi+ODreODvOOCueODiOODk+ODvOODlScsXG4gICAgICAgIDIwMDAsIFJvYXN0QmVlZikpO1xuICAgIGFycmF5LnB1c2goZm9vZEZhY3RvcnkoXG4gICAgICAgICdDaGlsbGVkIEdyZWVuIFRlYSBPdmVyIFJpY2UnLFxuICAgICAgICAn44GV44KJ44KK44Go6aCC44GP5Ya344KE44GX6Iy25rys44GRJyxcbiAgICAgICAgMzAwLCBUZWFPdmVyUmljZSkpO1xuICAgIGFycmF5LnB1c2goZm9vZEZhY3RvcnkoXG4gICAgICAgICdTb2Z0IGFuZCBNZWx0eSBPbWVsZXQgUmljZScsXG4gICAgICAgICfnibnoo73jgbXjgo/jgajjgo3jgqrjg6Djg6njgqTjgrknLFxuICAgICAgICAyMDAsIE9tZWxldHRlKSk7XG4gICAgYXJyYXkucHVzaChmb29kRmFjdG9yeShcbiAgICAgICAgJ0ZyaWVkIENoaWNrZW4nLFxuICAgICAgICAn5Ya344KB44Gm44KC576O5ZGz44GX44GE44GL44KJ44GC44GSJyxcbiAgICAgICAgNDAwLCBGcmllZENoaWNrZW4pKTtcblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVNZW51KCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBuZXdIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgICAgICAgbmV3SDIuaW5uZXJUZXh0ID0gJ01lbnUnO1xuICAgICAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQobmV3SDIpO1xuXG4gICAgICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24obWVhbCl7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0g0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdINSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgICAgICBjb25zdCBmb29kSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdmb29kJyk7XG4gICAgICAgICAgICBuZXdINC5pbm5lclRleHQgPSBtZWFsLm5hbWU7XG4gICAgICAgICAgICBuZXdQYXJhLmlubmVyVGV4dCA9IG1lYWwua2Fuamk7XG4gICAgICAgICAgICBuZXdINS5pbm5lclRleHQgPSBtZWFsLnByaWNlLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgICAgICBmb29kSW1hZ2Uuc3JjID0gbWVhbC5pbWdTUkM7XG5cbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5ld0g0KTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChuZXdQYXJhKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChuZXdINSk7XG4gICAgICAgICAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5KCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQoX2NyZWF0ZU1lbnUoKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWJ0bicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGRpc3BsYXkgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzZXRVcEhlYWRUYWcgPSAoZnVuY3Rpb24oKXtcbiAgICBjb25zdCBoZWFkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbiAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0aXRsZScpO1xuXG4gICAgY29uc3QgbmV3TWV0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21ldGEnKTtcbiAgICBjb25zdCBuZXdTY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBjb25zdCBuZXdMaW5rRm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBjb25zdCBuZXdMaW5rSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgIG5ld01ldGEuc2V0QXR0cmlidXRlKCdodHRwLWVxdWl2JywnWC1VQS1Db21wYXRpYmxlJyk7XG4gICAgbmV3TWV0YS5zZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnLCdJRT1lZGdlJyk7XG4gICAgbmV3U2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9lMGIyNGEwOGI2LmpzJyk7XG4gICAgbmV3U2NyaXB0LnNldEF0dHJpYnV0ZSgnY3Jvc3NvcmlnaW4nLCAnYW5vbnltb3VzJyk7XG4gICAgbmV3TGlua0ZvbnQuc2V0QXR0cmlidXRlKCdocmVmJywgXG4gICAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhaXJvJmZhbWlseT1NZXJpZW5kYSZkaXNwbGF5PXN3YXAnKTtcbiAgICBuZXdMaW5rRm9udC5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdzdHlsZXNoZWV0Jyk7XG4gICAgbmV3TGlua0ljb24uc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vb3BlbmNsaXBhcnQub3JnL2ltYWdlLzQwMHB4LzE3NzA3MycpO1xuICAgIG5ld0xpbmtJY29uLnNldEF0dHJpYnV0ZSgncmVsJywgJ2ljb24nKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5zZXRBdHRyaWJ1dGUoJ2xhbmcnLCAnZW4nKTtcbiAgICBoZWFkRWxlbWVudC5pbnNlcnRCZWZvcmUobmV3TWV0YSwgdGl0bGVFbGVtZW50KTtcbiAgICBoZWFkRWxlbWVudC5hcHBlbmRDaGlsZChuZXdTY3JpcHQpO1xuICAgIGhlYWRFbGVtZW50LmFwcGVuZENoaWxkKG5ld0xpbmtGb250KTtcbiAgICBoZWFkRWxlbWVudC5hcHBlbmRDaGlsZChuZXdMaW5rSWNvbik7XG59KSgpO1xuXG5jb25zdCBzZXRVcEhlYWRlclRhZyA9IChmdW5jdGlvbigpe1xuICAgIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgY29uc3QgbmV3SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbmV3SDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IG5ld05hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIGNvbnN0IG5ld0J1dHRvbkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBuZXdCdXR0b25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbmV3QnV0dG9uQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgbmV3SDEuaW5uZXJUZXh0ID0gJ0VtaXlhIEhvbWUgUmVzdGF1cmFudCc7XG4gICAgbmV3QnV0dG9uSG9tZS5pbm5lclRleHQgPSAnSG9tZSc7XG4gICAgbmV3QnV0dG9uTWVudS5pbm5lclRleHQgPSAnTWVudSc7XG4gICAgbmV3QnV0dG9uQ29udGFjdC5pbm5lclRleHQgPSAnQ29udGFjdCc7XG5cbiAgICBuZXdCdXR0b25Ib21lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWJ0bicpO1xuICAgIG5ld0J1dHRvbkhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lLWJ0bicpO1xuICAgIG5ld0J1dHRvbkhvbWUuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcxJyk7XG4gICAgbmV3QnV0dG9uTWVudS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1idG4nKTtcbiAgICBuZXdCdXR0b25NZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudS1idG4nKTtcbiAgICBuZXdCdXR0b25Db250YWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWJ0bicpO1xuICAgIG5ld0J1dHRvbkNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0LWJ0bicpO1xuXG4gICAgYm9keUVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5ld0hlYWRlciwgYm9keUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgbmV3SGVhZGVyLmFwcGVuZENoaWxkKG5ld0gxKTtcbiAgICBuZXdIZWFkZXIuYXBwZW5kQ2hpbGQobmV3TmF2KTtcbiAgICBuZXdOYXYuYXBwZW5kQ2hpbGQobmV3QnV0dG9uSG9tZSk7XG4gICAgbmV3TmF2LmFwcGVuZENoaWxkKG5ld0J1dHRvbk1lbnUpO1xuICAgIG5ld05hdi5hcHBlbmRDaGlsZChuZXdCdXR0b25Db250YWN0KTtcbn0pKCk7XG5cbmNvbnN0IGRpdkNvbnRlbnQgPSAoZnVuY3Rpb24oKXtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRlbnQnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5pbnNlcnRCZWZvcmUoZWxlbWVudCxcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSBzY3JpcHQnKSk7XG4gICAgcmV0dXJuIHsgZWxlbWVudCB9O1xufSkoKTtcblxuY29uc3Qgc2V0VXBGb290ZXJUYWcgPSAoZnVuY3Rpb24oKXtcbiAgICBjb25zdCBuZXdGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb25zdCBuZXdEaXZDcmVhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV3RGl2U291cmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbmV3RGl2QXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBuZXdEaXZDcmVhdG9yLmlubmVySFRNTCA9IGBERVY6Jm5ic3A7XG4gICAgICAgIDxhIGhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb2huR2FtYm9hLUw0Y2tcIiB0YXJnZXQ9XCJibGFua1wiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPiBMNGNrXG4gICAgICAgIDwvYT5gO1xuICAgIG5ld0RpdlNvdXJjZS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxhIGhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9Kb2huR2FtYm9hLUw0Y2svcmVzdGF1cmFudC1wYWdlXCIgdGFyZ2V0PVwiYmxhbmtcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNvZGVcIj48L2k+IFNvdXJjZSBDb2RlXG4gICAgICAgIDwvYT5gO1xuICAgIG5ld0RpdkFydC5pbm5lckhUTUwgPSBgQktHRCBBcnQgYnk6Jm5ic3A7XG4gICAgICAgIDxhIGhyZWYgPSBcImh0dHBzOi8vd3d3LmFydHN0YXRpb24uY29tL2Fyc2VuaXhjXCIgdGFyZ2V0ID0gXCJibGFua1wiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEtYXJ0c3RhdGlvblwiPjwvaT4gQXJzZW5peSBDaGVieW5raW5cbiAgICAgICAgPC9hPmA7XG5cbiAgICBuZXdGb290ZXIuYXBwZW5kQ2hpbGQobmV3RGl2Q3JlYXRvcik7XG4gICAgbmV3Rm9vdGVyLmFwcGVuZENoaWxkKG5ld0RpdlNvdXJjZSk7XG4gICAgbmV3Rm9vdGVyLmFwcGVuZENoaWxkKG5ld0RpdkFydCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuaW5zZXJ0QmVmb3JlXG4gICAgICAgIChuZXdGb290ZXIsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgc2NyaXB0JykpO1xufSkoKTtcblxuY29uc3QgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oKXtcbiAgICBpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcblxuICAgIGxldCB0YXJnZXQgPSB0aGlzLmlkO1xuICAgIGRpdkNvbnRlbnQuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgYnV0dG9uJykuZm9yRWFjaCgoYnRuKT0+YnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcblxuICAgIGlmICh0YXJnZXQgPT0gJ2hvbWUtYnRuJyl7IGhvbWUuZGlzcGxheSgpOyB9XG4gICAgZWxzZSBpZiAodGFyZ2V0ID09ICdtZW51LWJ0bicpeyBtZW51LmRpc3BsYXkoKTsgfVxuICAgIGVsc2UgeyBjb250YWN0LmRpc3BsYXkoKTsgfVxufTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IGJ1dHRvbicpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG59KTtcblxuY29uc3Qga2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbihldmVudCl7XG4gICAgaWYoZXZlbnQuY29kZSAhPT0gJ1RhYicpIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1idG4uYWN0aXZlJyk7XG5cbiAgICBpZiAoYWN0aXZlLmlkID09ICdob21lLWJ0bicpeyBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnRuJykuY2xpY2soKTsgfSBcbiAgICBlbHNlIGlmIChhY3RpdmUuaWQgPT0gJ21lbnUtYnRuJyl7IFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdC1idG4nKS5jbGljaygpOyB9XG4gICAgZWxzZSB7IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWJ0bicpLmNsaWNrKCk7IH1cbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bkhhbmRsZXIpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJykuY2xpY2soKTsiXSwic291cmNlUm9vdCI6IiJ9