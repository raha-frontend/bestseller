// получает элементы счетчика количества
const counterBtnMinus = document.querySelector('.counter__minus');
const counterBtnPlus = document.querySelector('.counter__plus');
const counterField = document.querySelector('#quantity');

// получаем поле с памятью
const memoryField = document.querySelector('#memory');

// получаем элементы для вывода цен
const newPrice = document.querySelector('.new-price');
const oldPrice = document.querySelector('.old-price');

// событие минуса счетчика
counterBtnMinus.addEventListener('click', function () {
    // если больше чем 1
    if (counterField.value > 1) {
        // уменьшай и запиши в поле
        counterField.value = counterField.value - 1;

        // результат цены в виде числа
        const resultPrise = counterField.value * memoryField.value;

        // обновляю новую цену
        newPrice.textContent = `$ ${resultPrise}`;
        // обновляю старую цену
        oldPrice.textContent = `$ ${resultPrise * 1.2}`;
    }
})

// событие плюса счетчика
counterBtnPlus.addEventListener('click', function () {
    if (counterField.value < 5) {
        // увеличивай и запиши в поле
        counterField.value = Number(counterField.value) + 1;

        // результат цены в виде числа
        const resultPrise = counterField.value * memoryField.value;

        // обновляю новую цену
        newPrice.textContent = `$ ${resultPrise}`;
        // обновляю старую цену
        oldPrice.textContent = `$ ${resultPrise * 1.2}`;
    }
})

// событие изменения поля количества
counterField.addEventListener('change', function (event) {
    // получаем текущее количество из объекта события
    const count = event.target.value;

    // результат цены в виде числа
    const resultPrise = count * memoryField.value;

    // обновляю новую цену
    newPrice.textContent = `$ ${resultPrise}`;
    // обновляю старую цену
    oldPrice.textContent = `$ ${resultPrise * 1.2}`
})

// событие изменения поля с памятью
memoryField.addEventListener('change', function (event) {
    // результат цены в виде числа
    const resultPrise = event.target.value * counterField.value;

    // обновляю новую цену
    newPrice.textContent = `$ ${resultPrise}`;
    // обновляю старую цену
    oldPrice.textContent = `$ ${resultPrise * 1.2}`;
});

// слайдер
$(document).ready(function () {
    const sliderNextBtn = document.querySelector('.slider-next');
    const sliderPrevBtn = document.querySelector('.slider-previous');

    const slider = $('.js-slider').slick({
        arrows: false,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 5
                }
            }
        ]
    });

    sliderNextBtn.addEventListener('click', function () {
        slider.slick('slickNext');
    });

    sliderPrevBtn.addEventListener('click', function () {
        slider.slick('slickPrev');
    });
});
