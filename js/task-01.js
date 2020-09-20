const itemsEl = document.querySelectorAll('.item');

console.log(itemsEl);
console.log(`В списке ${itemsEl.length} категории.`);

function information() {
    const nameCategory = document.querySelector('.item h2');
    const qualityItems = document.querySelectorAll('.item  li');
    console.log(`Категория: ${nameCategory.textContent}`);
    console.log(`Количество Элементов: ${qualityItems.length}`);
};

itemsEl.forEach(information);