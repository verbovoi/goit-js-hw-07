const itemsEl = document.querySelectorAll('.item');

// console.log(itemsEl);
console.log(`В списке ${itemsEl.length} категории.`);

const info = array => {
  array.forEach(element => {
    const title = element.querySelector('.item h2');
    const qualityItems = element.querySelectorAll('.item li');

    console.log(
      `Категория: ${title.textContent}\n Количество элементов: ${qualityItems.length}`,
    );
  });
};

info(itemsEl);
