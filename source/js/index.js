let buttonNav = document.querySelector('.main-header__button-nav');
let navNode = document.querySelector('.main-header__nav');
let menuItemNode = document.querySelectorAll('.main-header__item-text');

if (buttonNav) {
    buttonNav.addEventListener('click', function () {
        navNode.classList.toggle('main-header__nav--close');
        navNode.classList.toggle('main-header__nav--open');

        if (navNode.classList.contains('main-header__nav--open')) {
            buttonNav.classList.remove('main-header__button-nav');
            buttonNav.classList.add('main-header__button-nav--cross');
            buttonNav.style.zIndex = "2";
        } else {
            buttonNav.classList.add('main-header__button-nav');
            buttonNav.classList.remove('main-header__button-nav--cross');
        }
    });
}

if (menuItemNode) {
    for (let i = 0; i < menuItemNode.length; i++) {
        menuItemNode[i].addEventListener('click', function () {
            navNode.classList.remove('main-header__nav--open');
            navNode.classList.add('main-header__nav--close');
            buttonNav.classList.remove('main-header__button-nav--cross');
            buttonNav.classList.add('main-header__button-nav');
        }) 
    }
}

// Инициализируем слайдер 
new Swiper('.image-slider', {
    // Стрелки
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    // Навигация
    // Булеты, текущее положение
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        clickable: true,
        // Динамические булеты
        dynamicBullets: true,
    },
    // Отступ между слайдами
    spaceBetween: 30,
});

// Галерея
$(".gallery__list").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
        enabled: true
    }
});


// Калькулятор
const carClass = {
    class1 : {
        id: 1,
        arr : [
            'Chevrolet Spark', 
            'Citroen C1',
            'Daewoo Matiz', 
            'Daewoo Tico',
            'FIAT 500',
            'Ford Ka',
            'Honda Jazz',
            'Hyundai Getz',
            'KIA Picanto', 
            'Mitsubishi i-MiEV',
            'Nissan Micra',
            'Peugeot 106',
            'Peugeot 107',
            'Renault Clio',
            'Renault Smart',
            'ВАЗ 2101',
            'ВАЗ 2102',
            'ВАЗ 2103',
            'ВАЗ 2104',
            'ВАЗ 2105',
            'ВАЗ 2106',
            'ВАЗ 2107',
            'ВАЗ 2108',
            'Ока',
            'Таврия',
            'Ауди A1', 
            'Ауди A3', 
            'BMW 1',
            'BMW 2', 
            'Opel Astra',
            'Renault Logan', 
            'SEAT Ibiza', 
            'SEAT Leon', 
            'Subaru Jimny', 
            'Subaru XV', 
            'Suzuki SX4', 
            'Toyota Auris', 
            'Volkswagen Beetle',
            'ВАЗ 2109',
            'ВАЗ 2110',
            'ВАЗ 2111',
            'ВАЗ 2112',
            'ВАЗ 2114',
            'ВАЗ 2115', 
            'Lada Kalina',
        ]
    }
}