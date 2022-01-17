(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contact"],{

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

/***/ "./src/img/loc.png":
/*!*************************!*\
  !*** ./src/img/loc.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a1cdea09aedd03e7b640.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFxQzs7QUFFckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIseUNBQVE7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVELGlFQUFlLE9BQU8sRSIsImZpbGUiOiJjb250YWN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMb2NhdGlvbiBmcm9tICcuL2ltZy9sb2MucG5nJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBjb250YWN0ID0gKGZ1bmN0aW9uKCl7XG4gICAgZnVuY3Rpb24gX2NyZWF0ZUNvbnRhY3QoKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29udGFpbmVyRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29udGFjdCcpO1xuICAgICAgICBjb250YWluZXJEaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGgzPkNvbnRhY3QgVXM8L2gzPlxuICAgICAgICAgICAgPHA+PHN0cm9uZz5UZWxlcGhvbmU6IDwvc3Ryb25nPjxzcGFuPjA3OC05OTkyNjYxPC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwPjxzdHJvbmc+TW9iaWxlOiA8L3N0cm9uZz48c3Bhbj4rODEtOTA3ODMxNDQ0NDwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8cD48c3Ryb25nPkFkZHJlc3M6IDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAyLWNob21lLTEgT2FrYXNoaWNobywgQWthc2hpLCBIeW9nbyA2NzMtMDg5MSwgSmFwYW5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+YDtcbiAgICAgICAgY29uc3QgbG9jYXRpb25JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbG9jYXRpb25JbWcuc3JjID0gTG9jYXRpb247XG4gICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkltZyk7XG4gICAgICAgIHJldHVybiBjb250YWluZXJEaXY7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzcGxheSgpe1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpLmFwcGVuZENoaWxkKF9jcmVhdGVDb250YWN0KCkpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdC1idG4nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBkaXNwbGF5IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyJdLCJzb3VyY2VSb290IjoiIn0=