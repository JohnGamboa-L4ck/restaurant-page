(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ0Y7QUFDbkI7QUFDVztBQUNLO0FBQ0w7QUFDTTs7QUFFekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyREFBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBEQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0RBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0EsY0FBYyxzREFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlEQUFXO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdURBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5REFBWTs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxpRUFBZSxJQUFJLEUiLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dGVyZWRTYWxtb24gZnJvbSAnLi9pbWcvZm9vZHMvYnV0dGVyZWQtc2FsbW9uLnBuZyc7XG5pbXBvcnQgQ2hpcmFzaGlTdXNoaSBmcm9tICcuL2ltZy9mb29kcy9jaGlyYXNoaS1zdXNoaS5wbmcnO1xuaW1wb3J0IFN0ZXcgZnJvbSAnLi9pbWcvZm9vZHMvc3Rldy5wbmcnO1xuaW1wb3J0IFJvYXN0QmVlZiBmcm9tICcuL2ltZy9mb29kcy9yb2FzdC1iZWVmLnBuZyc7XG5pbXBvcnQgVGVhT3ZlclJpY2UgZnJvbSAnLi9pbWcvZm9vZHMvdGVhLW92ZXItcmljZS5wbmcnO1xuaW1wb3J0IE9tZWxldHRlIGZyb20gJy4vaW1nL2Zvb2RzL29tZWxldC1yaWNlLnBuZyc7XG5pbXBvcnQgRnJpZWRDaGlja2VuIGZyb20gJy4vaW1nL2Zvb2RzL2ZyaWVkLWNoaWNrZW4ucG5nJztcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmb29kRmFjdG9yeSA9IChuYW1lLCBrYW5qaSwgcHJpY2UsIGltZ1NSQykgPT4ge1xuICAgIGNvbnN0IGxvZ05hbWUgPSBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICB9O1xuICAgIHJldHVybiB7IG5hbWUsIGthbmppLCBwcmljZSwgaW1nU1JDICxsb2dOYW1lfVxufTtcblxuY29uc3QgbWVudSA9IChmdW5jdGlvbigpe1xuXG4gICAgbGV0IGFycmF5ID0gW107XG5cbiAgICBhcnJheS5wdXNoKGZvb2RGYWN0b3J5KFxuICAgICAgICAnRm9pbC1CYWtlZCBCdXR0ZXJlZCBTYWxtb24gYW5kIE11c2hyb29tcycsIFxuICAgICAgICAn6a6t44Go44GN44Gu44GT44Gu44OQ44K/44O844Ob44Kk44Or54S844GNJyxcbiAgICAgICAgNDAwLCBCdXR0ZXJlZFNhbG1vbikpO1xuICAgIGFycmF5LnB1c2goZm9vZEZhY3RvcnkoXG4gICAgICAgICdTcHJpbmcgQ2hpcmFzaGktU3VzaGknLCBcbiAgICAgICAgJ+aYpeOBruOBoeOCieOBl+Wvv+WPuCcsXG4gICAgICAgIDY1MCwgQ2hpcmFzaGlTdXNoaSkpO1xuICAgIGFycmF5LnB1c2goZm9vZEZhY3RvcnkoXG4gICAgICAgICdIZWFydHdhcm1pbmcgU3RldycsXG4gICAgICAgICfjgYLjgaPjgZ/jgYvlr4TjgZvpjYsnLFxuICAgICAgICA2MDAsIFN0ZXcpKTtcbiAgICBhcnJheS5wdXNoKGZvb2RGYWN0b3J5KFxuICAgICAgICAnT25lLVBhbiBSb2FzdCBCZWVmJyxcbiAgICAgICAgJ+ODleODqeOCpOODkeODs+OBoOOBkeOBp+S9nOOCi+ODreODvOOCueODiOODk+ODvOODlScsXG4gICAgICAgIDIwMDAsIFJvYXN0QmVlZikpO1xuICAgIGFycmF5LnB1c2goZm9vZEZhY3RvcnkoXG4gICAgICAgICdDaGlsbGVkIEdyZWVuIFRlYSBPdmVyIFJpY2UnLFxuICAgICAgICAn44GV44KJ44KK44Go6aCC44GP5Ya344KE44GX6Iy25rys44GRJyxcbiAgICAgICAgMzAwLCBUZWFPdmVyUmljZSkpO1xuICAgIGFycmF5LnB1c2goZm9vZEZhY3RvcnkoXG4gICAgICAgICdTb2Z0IGFuZCBNZWx0eSBPbWVsZXQgUmljZScsXG4gICAgICAgICfnibnoo73jgbXjgo/jgajjgo3jgqrjg6Djg6njgqTjgrknLFxuICAgICAgICAyMDAsIE9tZWxldHRlKSk7XG4gICAgYXJyYXkucHVzaChmb29kRmFjdG9yeShcbiAgICAgICAgJ0ZyaWVkIENoaWNrZW4nLFxuICAgICAgICAn5Ya344KB44Gm44KC576O5ZGz44GX44GE44GL44KJ44GC44GSJyxcbiAgICAgICAgNDAwLCBGcmllZENoaWNrZW4pKTtcblxuICAgIGZ1bmN0aW9uIF9jcmVhdGVNZW51KCl7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBuZXdIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgICAgICAgbmV3SDIuaW5uZXJUZXh0ID0gJ01lbnUnO1xuICAgICAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQobmV3SDIpO1xuXG4gICAgICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24obWVhbCl7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0g0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1BhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdINSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG4gICAgICAgICAgICBjb25zdCBmb29kSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdmb29kJyk7XG4gICAgICAgICAgICBuZXdINC5pbm5lclRleHQgPSBtZWFsLm5hbWU7XG4gICAgICAgICAgICBuZXdQYXJhLmlubmVyVGV4dCA9IG1lYWwua2Fuamk7XG4gICAgICAgICAgICBuZXdINS5pbm5lclRleHQgPSBtZWFsLnByaWNlLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgICAgICAgICBmb29kSW1hZ2Uuc3JjID0gbWVhbC5pbWdTUkM7XG5cbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKG5ld0g0KTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChuZXdQYXJhKTtcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChuZXdINSk7XG4gICAgICAgICAgICBjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lckRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNwbGF5KCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JykuYXBwZW5kQ2hpbGQoX2NyZWF0ZU1lbnUoKSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LWJ0bicpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGRpc3BsYXkgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==