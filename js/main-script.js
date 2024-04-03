const navHamburger = document.querySelector('.top-menu__nav-panel');
const navMainMenu = document.querySelector('.top-menu');
const navLogo = document.querySelector('.top-menu__nav_logo');
const navContacts = document.querySelector('.top-menu__nav_contacts');
const navOverlayMenu = document.querySelector('.nav-menu');
const navMenuList = document.querySelector('.nav-menu__list');

navHamburger.addEventListener('click',()=>{
    navHamburger.classList.toggle('active');
    navMainMenu.classList.toggle('show');
    navLogo.classList.toggle('hide');
    navContacts.classList.toggle('show');
    navOverlayMenu.classList.toggle('show');
    if(navOverlayMenu.classList.contains('show')){
        document.body.style.overflow = "hidden";
    }else{
        document.body.style.overflow = "auto";
    } 
});

navMenuList.addEventListener('mouseover', (event)=>{
    if(event.target.classList.contains('nav-menu__list_elem')){
        event.target.classList.add('active');
    }
});

navMenuList.addEventListener('mouseout', (event)=>{
    if(event.target.classList.contains('nav-menu__list_elem')){
        event.target.classList.remove('active');
    }
});

$(document).ready(()=>{
    $('.latest-projects__list').slick({
        prevArrow: $('.latest-projects__control-panel_arrows_left'),
        nextArrow: $('.latest-projects__control-panel_arrows_right'),
        slidesToShow: 3,
        infinite: false,
        centerMode: true,
        variableWidth: true,
        speed: 0,
        focustOnSelect: true,
        responsive: [
            {
              breakpoint: 700,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
              }
            },
            {
              breakpoint: 270,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]
    })
});