import Hero  from './img/hero.jpeg';

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
        imgHero.src = Hero;

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

export default home;