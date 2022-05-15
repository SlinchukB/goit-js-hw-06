const refs = {
    inputForm: document.querySelector("#validation-input"),
    inputLength: document.querySelector('input[data-length]'),
};

refs.inputForm.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === Number(refs.inputForm.dataset.length)) {
        refs.inputForm.classList.remove("invalid");
        refs.inputForm.classList.add("valid");
    }
    else {
        refs.inputForm.classList.add("invalid");
    }
});
