
const menu = () => {
    let menuDiv = document.createElement('div');
    document.querySelector('#content').appendChild(menuDiv);
    menuDiv.classList.add('menu');
    
    
    // let menuLibrary = [];
    const itemFactory = (name, cost, image, description) => {
        return {name, cost, image, description};
    };

    let item1 = itemFactory('Pulled Pork', '$12', 'https://embed.widencdn.net/img/mccormick/on5pdjurut/2039x1147px/slow_cooker_bbq_pulled_pork_8159.jpg?crop=true&anchor=7,209&q=80&color=ffffffff&u=o2hyef', 
    'Our original menu item. Made with 11% REAL pork!');
    
    function render(item)  {
        let newDiv = document.createElement('div');
        newDiv.classList.add('menu-item');
        menuDiv.appendChild(newDiv);
        const createP = (input) => {
            let newP = document.createElement('p');
            newDiv.appendChild(newP);
            newP.textContent = input;
        };
        newDiv.style.backgroundImage = item.image;
        createP(`${item.name}`);
        createP(`${item.cost}`)
        createP(`${item.description}`)
    };
    
    
   
    render(item1);

};

export { menu }