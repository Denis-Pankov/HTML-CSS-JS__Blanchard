// Dropdown-Header
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.header-bottom__item').forEach(function (drD) {
    drD.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.header-bottom__dropdown-block').forEach(function (drClosed) {
        drClosed.classList.remove('dropdown__block-active');
      });
      document.querySelector(`.header-bottom__dropdown-block[data-target="${path}"]`).classList.add('dropdown__block-active');

      document.querySelectorAll('.header-bottom__dropdown-arrow').forEach(function (drClosed) {
        drClosed.classList.remove('is-active');
      });
      document.querySelector(`.header-bottom__dropdown-arrow[data-target="${path}"]`).classList.add('is-active');

    });
  });
});

const drop = document.querySelectorAll('.header-bottom__dropdown-block')

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('header-bottom__dropdown-block') && !e.target.classList.contains('header-bottom__dropdown')) {
    drop.forEach(el => { el.classList.remove(('dropdown__block-active')) })
  }
});

$(document).ready(function () {
  $('.header-burger').click(function (event) {
    $('.header-top').toggleClass('header-top-burger');
  });
  $('.header-menu__dropdown').click(function (event) {
    $('header-top').removeClass('header-top-burger');
  });
  $('.header-top__magnifier-svg').click(function (event) {
    $('.header-top').toggleClass('header-top-magnifier');
  });
  $('.header-top__magnifier-closed').click(function (event) {
    $('.header-top').removeClass('header-top-magnifier');
  });
  $('.gallery__image').click(function (event) {
    $('.overlay').toggleClass('overlay-active');
  });
  $('.modal-content__closed').click(function (event) {
    $('.overlay').removeClass('overlay-active');
  });
  $('.overlay').click(function (event) {
    $('.overlay').removeClass('overlay-active');
  });
  $('.events__all').click(function (event) {
    $('.events__item-hidden').toggleClass('events__item-active');
    $('.events__item-hidden800').toggleClass('events__item-active');
  });
});


// Hero
var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 30000,
  },
});

// Gallery 
const element = document.querySelector('#selectFilter');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  itemSelectText: '',
});

var mySwiper = new Swiper('.gallery-right__swiper', {
  preloadImages: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: false,
  },
  watchOverflow: true,
  slidesPerColumnFill: 'row',

  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
    },
    500: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      spaceBetween: 32,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      spaceBetween: 0,
    },
  },
});

// Modal
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.gallery__image').forEach(function (modal) {
    modal.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelector(`.gallery__modal[data-target="${path}"]`).classList.add('gallery__modal-active');
    });
  });

  document.querySelectorAll('.modal-content__closed').forEach(function (modal) {
    modal.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.gallery__modal').forEach(function (modalClosed) {
        modalClosed.classList.remove('gallery__modal-active');
      });
    });
  });

  document.querySelectorAll('.overlay').forEach(function (modalBg) {
    modalBg.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.gallery__modal').forEach(function (modalClosedBg) {
        modalClosedBg.classList.remove('gallery__modal-active');
      });

    });
  });

});

//Аккордеон
$(function () {
  $("#accordion").accordion({
    collapsible: true,
    heightStyle: "content",
  });
});

//Табы
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog-flag__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog-flag__btn').forEach(function (workStep) {
        workStep.classList.remove('catalog-flag__btn-active');
      });
      document.querySelector(`[data-path="${path}"]`).classList.add('catalog-flag__btn-active');

      document.querySelectorAll('.catalog__paragraph').forEach(function (tabContent) {
        tabContent.classList.remove('catalog__paragraph-active');
      });
      document.querySelector(`.catalog__paragraph[data-target="${path}"]`).classList.add('catalog__paragraph-active');

      document.querySelectorAll('.accordion__list').forEach(function (accordList) {
        accordList.classList.remove('accordion__list-active');
      });

      document.querySelectorAll(`.accordion__list[data-target="${path}"]`).forEach(el => {
        el.classList.add('accordion__list-active');
      });

    });
  });

  document.querySelectorAll('.accordion__item-btn').forEach(function (tabsCont) {
    tabsCont.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.accordion__item-btn').forEach(function (workStep) {
        workStep.classList.remove('accordion__item-btn-active');
      });
      document.querySelector(`.accordion__item-btn[data-path="${path}"]`).classList.add('accordion__item-btn-active');

      document.querySelectorAll('.info-content').forEach(function (autContent) {
        autContent.classList.remove('info-content-active');
      });
      document.querySelector(`.info-content[data-target="${path}"]`).classList.add('info-content-active');

    });
  });
});

// События
const slider = document.querySelector('.events-container');

let mySwiper1;

function mobileSlider() {
  if (window.innerWidth <= 700 && slider.dataset.mobile == 'false') {
    mySwiper1 = new Swiper(slider, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      spaceBetween: 0,
      slideClass: 'events__item',
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 700) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper1.destroy();
    }
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});










