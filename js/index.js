document.onkeydown = function(e){
  if (e.keyCode == 32) e.preventDefault();
};

// Dropdown-Header
document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.header-bottom__item').forEach(function (drD) {
    drD.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.header-bottom__dropdown-block').forEach(function (drClosed) {
        drClosed.classList.remove('dropdown__block-active');
      });
      document.querySelector(`.header-bottom__dropdown-block[data-target="${path}"]`).classList.add('dropdown__block-active');

      document.querySelectorAll('.header-bottom__dropdown-arrow').forEach(function (drClosed1) {
        drClosed1.classList.remove('header-bottom__dropdown-arrow-active');
      });
      document.querySelector(`.header-bottom__dropdown-arrow[data-target="${path}"]`).classList.add('header-bottom__dropdown-arrow-active');

    });
  });
});

const drop = document.querySelectorAll('.header-bottom__dropdown-block')

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('header-bottom__dropdown-block') && !e.target.classList.contains('header-bottom__dropdown')) {
    drop.forEach(el => { el.classList.remove(('dropdown__block-active')) })
  }
});

const drop1 = document.querySelectorAll('.header-bottom__dropdown-arrow')

document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('header-bottom__dropdown-arrow') && !e.target.classList.contains('header-bottom__dropdown')) {
    drop1.forEach(el => { el.classList.remove(('header-bottom__dropdown-arrow-active')) })
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
});


// Hero
var mySwiper = new Swiper('.hero-swiper', {
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
      document.querySelector(`.catalog-flag__btn[data-path="${path}"]`).classList.add('catalog-flag__btn-active');

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
      spaceBetween: 60,
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

document.querySelector('.events__all').addEventListener('click', (e) => {
  document.querySelectorAll('.events__item').forEach(el => { el.classList.add('events__item-active') });
  e.currentTarget.style.display = 'none';
});

// Издания

const slider2 = document.querySelector('.publications-right');

let mySwiper2;

function desktopSlider() {
  if (window.innerWidth >= 650 && slider2.dataset.desktop == 'false') {
    mySwiper2 = new Swiper(slider2, {
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

      breakpoints: {
        1100: {
          slidesPerView: 3.05,
          slidesPerGroup: 2,
          spaceBetween: 50,
        },
        883: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
        },
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 48,
        },
      },
    });

    slider2.dataset.desktop = 'true';
  }

  if (window.innerWidth < 650) {
    slider2.dataset.desktop = 'false';

    if (slider2.classList.contains('swiper-container-initialized')) {
      mySwiper2.destroy();
    }
  }
}

desktopSlider();

window.addEventListener('resize', () => {
  desktopSlider();
});



$(document).ready(function () {
  $('.publication-left__heading-top').click(function (event) {
    $('.publication-left__checkbox-label').toggleClass('publication-left__checkbox-label-block');
    $('.publication-left__arrow').toggleClass('publication-left__arrow-active');
    $('.publication-left__close').toggleClass('publication-left__close-block');
  }); 

  // Убирает все фильтра по нажатию крестика
  // $('.publication-left__close').click(function (event) {
  //   $('.publication-left__checkbox-label').removeClass('publication-left__checkbox-label-active');
  //   $('.publication-left__close').removeClass('publication-left__close-active');
  // });    
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.publication-left__checkbox-label').forEach(function (check) {
    check.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      
      document.querySelector(`.publication-left__checkbox-label[data-path="${path}"]`).classList.add('publication-left__checkbox-label-active');
      document.querySelector(`.publication-left__close[data-path="${path}"]`).classList.toggle('publication-left__close-active');
 
    });
  });

});


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.publication-left__close').forEach(function (checkClose) {
    checkClose.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      
      document.querySelector(`.publication-left__checkbox-label[data-path="${path}"]`).classList.remove('publication-left__checkbox-label-active');
      document.querySelector(`.publication-left__close[data-path="${path}"]`).classList.remove('publication-left__close-active');
 
    });
  });

});











