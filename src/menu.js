import ButteredSalmon from './img/foods/buttered-salmon.png';
import ChirashiSushi from './img/foods/chirashi-sushi.png';
import Stew from './img/foods/stew.png';

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
        400, ButteredSalmon));
    array.push(foodFactory(
        'Spring Chirashi-Sushi', 
        '春のちらし寿司',
        650, ChirashiSushi));
    array.push(foodFactory(
        'Heartwarming Stew',
        'あったか寄せ鍋',
        600, Stew));

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

export default menu;