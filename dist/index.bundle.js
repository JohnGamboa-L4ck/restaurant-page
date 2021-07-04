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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --transparent0: rgba(0, 0, 0, .0);\n    --transparent8: rgba(0, 0, 0, .8);\n    --light: hsl(0, 0%, 92%);\n    --dark: hsl(0, 0%, 12%);\n    --givry: hsl(44, 80%, 85%);\n    --auburn: hsl(0, 75%, 65%);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Cairo', sans-serif;\n    background-color: var(--light);\n    color: var(--light);\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: center center;\n} \n\nbutton {\n    cursor: pointer;\n    outline: none;\n    border: none;\n    color: var(--light);\n    font-family: 'Cairo', sans-serif;\n}\n\na {\n    text-decoration: none;\n    outline: none;\n    color: var(--light);\n}\n\nh1,h2,h3,h4,h5,h6 {\n    font-family: 'Merienda', cursive;\n    text-align: center;\n}\n\nbutton:hover,\nbutton:focus-visible, \na:hover,\na:focus-visible{\n    text-decoration: underline;\n    text-underline-offset: 30%;\n    color: var(--givry);\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--transparent8);\n}\n\nheader h1 {\n    text-align: center;\n    font-size: 3.5rem;\n    padding: 2rem 1rem 1rem 1rem;\n}\n\nheader nav {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n}\n\nheader nav button{\n    margin: 1rem;\n    font-size: 1.2rem;\n    background: var(--transparent0);\n}\n\n.nav-btn.active {\n    color: var(--auburn);\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\ndiv.content {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    color: var(--midnight-blue);\n    background-color: var(--transparent0);\n}\n\ndiv.content > div {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    margin-top: .5rem;\n    background-color: var(--transparent8);\n    border-radius: 3px;\n}\n\ndiv.content > div > div,\ndiv.content > div > div > div {\n    padding: 1rem;\n}\n\n.div-combo {\n    padding: 0!important;\n    display: flex;\n    flex-direction: row;\n}\n\n.div-combo div:nth-child(1) {\n    background-color: var(--transparent8);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.review {\n    max-width: 50ch;\n}\n\n.review p {\n    padding: .1rem;\n}\n\n.review p::before,\n.review p::after {\n    content: '\"';\n    font-size: 1.3rem;\n    color: gray;\n}\n\n.right {\n    text-align: right;\n    font-weight: bolder;\n}\n\n.right::before {\n    content: \"- \";\n}\n\nh3 {\n    margin-bottom: 1rem;\n}\n\nul {\n    list-style-type: none;\n    text-align: center;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh5::before {\n    content: \"\\00A5\";\n}\n\nh5 {\n    text-align: right;\n}\n\n.content > div > div.food {\n    background-color: var(--transparent8);\n    border-radius: 3px;\n    margin-top: 1rem;\n}\n\n.content > div > div.food img {\n    width: 100%;\n    max-width: 50ch;\n}\n\n.content div.contact p {\n    width: 100%;\n}\n\n.content div.contact p span {\n    float: right;\n}\n\n.content div.contact img,\n.hero img {\n    width: 100%;\n    max-width: 60ch;\n    object-fit: cover;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    background-color: var(--dark);\n}\n\nfooter div{\n    margin: .5rem 1rem;\n    font-size: .9rem;\n}\n\ni {\n    font-size: 1.2rem;\n}\n\nfooter div a {\n    font-size: 1rem;  \n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,iCAAiC;IACjC,iCAAiC;IACjC,wBAAwB;IACxB,uBAAuB;IACvB,0BAA0B;IAC1B,0BAA0B;AAC9B;;AAEA;IACI,sBAAsB;IACtB,UAAU;IACV,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,gCAAgC;IAChC,8BAA8B;IAC9B,mBAAmB;IACnB,yDAAwD;IACxD,4BAA4B;IAC5B,sBAAsB;IACtB,kCAAkC;AACtC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;IAChC,kBAAkB;AACtB;;AAEA;;;;IAII,0BAA0B;IAC1B,0BAA0B;IAC1B,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,qCAAqC;AACzC;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,4BAA4B;AAChC;;AAEA;IACI,WAAW;IACX,oBAAoB;IACpB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,+BAA+B;AACnC;;AAEA;IACI,oBAAoB;IACpB,0BAA0B;IAC1B,0BAA0B;AAC9B;;AAEA;IACI,OAAO;IACP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,2BAA2B;IAC3B,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;IACnB,sBAAsB;IACtB,aAAa;IACb,iBAAiB;IACjB,qCAAqC;IACrC,kBAAkB;AACtB;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,YAAY;IACZ,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,qCAAqC;IACrC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;;IAEI,WAAW;IACX,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB","sourcesContent":[":root {\n    --transparent0: rgba(0, 0, 0, .0);\n    --transparent8: rgba(0, 0, 0, .8);\n    --light: hsl(0, 0%, 92%);\n    --dark: hsl(0, 0%, 12%);\n    --givry: hsl(44, 80%, 85%);\n    --auburn: hsl(0, 75%, 65%);\n}\n\n*, *:before, *:after {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;  \n}\n\nbody {\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n    font-family: 'Cairo', sans-serif;\n    background-color: var(--light);\n    color: var(--light);\n    background-image: url(./img/arseniy-chebynkin-kitnl.jpg);\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: center center;\n} \n\nbutton {\n    cursor: pointer;\n    outline: none;\n    border: none;\n    color: var(--light);\n    font-family: 'Cairo', sans-serif;\n}\n\na {\n    text-decoration: none;\n    outline: none;\n    color: var(--light);\n}\n\nh1,h2,h3,h4,h5,h6 {\n    font-family: 'Merienda', cursive;\n    text-align: center;\n}\n\nbutton:hover,\nbutton:focus-visible, \na:hover,\na:focus-visible{\n    text-decoration: underline;\n    text-underline-offset: 30%;\n    color: var(--givry);\n}\n\nheader {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--transparent8);\n}\n\nheader h1 {\n    text-align: center;\n    font-size: 3.5rem;\n    padding: 2rem 1rem 1rem 1rem;\n}\n\nheader nav {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n}\n\nheader nav button{\n    margin: 1rem;\n    font-size: 1.2rem;\n    background: var(--transparent0);\n}\n\n.nav-btn.active {\n    color: var(--auburn);\n    text-decoration: underline;\n    text-underline-offset: 30%;\n}\n\ndiv.content {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    color: var(--midnight-blue);\n    background-color: var(--transparent0);\n}\n\ndiv.content > div {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    flex-direction: column;\n    padding: 1rem;\n    margin-top: .5rem;\n    background-color: var(--transparent8);\n    border-radius: 3px;\n}\n\ndiv.content > div > div,\ndiv.content > div > div > div {\n    padding: 1rem;\n}\n\n.div-combo {\n    padding: 0!important;\n    display: flex;\n    flex-direction: row;\n}\n\n.div-combo div:nth-child(1) {\n    background-color: var(--transparent8);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.review {\n    max-width: 50ch;\n}\n\n.review p {\n    padding: .1rem;\n}\n\n.review p::before,\n.review p::after {\n    content: '\"';\n    font-size: 1.3rem;\n    color: gray;\n}\n\n.right {\n    text-align: right;\n    font-weight: bolder;\n}\n\n.right::before {\n    content: \"- \";\n}\n\nh3 {\n    margin-bottom: 1rem;\n}\n\nul {\n    list-style-type: none;\n    text-align: center;\n}\n\nh2 {\n    font-size: 2.5rem;\n}\n\nh5::before {\n    content: \"\\00A5\";\n}\n\nh5 {\n    text-align: right;\n}\n\n.content > div > div.food {\n    background-color: var(--transparent8);\n    border-radius: 3px;\n    margin-top: 1rem;\n}\n\n.content > div > div.food img {\n    width: 100%;\n    max-width: 50ch;\n}\n\n.content div.contact p {\n    width: 100%;\n}\n\n.content div.contact p span {\n    float: right;\n}\n\n.content div.contact img,\n.hero img {\n    width: 100%;\n    max-width: 60ch;\n    object-fit: cover;\n}\n\nfooter{\n    display: flex;\n    justify-content: center;\n    text-align: center;\n    background-color: var(--dark);\n}\n\nfooter div{\n    margin: .5rem 1rem;\n    font-size: .9rem;\n}\n\ni {\n    font-size: 1.2rem;\n}\n\nfooter div a {\n    font-size: 1rem;  \n}"],"sourceRoot":""}]);
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

