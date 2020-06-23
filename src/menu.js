
const menu = () => {
    let menuDiv = document.createElement('div');
    document.querySelector('#content').appendChild(menuDiv);
    menuDiv.classList.add('menu');
    
    const itemFactory = (name, cost, image, description) => {
        return {name, cost, image, description};
    };

    let item1 = itemFactory('Pulled Pork', '$12', 'https://embed.widencdn.net/img/mccormick/on5pdjurut/2039x1147px/slow_cooker_bbq_pulled_pork_8159.jpg?crop=true&anchor=7,209&q=80&color=ffffffff&u=o2hyef', 
    'Our original menu item. Made with 11% REAL pork!');
    let item2 = itemFactory('Pork Burger', '$15', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6713576.jpg',
     'Just what you think it is. Eat it.');
    let item3 = itemFactory('Pork Taco', '$4', 'https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550-500x500.jpg', 'Talk-o bout a good deal! (Tortilla $8 extra)');
    let menuLibrary = [item1, item2, item3];
    
    function render(item)  {
        let newDiv = document.createElement('div');
        newDiv.classList.add('menu-item');
        menuDiv.appendChild(newDiv);
        const createP = (input) => {
            let newP = document.createElement('p');
            newDiv.appendChild(newP);
            newP.textContent = input;
        };
        // newDiv.style.backgroundImage = item.image;
        createP(`${item.name}`);
        createP(`${item.cost}`)
        createP(`${item.description}`)
    };
    
    for (let i = 0; i < menuLibrary.length; i++) {
        render(menuLibrary[i]);
    };
    
   
};

export { menu }