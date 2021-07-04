import Location from './img/loc.png';

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
        locationImg.src = Location;
        containerDiv.appendChild(locationImg);
        return containerDiv;
    }

    function display(){
        document.querySelector('#content').appendChild(_createContact());
        document.querySelector('#contact-btn').classList.add('active');
    }

    return { display };
})();

export default contact;