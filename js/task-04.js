const currentValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = Number(currentValue.textContent);

decrementBtn.addEventListener('click', () => {
    currentValue.textContent = counterValue -= 1;
});

incrementBtn.addEventListener('click', () => {
    currentValue.textContent = counterValue += 1;
});