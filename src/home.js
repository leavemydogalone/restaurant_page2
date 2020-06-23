function home() {
    let mainDiv = document.createElement('div');
    document.querySelector('#content').appendChild(mainDiv);
    mainDiv.classList.add('main');
    mainDiv.appendChild(document.createElement('p')).textContent = 
    'Your neighborhood\'s yummiest BBQ spot, since 1765.';
    mainDiv.appendChild(document.createElement('p')).textContent = 
    'Established by George Washington, America\'s first president and BBQ chef.';
    const meatImage = document.createElement('img');
    meatImage.src = 'https://pbs.twimg.com/media/BjQ7QJICcAAG0GB.jpg';
    mainDiv.appendChild(meatImage);

};

export { home }