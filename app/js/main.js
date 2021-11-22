$(function () {

  $('.top-slider__wrapper').slick({
    dots: false,
    arrows: true,
    fade: true,
    infinite: false,
    prevArrow: '<button type="button" class="top-slider__arrow top-slider__prev"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="6" fill="white" fill-opacity="0.8"/><path d="M21.0382 31.0149L37.0515 45.6079C37.577 46.1307 38.4292 46.1307 38.9546 45.6079C39.4801 45.0851 39.4801 44.2369 38.9546 43.7141L23.9069 30L38.9533 16.2859C39.4788 15.7631 39.4788 14.9148 38.9533 14.3921C38.4278 13.8693 37.5756 13.8693 37.0502 14.3921L21.0369 28.9851C20.7568 29.2638 20.6367 29.6332 20.6554 29.9986C20.638 30.3654 20.7581 30.7348 21.0382 31.0149Z" fill="#505050"/></svg></button >',
    nextArrow: '<button type="button" class="top-slider__arrow top-slider__next"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="6"	fill="white" fill-opacity="0.8"/><path d="M38.9641 28.9851L22.9508 14.3921C22.4254 13.8693 21.5731 13.8693 21.0477 14.3921C20.5222 14.9149 20.5222 15.7631 21.0477 16.2859L36.0954 30L21.049 43.7141C20.5235 44.2369 20.5235 45.0852 21.049 45.6079C21.5745 46.1307 22.4267 46.1307 22.9521 45.6079L38.9654 31.0149C39.2455 30.7362 39.3656 30.3668 39.3469 30.0014C39.3643 29.6346 39.2443 29.2652 38.9641 28.9851Z" fill="#505050"/></svg></button>',
  });


  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);


});