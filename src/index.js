import _, { head } from 'lodash'
import { menu } from './menu'
import { home } from './home'
import { contact } from './contact'



const div = document.querySelector('#content');
const lineBreak = document.createElement('br');



const pageHead = (()=> {
    let headDiv = document.createElement('div');
    div.appendChild(headDiv);
    headDiv.classList.add('head');
    headDiv.textContent = 'Yummy Yummy Tasty Favorite BBQ Restaurant';
    
    headDiv.appendChild(lineBreak);
    
    
    const homeButton = document.createElement('button');
    headDiv.appendChild(homeButton);
    homeButton.textContent = 'Home'
    const menuButton = document.createElement('button');
    headDiv.appendChild(menuButton);
    menuButton.textContent = 'Menu';
    const contactButton = document.createElement('button');
    headDiv.appendChild(contactButton);
    contactButton.textContent = 'Contact';
    

    const buttons = (button, page) => {
        button.addEventListener('click', () => {
            div.removeChild(div.lastElementChild);
            page();
        });
    };
    buttons(contactButton, contact);
    buttons(menuButton, menu);
    buttons(homeButton, home);
    
})();

window.onload = contact();


