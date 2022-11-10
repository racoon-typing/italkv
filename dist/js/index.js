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


// Автоподстановка
var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina"];

// // Калькулятор
const carClass = {
    class : [
        {
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
        },
        {
            id: 2,
            arr : [
                'Audi 80', 
                'Audi TT', 
                'Audi A4',
                'BMW 3',
                'Brilliance H230',
                'Chery Very',
                'Chevrolet Aveo', 
                'Chevrolet Cruse', 
                'Chevrolet Lacetti', 
                'Niva 3дв',
                'Citroen C-Elysee', 
                'Citroen C3', 
                'Citroen C4', 
                'Citroen Picasso',
                'Daewoo Gentra', 
                'Daewoo Nexia', 
                'Daewoo Lanos', 
                'Datsun on-DO', 
                'Dongfeng S30', 
                'Dongfeng H30', 
                'FAW V5', 
                'FIAT Punto', 
                'Ford Fiesta', 
                'Ford Focus', 
                'Ford Fusion', 
                'Geely MK', 
                'Geely GC6', 
                'Honda Civic', 
                'Hyundai Accent', 
                'Hyundai i30', 
                'Hyundai Elantra', 
                'Hyundai Solaris', 
                'Kia Ceed', 
                'Kia Cerato', 
                'Kia Rio', 
                'Lexus CT', 
                'Lifan Smily', 
                'Lifan Solano', 
                'Mazda 3', 
                'Mitsubishi Lancer', 
                'Mercedes CLA', 
                'Mercedes GLA',
                'MINI',
                'Волга', 
                'Citroen C5', 
                'Skoda Rapid', 
                'Citroen Berlingo', 
                'Mitsubishi Carisma', 
                'Nissan Almera', 
                'Nissan Tiida', 
                'Nissan Note', 
                'Nissan Sentra', 
                'Renault Megane', 
                'Toyota Corolla', 
                'Lada Granta', 
                'Lada Priora',
                'Volkswagen Polo', 
                'Volkswagen Golf',
                'Volkswagen Juke', 
                'Volkswagen Jetta', 
                'Volvo V40', 
                'Peugeot 206',
                'Peugeot 208',
                'Peugeot 301',
                'Peugeot 307',
                'Peugeot 308', 
                'Mercedes A', 
                'Mercedes B',
                'Mercedes C'
            ]
        },
        {
            id: 3,
            arr : [
                'Acura TLX', 
                'Alfa Romeo Giulietta', 
                'Audi 100', 
                'Audi A5', 
                'Audi A6', 
                'Audi A7', 
                'Audi Q3', 
                'Audi Q5', 
                'BMW 4', 
                'BMW 5', 
                'BMW 6', 
                'BMW X1',
                'BMW X2', 
                'BMW X3', 
                'BMW X4', 
                'Нива 5 дв.', 
                'Brilliance H530', 
                'Brilliance V5', 
                'Cadillac ATS', 
                'Cadillac CTS', 
                'Chery M11',
                'Chery Tiggo', 
                'Chevrolet Captiva', 
                'Chevrolet Orlando', 
                'FAW Oley', 
                'FAW B50', 
                'Ford Ecosport', 
                'Ford Kuga', 
                'Ford Mondeo', 
                'Ford S-MAX', 
                'Ford C-MAX', 
                'Ford Maverick', 
                'Geely MK Cross', 
                'Geely Emgrand', 
                'Great Wall Hover M4', 
                'Honda Accord', 
                'Honda CR-V', 
                'Honda HR-V', 
                'Hyundai Sonata', 
                'Hyundai Tucson', 
                'Hyundai i40', 
                'Hyundai ix35', 
                'Infiniti Q(G)', 
                'Infiniti M', 
                'Infiniti QX50', 
                'JEEP Renegade', 
                'JEEP Compass', 
                'Kia Sportage', 
                'Kia Soul', 
                'Kia Optima', 
                'Land Rover Freelander', 
                'Land Rover Evoque', 
                'Lexus ES',
                'Lexus GS',
                'Lexus IS',
                'Lexus NX',
                'Lexus RC', 
                'Lifan X50', 
                'Lifan X60', Cebrium; Mazda 5, 6, 626, CX-5; Mercedes E/GLK/SLK/GT; Mitsubishi ASX, Outlander; Nissan Murano, GT-R, X-Trail., Qashgai, Teana; Opel Antara, Insignia, Mokka, Meriva, Zafira; Peugeot 2008/3008/4008/406/408/508; Porsche Boxster, Cayman, Carrera 911, Macan; Renault Fluence, Duster, Koleos, Sandero, Kangoo; SAAB 9-3, 9-5, 9-7; Skoda Octavia, Superb, Yeti; Ssang Yong Kyron, Actyon, Rexton, Stavic; Subaru Impreza, Outback, Legacy, Forester, WRX; Suzuki Vitara, Grand Vitara, Samurai; Toyota Camry, Prius, RAV 4, Venza, Verso; Volkswagen Passat, Tiguan, Touran, Caddy, Scirocco, Sharan; Volvo  850, 940, 960, S60, S80, XC 60, XC70, V60; Lada Largus; Niva.
            ]
        }
    ]
}

