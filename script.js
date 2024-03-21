// Функция для добавления карточек в контейнер
function populateCards() {
    const cardsContainer = document.getElementById("cardsContainer");
    cardsContainer.innerHTML = ""; // Очистить контейнер перед добавлением новых карточек

    const cardData = [
        {imageUrl: "https://www.theihcc.com/wp-content/uploads/2019/12/buy-Trenbolone-Acetate-Injection-1-682x682-1-2048x2048.jpg", title: "Тренболон", description: "Описание карточки 1", url: "url-карточки-1.html"},
        {imageUrl: "https://s9.profarm4.top/uploads/store/product/9e6d0ab3884623d89541ede7d2e1e8b0.jpg", title: "Местеролон", description: "Описание карточки 1", url: "url-карточки-1.html"},
        {imageUrl: "https://fitherb.ru/uploads/product/1400/1494/core-labs-x-tren-plus-rx-60-caps_2020-05-24_13-45-39.JPG", title: "Трендион", description: "Описание карточки 1", url: "url-карточки-1.html"},
        {imageUrl: "http://under-fit.ru/thumb/2/EzHNVL1JezPCV8M8FCMggQ/1600r1600/d/851868364_w640_h640_nordex-somatropin-100ed.jpg", title: "Гормон роста", description: "Описание карточки 1", url: "url-карточки-1.html"},
        {imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81hB6eSoDJL._AC_SL1500_.jpg", title: "Протеин", description: "Описание карточки 1", url: "url-карточки-1.html"},
        {imageUrl: "https://smolensk.2scoop.ru/upload/iblock/eb2/eb2b523d88e43835a8101e2fbfc97d92.jpg", title: "Креатин", description: "Описание карточки 1", url: "url-карточки-1.html"},
        {imageUrl: "https://main-cdn.sbermegamarket.ru/hlr-system/1509934/100023624411b0.jpg", title: "Гейнер", description: "Описание карточки 1", url: "url-карточки-1.html"},
        {imageUrl: "https://fitmag.ru/images/15066vgchg.jpg", title: "BCAA", description: "Описание карточки 1", url: "url-карточки-1.html"},
        
        
        // Добавьте данные для других карточек здесь
    ];

    cardData.forEach(card => {
        const cardElement = document.createElement("a");    
        cardElement.href = card.url;
        cardElement.classList.add("card", "card-link");
        cardElement.style.textDecoration = "none";
        cardElement.style.color = "inherit";

        cardElement.innerHTML = `
            <img src="${card.imageUrl}" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.description}</p>
                <p class="card-link" style="color: #007bff;">Подробнее</p>
            </div>
        `;

        cardsContainer.appendChild(cardElement);
    });
}

// Вызовите функцию для начальной загрузки карточек
populateCards();

// Функция для обновления расположения карточек при изменении размера окна
window.addEventListener("resize", function() {
    populateCards();
});
