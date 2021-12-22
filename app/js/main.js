const swiper = new Swiper('.related__slider', {
  slidesPerView: 2,
  spaceBetween: 5,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  skideToClickedSlide: true,
  loop: true,
  slidesPerGroup: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 30
    },
  }
});

$(function () {

  // catalog-page
  $('.fillter__item-top').on('click', function () {
    $(this).next('.fillter__item-content').slideToggle();
    $(this).toggleClass('fillter__item-top--rotate');
  });


  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $(".star").rateYo({
    starWidth: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800"
  });

  $('.select-style, .product-one__content-num').styler();

  // filter-price
  var $range = $(".fillter-price__input"),
    $inputFrom = $(".fillter-price__from"),
    $inputTo = $(".fillter-price__to"),
    instance,
    min = 0,
    max = 1000,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    onStart: updateInputs,
    onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });
  });



  $('.top-slider__list').slick({
    dots: false,
    arrows: true,
    fade: true,
    infinite: false,
    responsive: [{
      breakpoint: 1550,
      settings: {
        arrows: false,
        dots: true,
      }
    }],

    prevArrow: '<button type="button" class="top-slider__arrow top-slider__arrow--prev"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="6" fill="white" fill-opacity="0.8"/><path d="M21.0382 31.0149L37.0515 45.6079C37.577 46.1307 38.4292 46.1307 38.9546 45.6079C39.4801 45.0851 39.4801 44.2369 38.9546 43.7141L23.9069 30L38.9533 16.2859C39.4788 15.7631 39.4788 14.9148 38.9533 14.3921C38.4278 13.8693 37.5756 13.8693 37.0502 14.3921L21.0369 28.9851C20.7568 29.2638 20.6367 29.6332 20.6554 29.9986C20.638 30.3654 20.7581 30.7348 21.0382 31.0149Z" fill="#505050"/></svg></button >',
    nextArrow: '<button type="button" class="top-slider__arrow top-slider__arrow--next"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="6"	fill="white" fill-opacity="0.8"/><path d="M38.9641 28.9851L22.9508 14.3921C22.4254 13.8693 21.5731 13.8693 21.0477 14.3921C20.5222 14.9149 20.5222 15.7631 21.0477 16.2859L36.0954 30L21.049 43.7141C20.5235 44.2369 20.5235 45.0852 21.049 45.6079C21.5745 46.1307 22.4267 46.1307 22.9521 45.6079L38.9654 31.0149C39.2455 30.7362 39.3656 30.3668 39.3469 30.0014C39.3643 29.6346 39.2443 29.2652 38.9641 28.9851Z" fill="#505050"/></svg></button>',
  });


  $('.partners__slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ],
  });

  // menu index.html
  $(document).on('click', function (event) {
    if (!$(event.target).closest(".leftside-menu, .menu__btn").length) {
      $("body").find(".leftside-menu").addClass("leftside-menu--close");
      $('body').removeClass('lock');
      $('.blackout').css('display', 'none');
    }
  });

  $('.menu__btn').on('click', function () {
    $('.leftside-menu').removeClass('leftside-menu--close');
    $('body').toggleClass('lock');
    $('.blackout').css('display', 'block');
  });

  $('.leftside-menu__close').on('click', function () {
    $('.leftside-menu').addClass('leftside-menu--close');
    $('body').toggleClass('lock');
    $('.blackout').css('display', 'none');
  });

  // header-form
  $('.user-nav__btn--search').on('click', function () {
    $('.header__form-search').toggleClass('active');
  });

  // catalog in leftside-menu
  $('.catalog__btn').on('click', function () {
    $('.leftside-menu__catalog-list').toggleClass('leftside-menu__catalog-list--active');
  });


  // shop-filters
  $(document).on('click', function (event) {
    if (!$(event.target).closest(".shop__filters, .shop-content__button").length) {
      $("body").find(".shop__filters").addClass("shop__filters--close");
      $('.wrapper').removeClass('lock');
      $('.blackout').css('display', 'none');
    }
  });

  $('.shop-content__button').on('click', function () {
    $('.shop__filters').toggleClass('shop__filters--close');
    $('.wrapper').toggleClass('lock');
    $('.blackout').css('display', 'bloc');
  });

  $('.shop__filters-close').on('click', function () {
    $('.shop__filters').addClass('shop__filters--close');
    $('.wrapper').toggleClass('lock');
    $('.blackout').css('display', 'none');
  });


  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-card').addClass('product-card--list');
    $('.shop-content__inner').addClass('shop-content__nogrid');
  });

  $('.button-grid').on('click', function () {
    $('.product-card').removeClass('product-card--list');
    $('.shop-content__inner').removeClass('shop-content__nogrid');
  });
});

const myCarousel = new Carousel(document.querySelector("#myCarousel"), {
  preload: 1,
  Arrows: true,
  slidesPerPage: 1,
  infinite: false,
  responsive: [{
    breakpoint: 767,
    settings: {
      Arrows: false,
    }
  }],
});

Fancybox.bind('[data-fancybox="gallery"]', {
  Thumbs: false,
  Toolbar: false,
  slidesPerPage: 1,

  closeButton: "top",

  Carousel: {
    Dots: true,
    on: {
      change: (that) => {
        myCarousel.slideTo(myCarousel.findPageForSlide(that.page), {
          friction: 0.9,
        });
      },
    },
  },
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