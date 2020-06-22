import _ from 'lodash';
const div = document.querySelector('#content');

const menuPage = (()=> {
    let headDiv = document.createElement('div');
    let mainDiv = document.createElement('div');
    div.appendChild(headDiv);
    div.appendChild(mainDiv);
    headDiv.classList.add('head');
    headDiv.textContent = 'Yummy Yummy Tasty Favorite BBQ Restaurant';
    headDiv.appendChild(document.createElement('p')).textContent = 'Phone: 555-5555  Email: YYTFBBQR';
    mainDiv.classList.add('main');
    mainDiv.textContent = 'here is the stuff';
})();

console.log('dog');