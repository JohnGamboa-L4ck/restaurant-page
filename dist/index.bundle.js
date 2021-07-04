(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";
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

"use strict";
module.exports = __webpack_require__.p + "f0fb51cbb8bfec4cbe74.jpg";

/***/ }),

/***/ "./src/img/foods/buttered-salmon.png":
/*!*******************************************!*\
  !*** ./src/img/foods/buttered-salmon.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a9ceafb67d95e944923.png";

/***/ }),

/***/ "./src/img/foods/chirashi-sushi.png":
/*!******************************************!*\
  !*** ./src/img/foods/chirashi-sushi.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bdcfdb8ccc3387990e26.png";

/***/ }),

/***/ "./src/img/foods/fried-chicken.png":
/*!*****************************************!*\
  !*** ./src/img/foods/fried-chicken.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dbcfad3c00f1c1291c44.png";

/***/ }),

/***/ "./src/img/foods/omelet-rice.png":
/*!***************************************!*\
  !*** ./src/img/foods/omelet-rice.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f305b1b67986aa58ce96.png";

/***/ }),

/***/ "./src/img/foods/roast-beef.png":
/*!**************************************!*\
  !*** ./src/img/foods/roast-beef.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fc81dc36c65ef44cfa9d.png";

/***/ }),

/***/ "./src/img/foods/stew.png":
/*!********************************!*\
  !*** ./src/img/foods/stew.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "07a5f4199d6a6558c89d.png";

/***/ }),

/***/ "./src/img/foods/tea-over-rice.png":
/*!*****************************************!*\
  !*** ./src/img/foods/tea-over-rice.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "809f2f4881eb36625d6a.png";

/***/ }),

/***/ "./src/img/hero.jpeg":
/*!***************************!*\
  !*** ./src/img/hero.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dbb476fa3e709125fb97.jpeg";

/***/ }),

