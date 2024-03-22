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

// Найти все карточки
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    const quantityInput = card.querySelector('.quantity-input');
    const addToCartBtn = card.querySelector('.add-to-cart-btn');

    // Обработчик события для кнопки "Добавить в корзину"
    addToCartBtn.addEventListener('click', () => {
        const productName = card.querySelector('.card-title').innerText;
        const quantity = parseInt(quantityInput.value); // Получаем количество товаров

        // Добавить логику для добавления товара в корзину
        addToCart(productName, quantity);
    });
});

const commentContainer = document.querySelector('.comment-container');

function addComment(commentText) {
    const comment = document.createElement('div');
    comment.classList.add('comment');
    comment.textContent = commentText;
    commentContainer.appendChild(comment);

    // Удаляем самый старый комментарий, если превышено максимальное количество
    if (commentContainer.children.length > 3) {
        commentContainer.removeChild(commentContainer.children[0]);
    }
}

// Добавляем комментарии
addComment('Новый комментарий 1');
addComment('Новый комментарий 2');
addComment('Новый комментарий 3');
