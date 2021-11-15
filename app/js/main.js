$(function() {

   $('.top-slider').slick({
    dots: false,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
   	nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
  });


   var mixer = mixitup('.top-product__content');

});