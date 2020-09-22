const inputEl = document.querySelector('#name-input');
const outputEL = document.querySelector('#name-output');

inputEl.addEventListener('input', onOutName);

function onOutName(event) {
    if (event.currentTarget.value !== ``) {
        outputEL.textContent = event.currentTarget.value;
    } else {
        outputEL.textContent = 'незнакомец';
    }
}