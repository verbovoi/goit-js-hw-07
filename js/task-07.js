const inputEl = document.querySelector('#font-size-control');
const outputTextEl = document.querySelector('#text');

const changeFontSize = function (event) {
    outputTextEl.setAttribute('style', `font-size: ${event.target.value}px`);
}

inputEl.addEventListener('input', changeFontSize);