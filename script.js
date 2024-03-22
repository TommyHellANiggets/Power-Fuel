function clearInputField() {
    document.getElementById('inputField').value = '';
    document.getElementById('inputField').focus();
    toggleClearButton();
}

function toggleClearButton() {
    var inputField = document.getElementById('inputField');
    var clearIcon = document.querySelector('.clear-icon');
    if (inputField.value.length > 0) {
        clearIcon.style.display = 'block';
    } else {
        clearIcon.style.display = 'none';
    }
}
