const inputEl = document.querySelector('#validation-input');

console.log(inputEl);


const validation = function (event) {
    const inputValue = event.target.value.length;

    if (inputValue !== Number(this.dataset.length)) {
        return this.classList.contains('valid') ? this.classList.replace('valid', 'invalid') :
            this.classList.add('invalid');

    } else {
        return this.classList.contains('invalid') ? this.classList.replace('invalid', 'valid') :
            this.classList.add('valid');
    }

};


inputEl.addEventListener('change', validation);