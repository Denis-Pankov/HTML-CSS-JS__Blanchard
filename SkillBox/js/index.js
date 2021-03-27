$(document).ready(function() {
    $('.dropdown__item-a').click(function(event) {
        $('.dropdown__block-a,.dropdown__span-a').toggleClass('is-active');
    });
    $('.dropdown__item-a').click(function(event) {
        $('.dropdown__block-b,.dropdown__span-b,.dropdown__block-c,.dropdown__span-c,.dropdown__block-d,.dropdown__span-d,.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function(event) {
        $('.dropdown__block-a,.dropdown__span-a').removeClass('is-active');
    });
    $('.dropdown__item-b').click(function(event) {
        $('.dropdown__block-b,.dropdown__span-b').toggleClass('is-active');
    });
    $('.dropdown__item-b').click(function(event) {
        $('.dropdown__block-a,.dropdown__span-a,.dropdown__block-c,.dropdown__span-c,.dropdown__block-d,.dropdown__span-d,.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function(event) {
        $('.dropdown__block-b,.dropdown__span-b').removeClass('is-active');
    });
    $('.dropdown__item-c').click(function(event) {
        $('.dropdown__block-c,.dropdown__span-c').toggleClass('is-active');
    });
    $('.dropdown__item-c').click(function(event) {
        $('.dropdown__block-a,.dropdown__span-a,.dropdown__block-b,.dropdown__span-b,.dropdown__block-d,.dropdown__span-d,.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function(event) {
        $('.dropdown__block-c,.dropdown__span-c').removeClass('is-active');
    });
    $('.dropdown__item-d').click(function(event) {
        $('.dropdown__block-d,.dropdown__span-d').toggleClass('is-active');
    });
    $('.dropdown__item-d').click(function(event) {
        $('.dropdown__block-a,.dropdown__span-a,.dropdown__block-b,.dropdown__span-b,.dropdown__block-c,.dropdown__span-c,.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function(event) {
        $('.dropdown__block-d,.dropdown__span-d').removeClass('is-active');
    });
    $('.dropdown__item-e').click(function(event) {
        $('.dropdown__block-e,.dropdown__span-e').toggleClass('is-active');
    });
    $('.dropdown__item-e').click(function(event) {
        $('.dropdown__block-a,.dropdown__span-a,.dropdown__block-b,.dropdown__span-b,.dropdown__block-c,.dropdown__span-c,.dropdown__block-d,.dropdown__span-d').removeClass('is-active');
    });
    $('.header-bottom__dropdown-item').click(function(event) {
        $('.dropdown__block-e,.dropdown__span-e').removeClass('is-active');
    });    
    $('.header-burger').click(function(event) {
        $('.header-menu__dropdown,.header-burger,.header-burger:before,.header-burger__span,.header-burger:after').toggleClass('active');
    });
    $('.header-menu__dropdown').click(function(event) {
        $('.header-menu__dropdown,.header-burger,.header-burger:before,.header-burger__span,.header-burger:after').removeClass('active');
    });
    $('.header-top__magnifier-svg').click(function(event) {
        $('.header-top,.header-top__magnifier-input,.header-top__magnifier-closed,.header-burger,.header-top__logo,.header-top__magnifier').toggleClass('is-active');
    });
    $('.header-top__magnifier-closed').click(function(event) {
         $('.header-top,.header-top__magnifier-input,.header-top__magnifier-closed,.header-burger,.header-top__logo,.header-top__magnifier').removeClass('is-active');
    });
    // $('input,textarea').focus(function(){
    //     $(this).data('placeholder',$(this).attr('placeholder'))
    //     $(this).attr('placeholder','');
    //   });
    //   $('input,textarea').blur(function(){
    //     $(this).attr('placeholder',$(this).data('placeholder'));
    //   });
});

new Swiper('.hero-section',{
    slidesPerView: 1,
});

var mySwiper = new Swiper('.hero-section', {
    autoplay: {
      delay: 30000,
    },
  });