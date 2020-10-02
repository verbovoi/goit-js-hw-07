const inputEl = document.querySelector('#controls input');
const createBtnEL = document.querySelector('button[data-action="render"]');
const destroyBtnEL = document.querySelector('button[data-action="destroy"]')
const boxEl = document.querySelector('#boxes');


const createBoxes = function (amount) {
    const arrayBoxes = [];
    amount = Number(inputEl.value);
    let boxSizes = 30;

    for (let i = 1; i <= amount; i++) {
        const newBoxEl = document.createElement('div');
        newBoxEl.style.width = `${boxSizes}px`;
        newBoxEl.style.height = `${boxSizes}px`;
        newBoxEl.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
        boxSizes += 10;
        arrayBoxes.push(newBoxEl);
    }
    boxEl.append(...arrayBoxes);
}

const destroyBoxes = function () {
    boxEl.innerHTML = '';

}

createBtnEL.addEventListener('click', createBoxes);
destroyBtnEL.addEventListener('click', destroyBoxes);