/***/ "./src/img/loc.png":
/*!*************************!*\
  !*** ./src/img/loc.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a1cdea09aedd03e7b640.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VGFyZ2V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sIm5hbWVzIjpbXSwi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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsMkNBQUk7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpRUFBZSxJQUFJLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZERTtBQUNRO0FBQ0E7QUFDTTs7QUFFbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLENBQUMscURBQVksR0FBRztBQUM5QyxtQ0FBbUMsQ0FBQyxxREFBWSxHQUFHO0FBQ25ELFVBQVUsQ0FBQyx3REFBZSxHQUFHO0FBQzdCOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQztBQUNBLG9EQUFvRCxFO0FBQ3BELHNDO0FBQ0EsdURBQXVEO0FBQ3ZELFVBQVUsNkNBQTZDO0FBQ3ZEOztBQUVBO0FBQ0EsNEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSTZEO0FBQ0Y7QUFDbkI7QUFDVztBQUNLO0FBQ0w7QUFDTTs7QUFFekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyREFBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBEQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxzREFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlEQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdURBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5REFBWTs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpRUFBZSxJQUFJLEUiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2ltZy9hcnNlbml5LWNoZWJ5bmtpbi1raXRubC5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tdHJhbnNwYXJlbnQwOiByZ2JhKDAsIDAsIDAsIC4wKTtcXG4gICAgLS10cmFuc3BhcmVudDg6IHJnYmEoMCwgMCwgMCwgLjgpO1xcbiAgICAtLWxpZ2h0OiBoc2woMCwgMCUsIDkyJSk7XFxuICAgIC0tZGFyazogaHNsKDAsIDAlLCAxMiUpO1xcbiAgICAtLWdpdnJ5OiBoc2woNDQsIDgwJSwgODUlKTtcXG4gICAgLS1hdWJ1cm46IGhzbCgwLCA3NSUsIDY1JSk7XFxufVxcblxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwOyAgXFxufVxcblxcbmJvZHkge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDQlIDEwNCU7XFxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufSBcXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG4gICAgZm9udC1mYW1pbHk6ICdDYWlybycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxufVxcblxcbmgxLGgyLGgzLGg0LGg1LGg2IHtcXG4gICAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYScsIGN1cnNpdmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uOmhvdmVyLFxcbmJ1dHRvbjpmb2N1cy12aXNpYmxlLCBcXG5hOmhvdmVyLFxcbmE6Zm9jdXMtdmlzaWJsZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMzAlO1xcbiAgICBjb2xvcjogdmFyKC0tZ2l2cnkpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQ4KTtcXG59XFxuXFxuaGVhZGVyIGgxIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXG4gICAgcGFkZGluZzogMnJlbSAxcmVtIDFyZW0gMXJlbTtcXG59XFxuXFxuaGVhZGVyIG5hdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBuYXYgYnV0dG9ue1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3BhcmVudDApO1xcbn1cXG5cXG4ubmF2LWJ0bi5hY3RpdmUge1xcbiAgICBjb2xvcjogdmFyKC0tYXVidXJuKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogMzAlO1xcbn1cXG5cXG5kaXYuY29udGVudCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBjb2xvcjogdmFyKC0tbWlkbmlnaHQtYmx1ZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50MCk7XFxufVxcblxcbmRpdi5jb250ZW50ID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbmRpdi5jb250ZW50ID4gZGl2ID4gZGl2LFxcbmRpdi5jb250ZW50ID4gZGl2ID4gZGl2ID4gZGl2IHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmRpdi1jb21ibyB7XFxuICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4uZGl2LWNvbWJvIGRpdjpudGgtY2hpbGQoMSkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLnJldmlldyB7XFxuICAgIG1heC13aWR0aDogNTBjaDtcXG59XFxuXFxuLnJldmlldyBwIHtcXG4gICAgcGFkZGluZzogLjFyZW07XFxufVxcblxcbi5yZXZpZXcgcDo6YmVmb3JlLFxcbi5yZXZpZXcgcDo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnXFxcIic7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5yaWdodDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIi0gXFxcIjtcXG59XFxuXFxuaDMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5oNTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXFwwMEE1XFxcIjtcXG59XFxuXFxuaDUge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmNvbnRlbnQgPiBkaXYgPiBkaXYuZm9vZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50OCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmNvbnRlbnQgPiBkaXYgPiBkaXYuZm9vZCBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LXdpZHRoOiA1MGNoO1xcbn1cXG5cXG4uY29udGVudCBkaXYuY29udGFjdCBwIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb250ZW50IGRpdi5jb250YWN0IHAgc3BhbiB7XFxuICAgIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLmNvbnRlbnQgZGl2LmNvbnRhY3QgaW1nLFxcbi5oZXJvIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDYwY2g7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG5mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmspO1xcbn1cXG5cXG5mb290ZXIgZGl2e1xcbiAgICBtYXJnaW46IC41cmVtIDFyZW07XFxuICAgIGZvbnQtc2l6ZTogLjlyZW07XFxufVxcblxcbmkge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuZm9vdGVyIGRpdiBhIHtcXG4gICAgZm9udC1zaXplOiAxcmVtOyAgXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcXG4gICAgaGVhZGVyIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgcGFkZGluZzogMXJlbSAuNXJlbSAuNXJlbSAuNXJlbTtcXG4gICAgfVxcbiAgICBoZWFkZXIgbmF2IGJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW46IC41cmVtIDFyZW07XFxuICAgIH1cXG4gICAgLmRpdi1jb21ibyB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIGgyIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICB9XFxuICAgIGZvb3RlciB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9IFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlEQUF3RDtJQUN4RCw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCOztBQUVBOzs7O0lBSUksMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLCtCQUErQjtJQUNuQztJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXRyYW5zcGFyZW50MDogcmdiYSgwLCAwLCAwLCAuMCk7XFxuICAgIC0tdHJhbnNwYXJlbnQ4OiByZ2JhKDAsIDAsIDAsIC44KTtcXG4gICAgLS1saWdodDogaHNsKDAsIDAlLCA5MiUpO1xcbiAgICAtLWRhcms6IGhzbCgwLCAwJSwgMTIlKTtcXG4gICAgLS1naXZyeTogaHNsKDQ0LCA4MCUsIDg1JSk7XFxuICAgIC0tYXVidXJuOiBoc2woMCwgNzUlLCA2NSUpO1xcbn1cXG5cXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDsgIFxcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodCk7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9hcnNlbml5LWNoZWJ5bmtpbi1raXRubC5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwNCUgMTA0JTtcXG4gICAgLyogYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcXG59IFxcblxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQpO1xcbiAgICBmb250LWZhbWlseTogJ0NhaXJvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0KTtcXG59XFxuXFxuaDEsaDIsaDMsaDQsaDUsaDYge1xcbiAgICBmb250LWZhbWlseTogJ01lcmllbmRhJywgY3Vyc2l2ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuYnV0dG9uOmZvY3VzLXZpc2libGUsIFxcbmE6aG92ZXIsXFxuYTpmb2N1cy12aXNpYmxle1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzMCU7XFxuICAgIGNvbG9yOiB2YXIoLS1naXZyeSk7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudDgpO1xcbn1cXG5cXG5oZWFkZXIgaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgICBwYWRkaW5nOiAycmVtIDFyZW0gMXJlbSAxcmVtO1xcbn1cXG5cXG5oZWFkZXIgbmF2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIG5hdiBidXR0b257XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50MCk7XFxufVxcblxcbi5uYXYtYnRuLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB2YXIoLS1hdWJ1cm4pO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAzMCU7XFxufVxcblxcbmRpdi5jb250ZW50IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1taWRuaWdodC1ibHVlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQwKTtcXG59XFxuXFxuZGl2LmNvbnRlbnQgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50OCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuZGl2LmNvbnRlbnQgPiBkaXYgPiBkaXYsXFxuZGl2LmNvbnRlbnQgPiBkaXYgPiBkaXYgPiBkaXYge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZGl2LWNvbWJvIHtcXG4gICAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblxcbi5kaXYtY29tYm8gZGl2Om50aC1jaGlsZCgxKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcGFyZW50OCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4ucmV2aWV3IHtcXG4gICAgbWF4LXdpZHRoOiA1MGNoO1xcbn1cXG5cXG4ucmV2aWV3IHAge1xcbiAgICBwYWRkaW5nOiAuMXJlbTtcXG59XFxuXFxuLnJldmlldyBwOjpiZWZvcmUsXFxuLnJldmlldyBwOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICdcXFwiJztcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4ucmlnaHQge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnJpZ2h0OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiLSBcXFwiO1xcbn1cXG5cXG5oMyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbmg1OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcXDAwQTVcXFwiO1xcbn1cXG5cXG5oNSB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY29udGVudCA+IGRpdiA+IGRpdi5mb29kIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQ4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uY29udGVudCA+IGRpdiA+IGRpdi5mb29kIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtd2lkdGg6IDUwY2g7XFxufVxcblxcbi5jb250ZW50IGRpdi5jb250YWN0IHAge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbnRlbnQgZGl2LmNvbnRhY3QgcCBzcGFuIHtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4uY29udGVudCBkaXYuY29udGFjdCBpbWcsXFxuLmhlcm8gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC13aWR0aDogNjBjaDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyayk7XFxufVxcblxcbmZvb3RlciBkaXZ7XFxuICAgIG1hcmdpbjogLjVyZW0gMXJlbTtcXG4gICAgZm9udC1zaXplOiAuOXJlbTtcXG59XFxuXFxuaSB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG5mb290ZXIgZGl2IGEge1xcbiAgICBmb250LXNpemU6IDFyZW07ICBcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xcbiAgICBoZWFkZXIgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgICAgICBwYWRkaW5nOiAxcmVtIC41cmVtIC41cmVtIC41cmVtO1xcbiAgICB9XFxuICAgIGhlYWRlciBuYXYgYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbjogLjVyZW0gMXJlbTtcXG4gICAgfVxcbiAgICAuZGl2LWNvbWJvIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG4gICAgaDIge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgIH1cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH0gXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGdldFRhcmdldCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFRhcmdldC5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBmdW5jdGlvbihjc3MsIHN0eWxlKXtcbiAgICAgIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgfVxuICB9O1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgdmFyIG5vbmNlID1cbiAgICAgICAgICB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICB9O1xub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihzdHlsZSl7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChcImhlYWRcIik7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9O1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFyZ2V0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJpbXBvcnQgTG9jYXRpb24gZnJvbSAnLi9pbWcvbG9jLnBuZyc7XG5cbid1c2Ugc3RyaWN0JztcblxuY29uc3QgY29udGFjdCA9IChmdW5jdGlvbigpe1xuICAgIGZ1bmN0aW9uIF9jcmVhdGVDb250YWN0KCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnRhaW5lckRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbnRhY3QnKTtcbiAgICAgICAgY29udGFpbmVyRGl2LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMz5Db250YWN0IFVzPC9oMz5cbiAgICAgICAgICAgIDxwPjxzdHJvbmc+VGVsZXBob25lOiA8L3N0cm9uZz48c3Bhbj4wNzgtOTk5MjY2MTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8cD48c3Ryb25nPk1vYmlsZTogPC9zdHJvbmc+PHNwYW4+KzgxLTkwNzgzMTQ0NDQ8L3NwYW4+PC9wPlxuICAgICAgICAgICAgPHA+PHN0cm9uZz5BZGRyZXNzOiA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgMi1jaG9tZS0xIE9ha2FzaGljaG8sIEFrYXNoaSwgSHlvZ28gNjczLTA4OTEsIEphcGFuXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPmA7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uSW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGxvY2F0aW9uSW1nLnNyYyA9IExvY2F0aW9uO1xuICAgICAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25JbWcpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyRGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXkoKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChfY3JlYXRlQ29udGFjdCgpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QtYnRuJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZGlzcGxheSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDsiLCJpbXBvcnQgSGVybyAgZnJvbSAnLi9pbWcvaGVyby5qcGVnJztcblxuJ3VzZSBzdHJpY3QnO1xuICAgIFxuY29uc3QgaG9tZSA9IChmdW5jdGlvbigpe1xuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUNvbWJvKCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXZDb21ibyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXZIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXZSZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXZIb3Vycy5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aDM+SG91cnM8L2gzPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5TdW4tU2F0OiA5YW0gLSA1OjMwcG08L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5Nb24tRnJpOiAxMWFtIC0gOTozMHBtPC9saT5cbiAgICAgICAgICAgIDwvdWw+YDtcbiAgICAgICAgZGl2UmV2aWV3LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBcbiAgICAgICAgICAgICAgICBFeHBsaWNhYm8gZWFxdWUgZW5pbSBxdWlidXNkYW0gZG9sb3J1bSBhbGlhcyBkaXN0aW5jdGlvIGNvcnJ1cHRpIFxuICAgICAgICAgICAgICAgIGFjY3VzYW50aXVtIGRlbGVjdHVzIHVuZGUgZGVsZW5pdGkgZGVzZXJ1bnQgZG9sb3JlcyBsYWJvcmlvc2FtIHF1aXMgXG4gICAgICAgICAgICAgICAgdm9sdXB0YXMsIGFsaXF1aWQgbmloaWwuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzID0gXCJyaWdodFwiPkxvcmVtPC9kaXY+YDtcbiAgICAgICAgZGl2Q29tYm8uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkaXYtY29tYm8nKTtcbiAgICAgICAgZGl2UmV2aWV3LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmV2aWV3Jyk7XG4gICAgICAgIFxuICAgICAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZGl2Q29tYm8pO1xuICAgICAgICBkaXZDb21iby5hcHBlbmRDaGlsZChkaXZIb3Vycyk7XG4gICAgICAgIGRpdkNvbWJvLmFwcGVuZENoaWxkKGRpdlJldmlldyk7XG4gICAgICAgIHJldHVybiBjb250YWluZXJEaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUhlcm8oKXtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVybycpO1xuICAgICAgICBjb25zdCBpbWdIZXJvID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZ0hlcm8uc3JjID0gSGVybztcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nSGVybyk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheSgpe1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChfY3JlYXRlQ29tYm8oKSk7XG4gICAgICAgIGNvbnRlbnQuaW5zZXJ0QmVmb3JlKF9jcmVhdGVIZXJvKCksIGNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLWJ0bicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICByZXR1cm4geyBkaXNwbGF5IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBob21lOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IHNldFVwSGVhZFRhZyA9IChmdW5jdGlvbigpe1xuICAgIGNvbnN0IGhlYWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpO1xuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJyk7XG5cbiAgICBjb25zdCBuZXdNZXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWV0YScpO1xuICAgIGNvbnN0IG5ld1NjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIGNvbnN0IG5ld0xpbmtGb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGNvbnN0IG5ld0xpbmtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gICAgbmV3TWV0YS5zZXRBdHRyaWJ1dGUoJ2h0dHAtZXF1aXYnLCdYLVVBLUNvbXBhdGlibGUnKTtcbiAgICBuZXdNZXRhLnNldEF0dHJpYnV0ZSgnY29udGVudCcsJ0lFPWVkZ2UnKTtcbiAgICBuZXdTY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tL2UwYjI0YTA4YjYuanMnKTtcbiAgICBuZXdTY3JpcHQuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsICdhbm9ueW1vdXMnKTtcbiAgICBuZXdMaW5rRm9udC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBcbiAgICAgICAgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2Fpcm8mZmFtaWx5PU1lcmllbmRhJmRpc3BsYXk9c3dhcCcpO1xuICAgIG5ld0xpbmtGb250LnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICBuZXdMaW5rSWNvbi5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9vcGVuY2xpcGFydC5vcmcvaW1hZ2UvNDAwcHgvMTc3MDczJyk7XG4gICAgbmV3TGlua0ljb24uc2V0QXR0cmlidXRlKCdyZWwnLCAnaWNvbicpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLnNldEF0dHJpYnV0ZSgnbGFuZycsICdlbicpO1xuICAgIGhlYWRFbGVtZW50Lmluc2VydEJlZm9yZShuZXdNZXRhLCB0aXRsZUVsZW1lbnQpO1xuICAgIGhlYWRFbGVtZW50LmFwcGVuZENoaWxkKG5ld1NjcmlwdCk7XG4gICAgaGVhZEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3TGlua0ZvbnQpO1xuICAgIGhlYWRFbGVtZW50LmFwcGVuZENoaWxkKG5ld0xpbmtJY29uKTtcbn0pKCk7XG5cbmNvbnN0IHNldFVwSGVhZGVyVGFnID0gKGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICBjb25zdCBuZXdIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBuZXdIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgbmV3TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG4gICAgY29uc3QgbmV3QnV0dG9uSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG5ld0J1dHRvbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBuZXdCdXR0b25Db250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBuZXdIMS5pbm5lclRleHQgPSAnRW1peWEgSG9tZSBSZXN0YXVyYW50JztcbiAgICBuZXdCdXR0b25Ib21lLmlubmVyVGV4dCA9ICdIb21lJztcbiAgICBuZXdCdXR0b25NZW51LmlubmVyVGV4dCA9ICdNZW51JztcbiAgICBuZXdCdXR0b25Db250YWN0LmlubmVyVGV4dCA9ICdDb250YWN0JztcblxuICAgIG5ld0J1dHRvbkhvbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtYnRuJyk7XG4gICAgbmV3QnV0dG9uSG9tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUtYnRuJyk7XG4gICAgbmV3QnV0dG9uSG9tZS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzEnKTtcbiAgICBuZXdCdXR0b25NZW51LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmF2LWJ0bicpO1xuICAgIG5ld0J1dHRvbk1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51LWJ0bicpO1xuICAgIG5ld0J1dHRvbkNvbnRhY3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICduYXYtYnRuJyk7XG4gICAgbmV3QnV0dG9uQ29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QtYnRuJyk7XG5cbiAgICBib2R5RWxlbWVudC5pbnNlcnRCZWZvcmUobmV3SGVhZGVyLCBib2R5RWxlbWVudC5maXJzdENoaWxkKTtcbiAgICBuZXdIZWFkZXIuYXBwZW5kQ2hpbGQobmV3SDEpO1xuICAgIG5ld0hlYWRlci5hcHBlbmRDaGlsZChuZXdOYXYpO1xuICAgIG5ld05hdi5hcHBlbmRDaGlsZChuZXdCdXR0b25Ib21lKTtcbiAgICBuZXdOYXYuYXBwZW5kQ2hpbGQobmV3QnV0dG9uTWVudSk7XG4gICAgbmV3TmF2LmFwcGVuZENoaWxkKG5ld0J1dHRvbkNvbnRhY3QpO1xufSkoKTtcblxuY29uc3QgZGl2Q29udGVudCA9IChmdW5jdGlvbigpe1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGVudCcpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmluc2VydEJlZm9yZShlbGVtZW50LFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5IHNjcmlwdCcpKTtcbiAgICByZXR1cm4geyBlbGVtZW50IH07XG59KSgpO1xuXG5jb25zdCBzZXRVcEZvb3RlclRhZyA9IChmdW5jdGlvbigpe1xuICAgIGNvbnN0IG5ld0Zvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGNvbnN0IG5ld0RpdkNyZWF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuZXdEaXZTb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuZXdEaXZBcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIG5ld0RpdkNyZWF0b3IuaW5uZXJIVE1MID0gYERFVjombmJzcDtcbiAgICAgICAgPGEgaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0pvaG5HYW1ib2EtTDRja1wiIHRhcmdldD1cImJsYW5rXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhYiBmYS1naXRodWJcIj48L2k+IEw0Y2tcbiAgICAgICAgPC9hPmA7XG4gICAgbmV3RGl2U291cmNlLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGEgaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL0pvaG5HYW1ib2EtTDRjay9yZXN0YXVyYW50LXBhZ2VcIiB0YXJnZXQ9XCJibGFua1wiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY29kZVwiPjwvaT4gU291cmNlIENvZGVcbiAgICAgICAgPC9hPmA7XG4gICAgbmV3RGl2QXJ0LmlubmVySFRNTCA9IGBCS0dEIEFydCBieTombmJzcDtcbiAgICAgICAgPGEgaHJlZiA9IFwiaHR0cHM6Ly93d3cuYXJ0c3RhdGlvbi5jb20vYXJzZW5peGNcIiB0YXJnZXQgPSBcImJsYW5rXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhYiBmYS1hcnRzdGF0aW9uXCI+PC9pPiBBcnNlbml5IENoZWJ5bmtpblxuICAgICAgICA8L2E+YDtcblxuICAgIG5ld0Zvb3Rlci5hcHBlbmRDaGlsZChuZXdEaXZDcmVhdG9yKTtcbiAgICBuZXdGb290ZXIuYXBwZW5kQ2hpbGQobmV3RGl2U291cmNlKTtcbiAgICBuZXdGb290ZXIuYXBwZW5kQ2hpbGQobmV3RGl2QXJ0KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5pbnNlcnRCZWZvcmVcbiAgICAgICAgKG5ld0Zvb3RlciwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keSBzY3JpcHQnKSk7XG59KSgpO1xuXG5jb25zdCBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbigpe1xuICAgIGlmKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuXG4gICAgbGV0IHRhcmdldCA9IHRoaXMuaWQ7XG4gICAgZGl2Q29udGVudC5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBidXR0b24nKS5mb3JFYWNoKChidG4pPT5idG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xuXG4gICAgaWYgKHRhcmdldCA9PSAnaG9tZS1idG4nKXsgaG9tZS5kaXNwbGF5KCk7IH1cbiAgICBlbHNlIGlmICh0YXJnZXQgPT0gJ21lbnUtYnRuJyl7IG1lbnUuZGlzcGxheSgpOyB9XG4gICAgZWxzZSB7IGNvbnRhY3QuZGlzcGxheSgpOyB9XG59O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCduYXYgYnV0dG9uJykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbn0pO1xuXG5jb25zdCBrZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBpZihldmVudC5jb2RlICE9PSAnVGFiJykgcmV0dXJuO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBhY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJ0bi5hY3RpdmUnKTtcblxuICAgIGlmIChhY3RpdmUuaWQgPT0gJ2hvbWUtYnRuJyl7IFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS1idG4nKS5jbGljaygpOyB9IFxuICAgIGVsc2UgaWYgKGFjdGl2ZS5pZCA9PSAnbWVudS1idG4nKXsgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0LWJ0bicpLmNsaWNrKCk7IH1cbiAgICBlbHNlIHsgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJykuY2xpY2soKTsgfVxufTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duSGFuZGxlcik7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1idG4nKS5jbGljaygpOyIsImltcG9ydCBCdXR0ZXJlZFNhbG1vbiBmcm9tICcuL2ltZy9mb29kcy9idXR0ZXJlZC1zYWxtb24ucG5nJztcbmltcG9ydCBDaGlyYXNoaVN1c2hpIGZyb20gJy4vaW1nL2Zvb2RzL2NoaXJhc2hpLXN1c2hpLnBuZyc7XG5pbXBvcnQgU3RldyBmcm9tICcuL2ltZy9mb29kcy9zdGV3LnBuZyc7XG5pbXBvcnQgUm9hc3RCZWVmIGZyb20gJy4vaW1nL2Zvb2RzL3JvYXN0LWJlZWYucG5nJztcbmltcG9ydCBUZWFPdmVyUmljZSBmcm9tICcuL2ltZy9mb29kcy90ZWEtb3Zlci1yaWNlLnBuZyc7XG5pbXBvcnQgT21lbGV0dGUgZnJvbSAnLi9pbWcvZm9vZHMvb21lbGV0LXJpY2UucG5nJztcbmltcG9ydCBGcmllZENoaWNrZW4gZnJvbSAnLi9pbWcvZm9vZHMvZnJpZWQtY2hpY2tlbi5wbmcnO1xuXG4ndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZvb2RGYWN0b3J5ID0gKG5hbWUsIGthbmppLCBwcmljZSwgaW1nU1JDKSA9PiB7XG4gICAgY29uc3QgbG9nTmFtZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgIH07XG4gICAgcmV0dXJuIHsgbmFtZSwga2FuamksIHByaWNlLCBpbWdTUkMgLGxvZ05hbWV9XG59O1xuXG5jb25zdCBtZW51ID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBsZXQgYXJyYXkgPSBbXTtcblxuICAgIGFycmF5LnB1c2goZm9vZEZhY3RvcnkoXG4gICAgICAgICdGb2lsLUJha2VkIEJ1dHRlcmVkIFNhbG1vbiBhbmQgTXVzaHJvb21zJywgXG4gICAgICAgICfprq3jgajjgY3jga7jgZPjga7jg5Djgr/jg7zjg5vjgqTjg6vnhLzjgY0nLFxuICAgICAgICA0MDAsIEJ1dHRlcmVkU2FsbW9uKSk7XG4gICAgYXJyYXkucHVzaChmb29kRmFjdG9yeShcbiAgICAgICAgJ1NwcmluZyBDaGlyYXNoaS1TdXNoaScsIFxuICAgICAgICAn5pil44Gu44Gh44KJ44GX5a+/5Y+4JyxcbiAgICAgICAgNjUwLCBDaGlyYXNoaVN1c2hpKSk7XG4gICAgYXJyYXkucHVzaChmb29kRmFjdG9yeShcbiAgICAgICAgJ0hlYXJ0d2FybWluZyBTdGV3JyxcbiAgICAgICAgJ+OBguOBo+OBn+OBi+WvhOOBm+mNiycsXG4gICAgICAgIDYwMCwgU3RldykpO1xuICAgIGFycmF5LnB1c2goZm9vZEZhY3RvcnkoXG4gICAgICAgICdPbmUtUGFuIFJvYXN0IEJlZWYnLFxuICAgICAgICAn44OV44Op44Kk44OR44Oz44Gg44GR44Gn5L2c44KL44Ot44O844K544OI44OT44O844OVJyxcbiAgICAgICAgMjAwMCwgUm9hc3RCZWVmKSk7XG4gICAgYXJyYXkucHVzaChmb29kRmFjdG9yeShcbiAgICAgICAgJ0NoaWxsZWQgR3JlZW4gVGVhIE92ZXIgUmljZScsXG4gICAgICAgICfjgZXjgonjgorjgajpoILjgY/lhrfjgoTjgZfojLbmvKzjgZEnLFxuICAgICAgICAzMDAsIFRlYU92ZXJSaWNlKSk7XG4gICAgYXJyYXkucHVzaChmb29kRmFjdG9yeShcbiAgICAgICAgJ1NvZnQgYW5kIE1lbHR5IE9tZWxldCBSaWNlJyxcbiAgICAgICAgJ+eJueijveOBteOCj+OBqOOCjeOCquODoOODqeOCpOOCuScsXG4gICAgICAgIDIwMCwgT21lbGV0dGUpKTtcbiAgICBhcnJheS5wdXNoKGZvb2RGYWN0b3J5KFxuICAgICAgICAnRnJpZWQgQ2hpY2tlbicsXG4gICAgICAgICflhrfjgoHjgabjgoLnvo7lkbPjgZfjgYTjgYvjgonjgYLjgZInLFxuICAgICAgICA0MDAsIEZyaWVkQ2hpY2tlbikpO1xuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZU1lbnUoKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG5ld0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICAgICAgICBuZXdIMi5pbm5lclRleHQgPSAnTWVudSc7XG4gICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChuZXdIMik7XG5cbiAgICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihtZWFsKXtcbiAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3QgbmV3SDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICAgICAgY29uc3QgbmV3UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0g1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcbiAgICAgICAgICAgIGNvbnN0IGZvb2RJbWFnZSA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Zvb2QnKTtcbiAgICAgICAgICAgIG5ld0g0LmlubmVyVGV4dCA9IG1lYWwubmFtZTtcbiAgICAgICAgICAgIG5ld1BhcmEuaW5uZXJUZXh0ID0gbWVhbC5rYW5qaTtcbiAgICAgICAgICAgIG5ld0g1LmlubmVyVGV4dCA9IG1lYWwucHJpY2UudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgICAgIGZvb2RJbWFnZS5zcmMgPSBtZWFsLmltZ1NSQztcblxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGZvb2RJbWFnZSk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobmV3SDQpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5ld1BhcmEpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5ld0g1KTtcbiAgICAgICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY29udGFpbmVyRGl2O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3BsYXkoKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmRDaGlsZChfY3JlYXRlTWVudSgpKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtYnRuJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZGlzcGxheSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudTsiXSwic291cmNlUm9vdCI6IiJ9