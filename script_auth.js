document.getElementById('agree').addEventListener('change', function() {
    var registerBtn = document.getElementById('registerBtn');
    if (this.checked) {
        registerBtn.removeAttribute('disabled');
        registerBtn.classList.add('active');
    } else {
        registerBtn.setAttribute('disabled', true);
        registerBtn.classList.remove('active');
    }
});