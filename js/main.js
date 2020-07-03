var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true, 
    navigation: {
        nextEl: '.arrow',
        
      },
      breakpoints: {
        
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        }
      }
});

var menuButton = document.querySelector('.button_menu_phone');
var menu = document.querySelector('.menu_phone');
var container = document.querySelector('.container');
var notFooter = document.querySelector('.news');
var menuClose = document.querySelector('.button_active_exit');
var buttonMenuClose = document.querySelector('.button_exit_phone');

menuButton.addEventListener('click', function (){
  menuButton.classList.toggle('menu-active');
  menu.classList.toggle('active');
  menuClose.classList.toggle('exit');
  container.classList.toggle('container_none');
  notFooter.classList.toggle('container_none');
});
 menuClose.addEventListener('click', function(){
    menu.classList.toggle('active');
    container.classList.toggle('content');
    notFooter.classList.toggle('content');
    menuClose.classList.remove('exit');
    menuButton.classList.remove('menu-active');
});
/*buttonMenuClose.classList.toggle('container_none');*/ 
