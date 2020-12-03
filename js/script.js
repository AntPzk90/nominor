// открывание мобильного меню
$(document).ready(function() {
  $('.header').toggleClass('animate-bg');
});

$('.partners__switch').click(function() {
  $(this).toggleClass('partners__switch--close');
  $(this).prev().fadeToggle(400);
});

$('.cases__btn-arrow').click(function() {
  $(this).css('transform','rotate(0deg)');
  $(this).parent().next().slideToggle(400);
});

$('.services__list-link').click(function(evt) {
  evt.preventDefault();
  $(this).next().fadeIn();
  $('body').append("<div class='overlay'></div>");
  $('.overlay').click(function() {
    $('.popup').fadeOut(200);
    $(this).fadeOut(200);
  });
});

$(document).keydown(function(evt) {
  console.log(evt)
  if(evt.keyCode == 27) {
    $('.popup').fadeOut(200);
    $('.overlay').fadeOut(200);
  }
});

$('.header__burger').click(function() {
  $(this).fadeOut(300);
  menuShow();
});

$('.header__nav-list-link--anchor').click(function(evt) {
  menuFade();
});

$('.header__menu-close').click(function() {
  menuFade();
});

function menuShow() {
  $('.header__contacts').fadeOut(300);
  $('.header__menu').removeClass('header__menu--fade');
  $('.header__logo').removeClass('header__logo--static');
  $('.header__logo').addClass('header__logo--menu');
}

function menuFade() {
  $('.header__burger').fadeIn(300);
  $('.header__contacts').fadeIn(300);
  $('.header__menu').addClass('header__menu--fade');
  $('.header__logo').fadeOut(0);
  $('.header__logo').removeClass('header__logo--menu');
  $('.header__logo').addClass('header__logo--static');
  $('.header__logo').fadeIn(400);
}

$(window).scroll(function() {
  if($(this).scrollTop() > 72 + $('.header__top-wrapper').height()) {
    $('.header__contacts-tel').fadeOut(0);
    $('.header__contacts-mail').fadeOut(0);
  } else {
    $('.header__contacts-tel').fadeIn(0);
    $('.header__contacts-mail').fadeIn(0);
  }
});

$('.call-popup').click(function(evt) {
  evt.preventDefault();
  showPopUp();
});

$('.close-popup').click(function(evt) {
  evt.preventDefault();
  fadePopUp();
});

function showPopUp () {
  fadePopUp();
  $('body').append("<div class='overlay'></div>");
  $('.overlay').click(function() {
    $('.popup').fadeOut(200);
    $(this).fadeOut(200);
  });
  $('.main-popup').fadeIn(300);
}

function fadePopUp() {
  if($('.popup').length > 0 ) {
    $('.popup').fadeOut(0);
  }
  $('.overlay').fadeOut(200);
}

$('.footer__nav-list-link--anchor').click(function() {
  $('.footer__nav-list-item--active').removeClass('footer__nav-list-item--active');
  $(this).parent().addClass('footer__nav-list-item--active')
});
