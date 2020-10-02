const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const addItem = array => {
    const arrItems = [];
    const listEl = document.querySelector('#ingredients');

    array.forEach(element => {
        const itemEl = document.createElement('li');

        itemEl.textContent = element;
        arrItems.push(itemEl);
    });

    listEl.append(...arrItems);

}

addItem(ingredients);