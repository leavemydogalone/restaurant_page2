import _, { head } from 'lodash';
const div = document.querySelector('#content');
const lineBreak = document.createElement('br');

const pageHead = (()=> {
    let headDiv = document.createElement('div');
    div.appendChild(headDiv);
    headDiv.classList.add('head');
    headDiv.textContent = 'Yummy Yummy Tasty Favorite BBQ Restaurant';
    const homeButton = document.createElement('button');
    headDiv.appendChild(lineBreak);
    headDiv.appendChild(homeButton);
    homeButton.textContent = 'Home'
    const menuButton = document.createElement('button');
    headDiv.appendChild(menuButton);
    menuButton.textContent = 'Menu';
    const contactButton = document.createElement('button');
    headDiv.appendChild(contactButton);
    contactButton.textContent = 'Contact';
    homeButton.addEventListener('click', () => {
        div.removeChild(div.lastElementChild);
        
        // home();
    });
})();

window.onload = home();
function home() {
    let mainDiv = document.createElement('div');
    div.appendChild(mainDiv);
    mainDiv.classList.add('main');
    mainDiv.appendChild(document.createElement('p')).textContent = 
    'Your neighborhood\'s yummiest BBQ spot, since 1765.';
    mainDiv.appendChild(document.createElement('p')).textContent = 
    'Established by George Washington, America\'s first president and BBQ chef.';
    const meatImage = document.createElement('img');
    meatImage.src = 'https://pbs.twimg.com/media/BjQ7QJICcAAG0GB.jpg';
    mainDiv.appendChild(meatImage);

};
