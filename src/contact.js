const contact = () => {
const contactDiv = document.createElement('div');
contactDiv.classList.add('contact');
const content = document.querySelector('#content');
content.appendChild(contactDiv);

const createP = (text) => {
    contactDiv.appendChild(document.createElement('p')).textContent = text;
};
createP('Phone: (263)-555-4365af42');
createP('Email:Getyomeathere@meat.meat');
createP('Hours of Operation: Mon-Sun 1am-3am');

// const george = document.createElement('img');
// george.src = ''
};

export { contact }