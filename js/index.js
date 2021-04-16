$(document).ready(function () {
    $('.dropdown__item-a').click(function (event) {
        $('.dropdown__block-a,.dropdown__span-a').toggleClass('is-active');
    });
    $('.dropdown__item-a').click(function (event) {
        $('.dropdown__block-b,.dropdown__span-b,.dropdown__block-c,.dropdown__span-c,.dropdown__block-d,.dropdown__span-d,.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function (event) {
        $('.dropdown__block-a,.dropdown__span-a').removeClass('is-active');
    });
    $('.dropdown__item-b').click(function (event) {
        $('.dropdown__block-b,.dropdown__span-b').toggleClass('is-active');
    });
    $('.dropdown__item-b').click(function (event) {
        $('.dropdown__block-a,.dropdown__span-a,.dropdown__block-c,.dropdown__span-c,.dropdown__block-d,.dropdown__span-d,.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function (event) {
        $('.dropdown__block-b,.dropdown__span-b').removeClass('is-active');
    });
    $('.dropdown__item-c').click(function (event) {
        $('.dropdown__block-c,.dropdown__span-c').toggleClass('is-active');
    });
    $('.dropdown__item-c').click(function (event) {
        $('.dropdown__block-a,.dropdown__span-a,.dropdown__block-b,.dropdown__span-b,.dropdown__block-d,.dropdown__span-d,.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function (event) {
        $('.dropdown__block-c,.dropdown__span-c').removeClass('is-active');
    });
    $('.dropdown__item-d').click(function (event) {
        $('.dropdown__block-d,.dropdown__span-d').toggleClass('is-active');
    });
    $('.dropdown__item-d').click(function (event) {
        $('.dropdown__block-a,.dropdown__span-a,.dropdown__block-b,.dropdown__span-b,.dropdown__block-c,.dropdown__span-c,.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function (event) {
        $('.dropdown__block-d,.dropdown__span-d').removeClass('is-active');
    });
    $('.dropdown__item-e').click(function (event) {
        $('.dropdown__block-e,.dropdown__span-e').toggleClass('is-active');
    });
    $('.dropdown__item-e').click(function (event) {
        $('.dropdown__block-a,.dropdown__span-a,.dropdown__block-b,.dropdown__span-b,.dropdown__block-c,.dropdown__span-c,.dropdown__block-d,.dropdown__span-d').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function (event) {
        $('.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-burger').click(function (event) {
        $('.header-menu__dropdown,.header-burger,.header-burger:before,.header-burger__span,.header-burger:after').toggleClass('active');
    });
    $('.header-menu__dropdown').click(function (event) {
        $('.header-menu__dropdown,.header-burger,.header-burger:before,.header-burger__span,.header-burger:after').removeClass('active');
    });
    $('.header-top__magnifier-svg').click(function (event) {
        $('.header-top,.header-top__magnifier-input,.header-top__magnifier-closed,.header-burger,.header-top__logo,.header-top__magnifier').toggleClass('is-active');
    });
    $('.header-top__magnifier-closed').click(function (event) {
        $('.header-top,.header-top__magnifier-input,.header-top__magnifier-closed,.header-burger,.header-top__logo,.header-top__magnifier').removeClass('is-active');
    });
    $('.slide-01').click(function (event) {
        $('.gallery__modal-01').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-01').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-01').removeClass('active');
    });
    $('.slide-02').click(function (event) {
        $('.gallery__modal-02').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-02').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-02').removeClass('active');
    });
    $('.slide-03').click(function (event) {
        $('.gallery__modal-03').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-03').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-03').removeClass('active');
    });
    $('.slide-04').click(function (event) {
        $('.gallery__modal-04').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-04').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-04').removeClass('active');
    });
    $('.slide-05').click(function (event) {
        $('.gallery__modal-05').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-05').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-05').removeClass('active');
    });
    $('.slide-06').click(function (event) {
        $('.gallery__modal-06').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-06').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-06').removeClass('active');
    });
    $('.slide-11').click(function (event) {
        $('.gallery__modal-11').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-11').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-11').removeClass('active');
    });
    $('.slide-12').click(function (event) {
        $('.gallery__modal-12').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-12').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-12').removeClass('active');
    });
    $('.slide-13').click(function (event) {
        $('.gallery__modal-13').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-13').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-13').removeClass('active');
    });
    $('.slide-14').click(function (event) {
        $('.gallery__modal-14').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-14').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-14').removeClass('active');
    });
    $('.slide-15').click(function (event) {
        $('.gallery__modal-15').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-15').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-15').removeClass('active');
    });
    $('.slide-16').click(function (event) {
        $('.gallery__modal-16').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-16').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-16').removeClass('active');
    });
    $('.slide-17').click(function (event) {
        $('.gallery__modal-17').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-17').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-17').removeClass('active');
    });
    $('.slide-18').click(function (event) {
        $('.gallery__modal-18').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-18').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-18').removeClass('active');
    });
    $('.slide-19').click(function (event) {
        $('.gallery__modal-19').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-19').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-19').removeClass('active');
    });
    $('.slide-20').click(function (event) {
        $('.gallery__modal-20').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-20').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-20').removeClass('active');
    });
    $('.slide-21').click(function (event) {
        $('.gallery__modal-21').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-21').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-21').removeClass('active');
    });
    $('.slide-22').click(function (event) {
        $('.gallery__modal-22').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-22').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-22').removeClass('active');
    });
    $('.slide-23').click(function (event) {
        $('.gallery__modal-23').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-23').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-23').removeClass('active');
    });
    $('.slide-24').click(function (event) {
        $('.gallery__modal-24').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-24').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-24').removeClass('active');
    });
    $('.slide-25').click(function (event) {
        $('.gallery__modal-25').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-25').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-25').removeClass('active');
    });
    $('.slide-26').click(function (event) {
        $('.gallery__modal-26').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-26').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-26').removeClass('active');
    });
    $('.slide-27').click(function (event) {
        $('.gallery__modal-27').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-27').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-27').removeClass('active');
    });
    $('.slide-28').click(function (event) {
        $('.gallery__modal-28').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-28').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-28').removeClass('active');
    });
    $('.slide-29').click(function (event) {
        $('.gallery__modal-29').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-29').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-29').removeClass('active');
    });
    $('.slide-30').click(function (event) {
        $('.gallery__modal-30').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-30').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-30').removeClass('active');
    });
    $('.slide-31').click(function (event) {
        $('.gallery__modal-31').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-31').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-31').removeClass('active');
    });
    $('.slide-32').click(function (event) {
        $('.gallery__modal-32').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-32').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-32').removeClass('active');
    });
    $('.slide-33').click(function (event) {
        $('.gallery__modal-33').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-33').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-33').removeClass('active');
    });
    $('.slide-34').click(function (event) {
        $('.gallery__modal-34').toggleClass('active');
    });
    $('.modal-content__closed').click(function (event) {
        $('.gallery__modal-34').removeClass('active');
    });
    $('.gallery__modal').click(function (event) {
        $('.gallery__modal-34').removeClass('active');
    });
});

