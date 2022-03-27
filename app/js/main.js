$(function () {

  // price cards
  $('.services-content__btn').on('click', function () {
    $('.price-card__content').toggleClass('price-card__content--active');
    $('.services-content__btn-arrow').toggleClass('services-content__btn-arrow--active');
    $('.services-content__btn').toggleClass('services-content__btn--active');

    if ((this).classList.contains('services-content__btn--active')) {
      (this).textContent = 'Свернуть';
    } else {
      (this).textContent = 'Развернуть';
    }
  });
  // price cards

  // mini-slider
  const miniSwiper = new Swiper('.mini-slider__swiper ', {
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 1000,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 15,
      },

      526: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      970: {
        slidesPerView: 3,
        spaceBetween: 15,
      },

      1216: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
  // mini-slider

  // scroll plavniy
  $('.footer__up').on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 800);
  });
  // scroll plavniy

  //header scroll
  window.addEventListener('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('.header').addClass('header--scroll');
    } else {
      $('.header').removeClass('header--scroll');
    }
  });
  //header scroll

  // burger
  $('.burger').on('click', function () {
    $('.header__list').toggleClass('header__list--active');
    $('.burger').toggleClass('burger--active');
  });
  // burger

  // request modal
  $('.request-btn, .price-card__btn').on('click', function () {
    $('.request-overlay').toggleClass('request-overlay--active');
    $('.request-modal').toggleClass('request-modal--active');
  });

  $('.request-modal-close').on('click', function () {
    $('.request-overlay').removeClass('request-overlay--active');
    $('.request-modal').removeClass('request-modal--active');
  });

  const modalOverlay = document.querySelector('.request-overlay');
  const modalItem = document.querySelectorAll('.request-modal');

  modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
      modalOverlay.classList.remove('request-overlay--active');
      modalItem.forEach((el) => {
        el.classList.remove('request-modal--active');
      });
    }
  });
  // request modal

  // fancybox project
  $('[data-fancybox]').fancybox({
    toolbar: false,
  })
  // fancybox project

  // project swiper
  const projectSwiper = new Swiper('.project-information__swiper ', {
    spaceBetween: 15,
    speed: 1000,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },

    breakpoints: {
      320: {
        slidesPerView: 1.1,
      },

      769: {
        slidesPerView: 1,
      }
    }
  });
  // project swiper

  //advantages accordion
  $('.advantages__btn').on('click', function () {
    $(this).toggleClass('advantages__btn--active');
    $(this).next('.advantages__accordion-content').slideToggle(350);
  });
  //advantages accordion

  // mixitup
  var mixer = mixitup('.products__list');
  // mixitup
});