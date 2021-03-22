$(document).ready(function() {
    $('.dropdown__item__a').click(function(event) {
        $('.dropdown__block__a,.dropdown__span__a').toggleClass('is-active');
    });
    $('.dropdown__item__a').click(function(event) {
        $('.dropdown__block__b,.dropdown__span__b,.dropdown__block__c,.dropdown__span__c,.dropdown__block__d,.dropdown__span__d,.dropdown__block__e,.dropdown__span__e').removeClass('is-active');
    });
    $('.header__bottom__dropdown__item').click(function(event) {
        $('.dropdown__block__a,.dropdown__span__a').removeClass('is-active');
    });
    $('.dropdown__item__b').click(function(event) {
        $('.dropdown__block__b,.dropdown__span__b').toggleClass('is-active');
    });
    $('.dropdown__item__b').click(function(event) {
        $('.dropdown__block__a,.dropdown__span__a,.dropdown__block__c,.dropdown__span__c,.dropdown__block__d,.dropdown__span__d,.dropdown__block__e,.dropdown__span__e').removeClass('is-active');
    });
    $('.header__bottom__dropdown__item').click(function(event) {
        $('.dropdown__block__b,.dropdown__span__b').removeClass('is-active');
    });
    $('.dropdown__item__c').click(function(event) {
        $('.dropdown__block__c,.dropdown__span__c').toggleClass('is-active');
    });
    $('.dropdown__item__c').click(function(event) {
        $('.dropdown__block__a,.dropdown__span__a,.dropdown__block__b,.dropdown__span__b,.dropdown__block__d,.dropdown__span__d,.dropdown__block__e,.dropdown__span__e').removeClass('is-active');
    });
    $('.header__bottom__dropdown__item').click(function(event) {
        $('.dropdown__block__c,.dropdown__span__c').removeClass('is-active');
    });
    $('.dropdown__item__d').click(function(event) {
        $('.dropdown__block__d,.dropdown__span__d').toggleClass('is-active');
    });
    $('.dropdown__item__d').click(function(event) {
        $('.dropdown__block__a,.dropdown__span__a,.dropdown__block__b,.dropdown__span__b,.dropdown__block__c,.dropdown__span__c,.dropdown__block__e,.dropdown__span__e').removeClass('is-active');
    });
    $('.header__bottom__dropdown__item').click(function(event) {
        $('.dropdown__block__d,.dropdown__span__d').removeClass('is-active');
    });
    $('.dropdown__item__e').click(function(event) {
        $('.dropdown__block__e,.dropdown__span__e').toggleClass('is-active');
    });
    $('.dropdown__item__e').click(function(event) {
        $('.dropdown__block__a,.dropdown__span__a,.dropdown__block__b,.dropdown__span__b,.dropdown__block__c,.dropdown__span__c,.dropdown__block__d,.dropdown__span__d').removeClass('is-active');
    });
    $('.header__bottom__dropdown__item').click(function(event) {
        $('.dropdown__block__e,.dropdown__span__e').removeClass('is-active');
    });    
    $('.header__burger').click(function(event) {
        $('.header__menu__dropdown,.header__burger,.header__burger:before,.header__burger__span,.header__burger:after').toggleClass('active');
    });
    $('.header__menu__dropdown').click(function(event) {
        $('.header__menu__dropdown,.header__burger,.header__burger:before,.header__burger__span,.header__burger:after').removeClass('active');
    });
    $('.header__top__magnifier__svg').click(function(event) {
        $('.header__top,.header__top__magnifier__input,.header__top__magnifier_closed,.header__burger,.header__top__logo,.header__top__magnifier').toggleClass('is-active');
    });
    $('.header__top__magnifier_closed').click(function(event) {
         $('.header__top,.header__top__magnifier__input,.header__top__magnifier_closed,.header__burger,.header__top__logo,.header__top__magnifier').removeClass('is-active');
    });
    // $('input,textarea').focus(function(){
    //     $(this).data('placeholder',$(this).attr('placeholder'))
    //     $(this).attr('placeholder','');
    //   });
    //   $('input,textarea').blur(function(){
    //     $(this).attr('placeholder',$(this).data('placeholder'));
    //   });
});

new Swiper('.hero__container',{
    slidesPerView: 1,
});

var mySwiper = new Swiper('.hero__container', {
    autoplay: {
      delay: 30000,
    },
  });