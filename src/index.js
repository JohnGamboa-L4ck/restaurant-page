import './style.css';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

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

menu.display();
// contact.display();