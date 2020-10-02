const currentValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

// let counterValue = Number(currentValue.textContent); --- эта строка на случай если значение в html не равно нулю. Value будет браться из html 

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    currentValue.textContent = counterValue -= 1;
});

incrementBtn.addEventListener('click', () => {
    currentValue.textContent = counterValue += 1;
});