/***/ "./src/img/foods/stew.png":
/*!********************************!*\
  !*** ./src/img/foods/stew.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07a5f4199d6a6558c89d.png";

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
            newH5.innerText = meal.price;
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

// divContent.element.innerHTML = '';
// document.querySelectorAll('nav button').forEach((btn)=>btn.classList.remove('active'));
// home.display();

_menu_js__WEBPACK_IMPORTED_MODULE_2__.default.display();
// contact.display();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDTztBQUNsQjtBQUM5RSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyw2REFBNkI7QUFDdEc7QUFDQSxpREFBaUQsd0NBQXdDLHdDQUF3QywrQkFBK0IsOEJBQThCLGlDQUFpQyxpQ0FBaUMsR0FBRywwQkFBMEIsNkJBQTZCLGlCQUFpQixnQkFBZ0IsS0FBSyxVQUFVLHdCQUF3QixvQkFBb0IsNkJBQTZCLHVDQUF1QyxxQ0FBcUMsMEJBQTBCLHdFQUF3RSxtQ0FBbUMsNkJBQTZCLHlDQUF5QyxHQUFHLGFBQWEsc0JBQXNCLG9CQUFvQixtQkFBbUIsMEJBQTBCLHVDQUF1QyxHQUFHLE9BQU8sNEJBQTRCLG9CQUFvQiwwQkFBMEIsR0FBRyx1QkFBdUIsdUNBQXVDLHlCQUF5QixHQUFHLHFFQUFxRSxpQ0FBaUMsaUNBQWlDLDBCQUEwQixHQUFHLFlBQVksa0JBQWtCLG9CQUFvQiw2QkFBNkIsNENBQTRDLEdBQUcs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Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ1E7QUFDQTtBQUNNOztBQUVuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEscURBQVk7QUFDWixxQiIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vaW1nL2Fyc2VuaXktY2hlYnlua2luLWtpdG5sLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS10cmFuc3BhcmVudDA6IHJnYmEoMCwgMCwgMCwgLjApO1xcbiAgICAtLXRyYW5zcGFyZW50ODogcmdiYSgwLCAwLCAwLCAuOCk7XFxuICAgIC0tbGlnaHQ6IGhzbCgwLCAwJSwgOTIlKTtcXG4gICAgLS1kYXJrOiBoc2woMCwgMCUsIDEyJSk7XFxuICAgIC0tZ2l2cnk6IGhzbCg0NCwgODAlLCA4NSUpO1xcbiAgICAtLWF1YnVybjogaHNsKDAsIDc1JSwgNjUlKTtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7ICBcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn0gXFxuXFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbn1cXG5cXG5oMSxoMixoMyxoNCxoNSxoNiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWVyaWVuZGEnLCBjdXJzaXZlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG5idXR0b246Zm9jdXMtdmlzaWJsZSwgXFxuYTpob3ZlcixcXG5hOmZvY3VzLXZpc2libGV7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDMwJTtcXG4gICAgY29sb3I6IHZhcigtLWdpdnJ5KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50OCk7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAxcmVtIDFyZW07XFxufVxcblxcbmhlYWRlciBuYXYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgbmF2IGJ1dHRvbntcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQwKTtcXG59XFxuXFxuLm5hdi1idG4uYWN0aXZlIHtcXG4gICAgY29sb3I6IHZhcigtLWF1YnVybik7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDMwJTtcXG59XFxuXFxuZGl2LmNvbnRlbnQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLW1pZG5pZ2h0LWJsdWUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDApO1xcbn1cXG5cXG5kaXYuY29udGVudCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQ4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG5kaXYuY29udGVudCA+IGRpdiA+IGRpdixcXG5kaXYuY29udGVudCA+IGRpdiA+IGRpdiA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5kaXYtY29tYm8ge1xcbiAgICBwYWRkaW5nOiAwIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuLmRpdi1jb21ibyBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQ4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5yZXZpZXcge1xcbiAgICBtYXgtd2lkdGg6IDUwY2g7XFxufVxcblxcbi5yZXZpZXcgcCB7XFxuICAgIHBhZGRpbmc6IC4xcmVtO1xcbn1cXG5cXG4ucmV2aWV3IHA6OmJlZm9yZSxcXG4ucmV2aWV3IHA6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ1xcXCInO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY29sb3I6IGdyYXk7XFxufVxcblxcbi5yaWdodCB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ucmlnaHQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCItIFxcXCI7XFxufVxcblxcbmgzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuaDU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcMDBBNVxcXCI7XFxufVxcblxcbmg1IHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5jb250ZW50ID4gZGl2ID4gZGl2LmZvb2Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5jb250ZW50ID4gZGl2ID4gZGl2LmZvb2QgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNTBjaDtcXG59XFxuXFxuLmNvbnRlbnQgZGl2LmNvbnRhY3QgcCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY29udGVudCBkaXYuY29udGFjdCBwIHNwYW4ge1xcbiAgICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5jb250ZW50IGRpdi5jb250YWN0IGltZyxcXG4uaGVybyBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA2MGNoO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuZm9vdGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrKTtcXG59XFxuXFxuZm9vdGVyIGRpdntcXG4gICAgbWFyZ2luOiAuNXJlbSAxcmVtO1xcbiAgICBmb250LXNpemU6IC45cmVtO1xcbn1cXG5cXG5pIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmZvb3RlciBkaXYgYSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTsgIFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlEQUF3RDtJQUN4RCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7SUFJSSwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS10cmFuc3BhcmVudDA6IHJnYmEoMCwgMCwgMCwgLjApO1xcbiAgICAtLXRyYW5zcGFyZW50ODogcmdiYSgwLCAwLCAwLCAuOCk7XFxuICAgIC0tbGlnaHQ6IGhzbCgwLCAwJSwgOTIlKTtcXG4gICAgLS1kYXJrOiBoc2woMCwgMCUsIDEyJSk7XFxuICAgIC0tZ2l2cnk6IGhzbCg0NCwgODAlLCA4NSUpO1xcbiAgICAtLWF1YnVybjogaHNsKDAsIDc1JSwgNjUlKTtcXG59XFxuXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7ICBcXG59XFxuXFxuYm9keSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWcvYXJzZW5peS1jaGVieW5raW4ta2l0bmwuanBnKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59IFxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XFxuXFxuaDEsaDIsaDMsaDQsaDUsaDYge1xcbiAgICBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzLXZpc2libGUsIFxcbmE6aG92ZXIsXFxuYTpmb2N1cy12aXNpYmxle1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzMCU7XFxuICAgIGNvbG9yOiB2YXIoLS1naXZyeSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDgpO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtIDFyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG5oZWFkZXIgbmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIG5hdiBidXR0b257XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50MCk7XFxufVxcblxcbi5uYXYtYnRuLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzMCU7XFxufVxcblxcbmRpdi5jb250ZW50IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1taWRuaWdodC1ibHVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQwKTtcXG59XFxuXFxuZGl2LmNvbnRlbnQgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50OCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuZGl2LmNvbnRlbnQgPiBkaXYgPiBkaXYsXFxuZGl2LmNvbnRlbnQgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZGl2LWNvbWJvIHtcXG4gICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5kaXYtY29tYm8gZGl2Om50aC1jaGlsZCgxKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50OCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ucmV2aWV3IHtcXG4gICAgbWF4LXdpZHRoOiA1MGNoO1xcbn1cXG5cXG4ucmV2aWV3IHAge1xcbiAgICBwYWRkaW5nOiAuMXJlbTtcXG59XFxuXFxuLnJldmlldyBwOjpiZWZvcmUsXFxuLnJldmlldyBwOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICdcXFwiJztcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnJpZ2h0OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiLSBcXFwiO1xcbn1cXG5cXG5oMyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbmg1OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDAwQTVcXFwiO1xcbn1cXG5cXG5oNSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY29udGVudCA+IGRpdiA+IGRpdi5mb29kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQ4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uY29udGVudCA+IGRpdiA+IGRpdi5mb29kIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDUwY2g7XFxufVxcblxcbi5jb250ZW50IGRpdi5jb250YWN0IHAge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQgZGl2LmNvbnRhY3QgcCBzcGFuIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4uY29udGVudCBkaXYuY29udGFjdCBpbWcsXFxuLmhlcm8gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNjBjaDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbmZvb3RlciBkaXZ7XFxuICAgIG1hcmdpbjogLjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxuaSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5mb290ZXIgZGl2IGEge1xcbiAgICBmb250LXNpemU6IDFyZW07ICBcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgZ2V0VGFyZ2V0IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IGZ1bmN0aW9uKGNzcywgc3R5bGUpe1xuICAgICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB9XG4gIH07XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICB2YXIgbm9uY2UgPVxuICAgICAgICAgIHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKHN0eWxlKXtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KFwiaGVhZFwiKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiXG4gICAgICApO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH07XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYXJnZXQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsImltcG9ydCBMb2NhdGlvbiBmcm9tICcuL2ltZy9sb2MucG5nJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb250YWN0ID0gKGZ1bmN0aW9uKCl7XG4gICAgZnVuY3Rpb24gX2NyZWF0ZUNvbnRhY3QoKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29udGFpbmVyRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFjdCcpO1xuICAgICAgICBjb250YWluZXJEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGgzPkNvbnRhY3QgVXM8L2gzPlxuICAgICAgICAgICAgPHA+PHN0cm9uZz5UZWxlcGhvbmU6IDwvc3Ryb25nPjxzcGFuPjA3OC05OTkyNjYxPC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwPjxzdHJvbmc+TW9iaWxlOiA8L3N0cm9uZz48c3Bhbj4rODEtOTA3ODMxNDQ0NDwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8cD48c3Ryb25nPkFkZHJlc3M6IDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAyLWNob21lLTEgT2FrYXNoaWNobywgQWthc2hpLCBIeW9nbyA2NzMtMDg5MSwgSmFwYW5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+YDtcbiAgICAgICAgY29uc3QgbG9jYXRpb25JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbG9jYXRpb25JbWcuc3JjID0gTG9jYXRpb247XG4gICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkltZyk7XG4gICAgICAgIHJldHVybiBjb250YWluZXJEaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheSgpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKF9jcmVhdGVDb250YWN0KCkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdC1idG4nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBkaXNwbGF5IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyIsImltcG9ydCBIZXJvICBmcm9tICcuL2ltZy9oZXJvLmpwZWcnO1xuXG4ndXNlIHN0cmljdCc7XG4gICAgXG5jb25zdCBob21lID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlQ29tYm8oKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdkNvbWJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdlJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGRpdkhvdXJzLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMz5Ib3VyczwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlN1bi1TYXQ6IDlhbSAtIDU6MzBwbTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk1vbi1Gcmk6IDExYW0gLSA5OjMwcG08L2xpPlxuICAgICAgICAgICAgPC91bD5gO1xuICAgICAgICBkaXZSZXZpZXcuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxuICAgICAgICAgICAgICAgIEV4cGxpY2FibyBlYXF1ZSBlbmltIHF1aWJ1c2RhbSBkb2xvcnVtIGFsaWFzIGRpc3RpbmN0aW8gY29ycnVwdGkgXG4gICAgICAgICAgICAgICAgYWNjdXNhbnRpdW0gZGVsZWN0dXMgdW5kZSBkZWxlbml0aSBkZXNlcnVudCBkb2xvcmVzIGxhYm9yaW9zYW0gcXVpcyBcbiAgICAgICAgICAgICAgICB2b2x1cHRhcywgYWxpcXVpZCBuaWhpbC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJpZ2h0XCI+TG9yZW08L2Rpdj5gO1xuICAgICAgICBkaXZDb21iby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rpdi1jb21ibycpO1xuICAgICAgICBkaXZSZXZpZXcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZXZpZXcnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChkaXZDb21ibyk7XG4gICAgICAgIGRpdkNvbWJvLmFwcGVuZENoaWxkKGRpdkhvdXJzKTtcbiAgICAgICAgZGl2Q29tYm8uYXBwZW5kQ2hpbGQoZGl2UmV2aWV3KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlSGVybygpe1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZXJvJyk7XG4gICAgICAgIGNvbnN0IGltZ0hlcm8gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nSGVyby5zcmMgPSBIZXJvO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWdIZXJvKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5KCl7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKF9jcmVhdGVDb21ibygpKTtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUoX2NyZWF0ZUhlcm8oKSwgY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICAgIHJldHVybiB7IGRpc3BsYXkgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7IiwiaW1wb3J0IEJ1dHRlcmVkU2FsbW9uIGZyb20gJy4vaW1nL2Zvb2RzL2J1dHRlcmVkLXNhbG1vbi5wbmcnO1xuaW1wb3J0IENoaXJhc2hpU3VzaGkgZnJvbSAnLi9pbWcvZm9vZHMvY2hpcmFzaGktc3VzaGkucG5nJztcbmltcG9ydCBTdGV3IGZyb20gJy4vaW1nL2Zvb2RzL3N0ZXcucG5nJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmb29kRmFjdG9yeSA9IChuYW1lLCBrYW5qaSwgcHJpY2UsIGltZ1NSQykgPT4ge1xuICAgIGNvbnN0IGxvZ05hbWUgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICB9O1xuICAgIHJldHVybiB7IG5hbWUsIGthbmppLCBwcmljZSwgaW1nU1JDICxsb2dOYW1lfVxufTtcblxuY29uc3QgbWVudSA9IChmdW5jdGlvbigpe1xuXG4gICAgbGV0IGFycmF5ID0gW107XG5cbiAgICBhcnJheS5wdXNoKGZvb2RGYWN0b3J5KFxuICAgICAgICAnRm9pbC1CYWtlZCBCdXR0ZXJlZCBTYWxtb24gYW5kIE11c2hyb29tcycsIFxuICAgICAgICAn6a6t44Go44GN44Gu44GT44Gu44OQ44K/44O844Ob44Kk44Or54S844GNJyxcbiAgICAgICAgNDAwLCBCdXR0ZXJlZFNhbG1vbikpO1xuICAgIGFycmF5LnB1c2goZm9vZEZhY3RvcnkoXG4gICAgICAgICdTcHJpbmcgQ2hpcmFzaGktU3VzaGknLCBcbiAgICAgICAgJ+aYpeOBruOBoeOCieOBl+Wvv+WPuCcsXG4gICAgICAgIDY1MCwgQ2hpcmFzaGlTdXNoaSkpO1xuICAgIGFycmF5LnB1c2goZm9vZEZhY3RvcnkoXG4gICAgICAgICdIZWFydHdhcm1pbmcgU3RldycsXG4gICAgICAgICfjgYLjgaPjgZ/jgYvlr4TjgZvpjYsnLFxuICAgICAgICA2MDAsIFN0ZXcpKTtcblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVNZW51KCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBuZXdIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgICAgICAgbmV3SDIuaW5uZXJUZXh0ID0gJ01lbnUnO1xuICAgICAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQobmV3SDIpO1xuXG4gICAgICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24obWVhbCl7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0g0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdINSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgICAgICBjb25zdCBmb29kSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdmb29kJyk7XG4gICAgICAgICAgICBuZXdINC5pbm5lclRleHQgPSBtZWFsLm5hbWU7XG4gICAgICAgICAgICBuZXdQYXJhLmlubmVyVGV4dCA9IG1lYWwua2Fuamk7XG4gICAgICAgICAgICBuZXdINS5pbm5lclRleHQgPSBtZWFsLnByaWNlO1xuICAgICAgICAgICAgZm9vZEltYWdlLnNyYyA9IG1lYWwuaW1nU1JDO1xuXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChuZXdINCk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobmV3UGFyYSk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobmV3SDUpO1xuICAgICAgICAgICAgY29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXJEaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheSgpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKF9jcmVhdGVNZW51KCkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idG4nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBkaXNwbGF5IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgaG9tZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3Qgc2V0VXBIZWFkVGFnID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgaGVhZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJyk7XG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGl0bGUnKTtcblxuICAgIGNvbnN0IG5ld01ldGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtZXRhJyk7XG4gICAgY29uc3QgbmV3U2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgY29uc3QgbmV3TGlua0ZvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgY29uc3QgbmV3TGlua0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG5cbiAgICBuZXdNZXRhLnNldEF0dHJpYnV0ZSgnaHR0cC1lcXVpdicsJ1gtVUEtQ29tcGF0aWJsZScpO1xuICAgIG5ld01ldGEuc2V0QXR0cmlidXRlKCdjb250ZW50JywnSUU9ZWRnZScpO1xuICAgIG5ld1NjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vZTBiMjRhMDhiNi5qcycpO1xuICAgIG5ld1NjcmlwdC5zZXRBdHRyaWJ1dGUoJ2Nyb3Nzb3JpZ2luJywgJ2Fub255bW91cycpO1xuICAgIG5ld0xpbmtGb250LnNldEF0dHJpYnV0ZSgnaHJlZicsIFxuICAgICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYWlybyZmYW1pbHk9TWVyaWVuZGEmZGlzcGxheT1zd2FwJyk7XG4gICAgbmV3TGlua0ZvbnQuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgIG5ld0xpbmtJY29uLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL29wZW5jbGlwYXJ0Lm9yZy9pbWFnZS80MDBweC8xNzcwNzMnKTtcbiAgICBuZXdMaW5rSWNvbi5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdpY29uJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJykuc2V0QXR0cmlidXRlKCdsYW5nJywgJ2VuJyk7XG4gICAgaGVhZEVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5ld01ldGEsIHRpdGxlRWxlbWVudCk7XG4gICAgaGVhZEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3U2NyaXB0KTtcbiAgICBoZWFkRWxlbWVudC5hcHBlbmRDaGlsZChuZXdMaW5rRm9udCk7XG4gICAgaGVhZEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3TGlua0ljb24pO1xufSkoKTtcblxuY29uc3Qgc2V0VXBIZWFkZXJUYWcgPSAoZnVuY3Rpb24oKXtcbiAgICBjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGNvbnN0IG5ld0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IG5ld0gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBuZXdOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBjb25zdCBuZXdCdXR0b25Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbmV3QnV0dG9uTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG5ld0J1dHRvbkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIG5ld0gxLmlubmVyVGV4dCA9ICdFbWl5YSBIb21lIFJlc3RhdXJhbnQnO1xuICAgIG5ld0J1dHRvbkhvbWUuaW5uZXJUZXh0ID0gJ0hvbWUnO1xuICAgIG5ld0J1dHRvbk1lbnUuaW5uZXJUZXh0ID0gJ01lbnUnO1xuICAgIG5ld0J1dHRvbkNvbnRhY3QuaW5uZXJUZXh0ID0gJ0NvbnRhY3QnO1xuXG4gICAgbmV3QnV0dG9uSG9tZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1idG4nKTtcbiAgICBuZXdCdXR0b25Ib21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZS1idG4nKTtcbiAgICBuZXdCdXR0b25Ib21lLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMScpO1xuICAgIG5ld0J1dHRvbk1lbnUuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtYnRuJyk7XG4gICAgbmV3QnV0dG9uTWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUtYnRuJyk7XG4gICAgbmV3QnV0dG9uQ29udGFjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25hdi1idG4nKTtcbiAgICBuZXdCdXR0b25Db250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdC1idG4nKTtcblxuICAgIGJvZHlFbGVtZW50Lmluc2VydEJlZm9yZShuZXdIZWFkZXIsIGJvZHlFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIG5ld0hlYWRlci5hcHBlbmRDaGlsZChuZXdIMSk7XG4gICAgbmV3SGVhZGVyLmFwcGVuZENoaWxkKG5ld05hdik7XG4gICAgbmV3TmF2LmFwcGVuZENoaWxkKG5ld0J1dHRvbkhvbWUpO1xuICAgIG5ld05hdi5hcHBlbmRDaGlsZChuZXdCdXR0b25NZW51KTtcbiAgICBuZXdOYXYuYXBwZW5kQ2hpbGQobmV3QnV0dG9uQ29udGFjdCk7XG59KSgpO1xuXG5jb25zdCBkaXZDb250ZW50ID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb250ZW50Jyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHkgc2NyaXB0JykpO1xuICAgIHJldHVybiB7IGVsZW1lbnQgfTtcbn0pKCk7XG5cbmNvbnN0IHNldFVwRm9vdGVyVGFnID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgbmV3Rm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgbmV3RGl2Q3JlYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5ld0RpdlNvdXJjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG5ld0RpdkFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbmV3RGl2Q3JlYXRvci5pbm5lckhUTUwgPSBgREVWOiZuYnNwO1xuICAgICAgICA8YSBocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vSm9obkdhbWJvYS1MNGNrXCIgdGFyZ2V0PVwiYmxhbmtcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFiIGZhLWdpdGh1YlwiPjwvaT4gTDRja1xuICAgICAgICA8L2E+YDtcbiAgICBuZXdEaXZTb3VyY2UuaW5uZXJIVE1MID0gYFxuICAgICAgICA8YSBocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vSm9obkdhbWJvYS1MNGNrL3Jlc3RhdXJhbnQtcGFnZVwiIHRhcmdldD1cImJsYW5rXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jb2RlXCI+PC9pPiBTb3VyY2UgQ29kZVxuICAgICAgICA8L2E+YDtcbiAgICBuZXdEaXZBcnQuaW5uZXJIVE1MID0gYEJLR0QgQXJ0IGJ5OiZuYnNwO1xuICAgICAgICA8YSBocmVmID0gXCJodHRwczovL3d3dy5hcnRzdGF0aW9uLmNvbS9hcnNlbml4Y1wiIHRhcmdldCA9IFwiYmxhbmtcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFiIGZhLWFydHN0YXRpb25cIj48L2k+IEFyc2VuaXkgQ2hlYnlua2luXG4gICAgICAgIDwvYT5gO1xuXG4gICAgbmV3Rm9vdGVyLmFwcGVuZENoaWxkKG5ld0RpdkNyZWF0b3IpO1xuICAgIG5ld0Zvb3Rlci5hcHBlbmRDaGlsZChuZXdEaXZTb3VyY2UpO1xuICAgIG5ld0Zvb3Rlci5hcHBlbmRDaGlsZChuZXdEaXZBcnQpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmluc2VydEJlZm9yZVxuICAgICAgICAobmV3Rm9vdGVyLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5IHNjcmlwdCcpKTtcbn0pKCk7XG5cbi8vIGRpdkNvbnRlbnQuZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBidXR0b24nKS5mb3JFYWNoKChidG4pPT5idG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuLy8gaG9tZS5kaXNwbGF5KCk7XG5cbm1lbnUuZGlzcGxheSgpO1xuLy8gY29udGFjdC5kaXNwbGF5KCk7Il0sInNvdXJjZVJvb3QiOiIifQ==