$(document).keydown(function(e) {
    if (e.keyCode === 27) {
        e.stopPropagation();
        $('.gallery__modal-01').removeClass('active');
        $('.gallery__modal-02').removeClass('active');
        $('.gallery__modal-03').removeClass('active');
        $('.gallery__modal-04').removeClass('active');
        $('.gallery__modal-05').removeClass('active');
        $('.gallery__modal-06').removeClass('active');
        $('.gallery__modal-11').removeClass('active');
        $('.gallery__modal-12').removeClass('active');
        $('.gallery__modal-13').removeClass('active');
        $('.gallery__modal-14').removeClass('active');
        $('.gallery__modal-15').removeClass('active');
        $('.gallery__modal-16').removeClass('active');
        $('.gallery__modal-17').removeClass('active');
        $('.gallery__modal-18').removeClass('active');
        $('.gallery__modal-19').removeClass('active');
        $('.gallery__modal-20').removeClass('active');
        $('.gallery__modal-21').removeClass('active');
        $('.gallery__modal-22').removeClass('active');
        $('.gallery__modal-23').removeClass('active');
        $('.gallery__modal-24').removeClass('active');
        $('.gallery__modal-25').removeClass('active');
        $('.gallery__modal-26').removeClass('active');
        $('.gallery__modal-27').removeClass('active');
        $('.gallery__modal-28').removeClass('active');
        $('.gallery__modal-29').removeClass('active');
        $('.gallery__modal-30').removeClass('active');
        $('.gallery__modal-31').removeClass('active');
        $('.gallery__modal-32').removeClass('active');
        $('.gallery__modal-33').removeClass('active');
        $('.gallery__modal-34').removeClass('active');
    }
});


// Hero
var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 30000,
    },
});

// Galery 
const element = document.querySelector('#selectFilter');
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
});

new Swiper('.gallery-right__swiper', {
    preloadImages: true,
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
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
    // a11y: {
    //     enable: true,
    //     prevSlideMessage: 'Предыдущий слайд',
    //     nextSlideMessage: 'Следующий слайд',
    //     firstSlideMessage: 'Это первый слайд',
    //     lastSlideMessage: 'Это последний слайд',
    //     notificationClass: 'swiper-notification',
    //     containerMessage: '',
    //     containerRoleDescriptionMessage: '',
    //     itemRoleDescriptionMessage: '',
    // },
});