function autocomplete(inp, arr) {
    /* функция автозаполнения принимает два аргумента,
    элемент текстового поля и массив возможных значений автозаполнения: */
    var currentFocus;
    /* выполнение функции, когда кто-то пишет в текстовом поле: */
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /* закрыть все уже открытые списки значений автозаполнения */
        console.log(val);
        // console.log(a);

        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /* создайте элемент DIV, который будет содержать элементы (значения): */
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "calculator-list");
        a.setAttribute("class", "calculator-items");
        /* добавьте элемент DIV в качестве дочернего элемента контейнера автозаполнения: */
        this.parentNode.appendChild(a);
        /* для каждого элемента в массиве... */
        for (i = 0; i < arr.length; i++) {
            /* проверьте, начинается ли элемент с тех же букв, что и значение текстового поля: */
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /* создайте элемент DIV для каждого соответствующего элемента: */
                b = document.createElement("DIV");
                /* сделайте соответствующие буквы жирным шрифтом: */
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /* вставьте поле ввода, которое будет содержать значение текущего элемента массива: */
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /* выполнение функции, когда кто-то нажимает на значение элемента (элемент DIV): */
                b.addEventListener("click", function (e) {
                    /* вставьте значение для текстового поля автозаполнения: */
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /* закройте список значений автозаполнения,
                    (или любые другие открытые списки значений автозаполнения : */
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /* выполнение функции нажимает клавишу на клавиатуре: */
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "calculator-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /* Если нажата клавиша со стрелкой вниз,
            увеличение текущей переменной фокуса: */
            currentFocus++;
            /* и сделать текущий элемент более видимым: */
            addActive(x);
        } else if (e.keyCode == 38) { //вверх
            /* Если нажата клавиша со стрелкой вверх,
            уменьшите текущую переменную фокуса: */
            currentFocus--;
            /* и сделать текущий элемент более видимым: */
            addActive(x);
        } else if (e.keyCode == 13) {
            /* Если нажата клавиша ENTER, предотвратите отправку формы, */
            e.preventDefault();
            if (currentFocus > -1) {
                /* и имитировать щелчок по элементу "active": */
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /* функция для классификации элемента как "active": */
        if (!x) return false;
        /* начните с удаления "активного" класса для всех элементов: */
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*добавить класса "autocomplete-active": */
        x[currentFocus].classList.add("calculator-active");
    }
    function removeActive(x) {
        /* функция для удаления "активного" класса из всех элементов автозаполнения: */
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("calculator-active");
        }
    }
    function closeAllLists(elmnt) {
        /* закройте все списки автозаполнения в документе,
        кроме того, который был передан в качестве аргумента: */
        var x = document.getElementsByClassName("calculator-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /* выполнение функции, когда кто-то щелкает в документе: */
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

autocomplete(document.getElementById("myInput"), countries);


// Подсчет стоимости
let calculateButtonNode = document.querySelector('.calculator__autocomplete-button');
let calculateInputNode = document.querySelector('.calculator__autocomplete-input');

calculateButtonNode.addEventListener('click', calculatePrice)

function calculatePrice() {
    let carValue = calculateInputNode.value;
    let errorMessage = document.querySelector('.calculator__form-error');
    let priceMessagr = document.querySelector('.calculator__form-price');
    // console.log(carValue);

    if (carValue === '') {
        // Вывести ошибку
        errorMessage.style.display = 'block';
    } 
    // else if (countries.contains(carValue)) {
    //     // Выводит цену
    //     errorMessage.style.display = 'none';
    //     priceMessagr.style.display = 'block';
    // }

    if (countries.includes(`${carValue}`)) {
        priceMessagr.style.display = 'block';
        console.log(carValue);

    }
}

