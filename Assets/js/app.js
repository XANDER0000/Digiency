/* Mobile Nav*/

const navToggle = $("#navToggle");
const nav = $("#nav");

navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");

});

/* Mobile Nav  2*/

const navToggle2 = $("#navToggle_2");
const nav2 = $("#nav");

navToggle2.on("click", function(event) {
    event.preventDefault();

    nav2.toggleClass("show");

});

/* Smooth Scroll =========================*/

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html, body").animate ({
        scrollTop: elementOffset - 90
    }, 600);
});

/* Filter
========================================*/
let filter = $("[data-filter]");

filter.on("click", function(event) {
    event.preventDefault();

    let cat = $(this).data('filter');

    if(cat == 'all') {
        $("[data-cat]").removeClass('hide');
    } else {
        $("[data-cat]").each(function() {

            let workCat = $(this).data('cat');

            if(workCat != cat) {
                $(this).addClass('hide');
            } else {
                $(this).removeClass('hide');
            }
        });
    }

});

$(function() {
    /* Slider slick
    ========================================*/
    // slider photos and intro

    $("[data-slider]").slick ({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 2000,
      autoplay: false,
      fade: false,
      arrows: false,
      dots: true,
    });

});

/* SwitchMode
========================================*/
let changeThemeButtons = document.querySelectorAll('.switch');

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {
        let theme = this.dataset.theme;
        applyTheme(theme);
    });
});

function applyTheme(themeName) {
    document.querySelector('[title="theme"]').setAttribute('href', `Assets/css/theme-${themeName}.css`);
    changeThemeButtons.forEach(button => {
        button.style.display = 'block';
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme'); // Проверяем есть ли в LocalStorage записано значение для 'theme' и присваиваем его переменной.

if(activeTheme === null || activeTheme === 'light') { // Если значение не записано, или оно равно 'light' - применяем светлую тему
    applyTheme('light');
} else if (activeTheme === 'dark') { // Если значение равно 'dark' - применяем темную
    applyTheme('dark');
}