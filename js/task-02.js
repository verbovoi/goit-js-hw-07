const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const addItem = array => {
    array.forEach(element => {
        const listEl = document.querySelector('#ingredients');
        const itemEl = document.createElement('li');

        itemEl.textContent = element;
        console.log(itemEl);
        listEl.appendChild(itemEl);
    });
}

addItem(ingredients);