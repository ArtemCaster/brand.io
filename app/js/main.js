$(function () {

  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animate__animated',
      offset: 120,
      // mobile: false,
    }
  )

  wow.init();

  $('.comments-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.99984L14.9713 0.833171L14.9713 4.1665L5.36462e-07 4.1665L5.16587e-07 5.83317L14.9713 5.83317L14.9713 9.1665L20 4.99984Z" fill="white"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.99984L14.9713 0.833171L14.9713 4.1665L5.36462e-07 4.1665L5.16587e-07 5.83317L14.9713 5.83317L14.9713 9.1665L20 4.99984Z" fill="white"/></svg></button>',
  });

  $('.burger-btn').on('click', function () {
    $('.navbar__menu').toggleClass('navbar__menu--active');
  });

  $('.navbar__menu-link').on('click', function () {
    $('.navbar__menu').removeClass('navbar__menu--active');
  });


  $("#menu").on("click", "a", function (event) {
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

});

