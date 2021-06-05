document.onkeydown = function (e) {
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
    $('.header-top').removeClass('header-top-burger');
  });
  $('.header-top__magnifier-svg').click(function (event) {
    $('.header-top').addClass('header-top-magnifier');
  });
  $('.hero-section').click(function (event) {
    $('.header-top').removeClass('header-top-magnifier');
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

var mySwiper4 = new Swiper('.gallery-right__swiper', {
  preloadImages: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerColumn: 1,
  spaceBetween: 0,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: true,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
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
    300: {
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

$('.accordion__item-btn').click(() => {
  $('html, body').animate({
    scrollTop: $('.info-content-active').offset().top
  }, 200);
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
          slidesPerView: 3,
          slidesPerGroup: 2,
          spaceBetween: 52,
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
    $('.publication-left__heading-top').toggleClass('publication-left__heading-top-active');
    $('.publication-left__close').toggleClass('publication-left__close-block');
  });
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

let uncheck = document.querySelectorAll('.publication-left__close');

uncheck.forEach(function (button) {
  button.addEventListener('click', function () {
    let cch = this.closest('.checkbox-item').querySelectorAll('.check');
    cch.forEach(cb => cb.checked = false);
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

// Проекты

var mySwiper3 = new Swiper('.projects-swiper', {
  preloadImages: true,
  navigation: {
    prevEl: '.partner-ctrl-prev',
    nextEl: '.partner-ctrl-next',
  },
  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: false,
  },
  watchOverflow: true,

  breakpoints: {
    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    650: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 32,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 5,
    },
  },
});

// MAP
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map1", {
    // center: [55.7622, 37.6463],
    center: [55.7584680, 37.6010884],
    zoom: 14.4,
    controls: []
  });
  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/Contacts/marker.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-3, -42]
  });

  myMap.geoObjects.add(myPlacemark);
}


// Подгрузка изображений

document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < (window.innerHeight + scrollTop)) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

// Отправка формы
"use strict"
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    
    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_sending');
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok){
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_sending');
      } else {
        alert("Ошибка!!!");
        form.classList.remove('_sending');
      }
    } else {
        alert('Заполните обязательные поля корректно, чтобы мы смогли дозвониться');
    }

  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_tel')){
        if (telTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }
    function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
    }
    function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
    }
    function telTest(input) {
      return !/^\d[\d\(\)\ -]{4,14}\d$/.test(input.value);
    }
});









