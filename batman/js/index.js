const swiper = new Swiper('.main-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,

    navigation: {
      nextEl: '.main-slider_arrow',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    }
  });

let burger = document.querySelector('.menu_burger');
let closer = document.querySelector('.header_menu-close');
let header_menu_mobile = document.querySelector('.header');

burger.addEventListener('click', function() {
    header_menu_mobile.style.display = 'block';
})

closer.addEventListener('click', function() {
    header_menu_mobile.style.display = 'none';
})

const modalWindow = document.querySelector('.modal');
const btnModal = document.querySelector('.main_play_button');

btnModal.addEventListener('click', function() {
    modalWindow.classList.add('active');
})

modalWindow.addEventListener('click', (e) => {
    const toClose = e.target.closest('.modal_inner');
    if(!toClose) {
        modalWindow.classList.remove('active');
    }
})