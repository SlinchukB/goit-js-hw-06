const refs = {
    InputText: document.querySelector('#name-input'),
    OutputText: document.querySelector('#name-output'),
}
refs.InputText.addEventListener('input', event => {
    if (refs.InputText.value === '') 
        return refs.OutputText.textContent = 'Anonymous'
    
    else {
        refs.OutputText.textContent = event.currentTarget.value;
}
});
