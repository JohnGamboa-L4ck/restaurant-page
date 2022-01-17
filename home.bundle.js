(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

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

/***/ "./src/img/hero.jpeg":
/*!***************************!*\
  !*** ./src/img/hero.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "dbb476fa3e709125fb97.jpeg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFvQzs7QUFFcEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiwyQ0FBSTs7QUFFMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDOztBQUVELGlFQUFlLElBQUksRSIsImZpbGUiOiJob21lLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvICBmcm9tICcuL2ltZy9oZXJvLmpwZWcnO1xuXG4ndXNlIHN0cmljdCc7XG4gICAgXG5jb25zdCBob21lID0gKGZ1bmN0aW9uKCl7XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlQ29tYm8oKXtcbiAgICAgICAgY29uc3QgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdkNvbWJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGRpdlJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGRpdkhvdXJzLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMz5Ib3VyczwvaDM+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlN1bi1TYXQ6IDlhbSAtIDU6MzBwbTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPk1vbi1Gcmk6IDExYW0gLSA5OjMwcG08L2xpPlxuICAgICAgICAgICAgPC91bD5gO1xuICAgICAgICBkaXZSZXZpZXcuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFxuICAgICAgICAgICAgICAgIEV4cGxpY2FibyBlYXF1ZSBlbmltIHF1aWJ1c2RhbSBkb2xvcnVtIGFsaWFzIGRpc3RpbmN0aW8gY29ycnVwdGkgXG4gICAgICAgICAgICAgICAgYWNjdXNhbnRpdW0gZGVsZWN0dXMgdW5kZSBkZWxlbml0aSBkZXNlcnVudCBkb2xvcmVzIGxhYm9yaW9zYW0gcXVpcyBcbiAgICAgICAgICAgICAgICB2b2x1cHRhcywgYWxpcXVpZCBuaWhpbC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3MgPSBcInJpZ2h0XCI+TG9yZW08L2Rpdj5gO1xuICAgICAgICBkaXZDb21iby5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rpdi1jb21ibycpO1xuICAgICAgICBkaXZSZXZpZXcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZXZpZXcnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChkaXZDb21ibyk7XG4gICAgICAgIGRpdkNvbWJvLmFwcGVuZENoaWxkKGRpdkhvdXJzKTtcbiAgICAgICAgZGl2Q29tYm8uYXBwZW5kQ2hpbGQoZGl2UmV2aWV3KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlSGVybygpe1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZXJvJyk7XG4gICAgICAgIGNvbnN0IGltZ0hlcm8gPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nSGVyby5zcmMgPSBIZXJvO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWdIZXJvKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5KCl7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKF9jcmVhdGVDb21ibygpKTtcbiAgICAgICAgY29udGVudC5pbnNlcnRCZWZvcmUoX2NyZWF0ZUhlcm8oKSwgY29udGVudC5maXJzdENoaWxkKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUtYnRuJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICAgIHJldHVybiB7IGRpc3BsYXkgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==