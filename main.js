'use strict';

//넷바 색상 변경
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});

//Arrow-up 색상 변경
//
const arrowUpBtn = document.querySelector('.arrow-up');
const arrowUpBtnHeight = arrowUpBtn.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    if(window.scrollY > arrowUpBtnHeight) {
        arrowUpBtn.classList.add('arrowUp--dark');
    } else {
        arrowUpBtn.classList.remove('arrowUp--dark');
    }
});

//Arrow-up 선택 시 home으로 이동하기
arrowUpBtn.addEventListener("click", (event) => {
    scrollIntoView("#home");
});

//넷바 메뉴 선택 시 해당 부분으로 이동하기
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove("open");
    scrollIntoView(link);
});

//contact me 버튼 이동하기
const contactMeBtn = document.querySelector(".home__contact");
contactMeBtn.addEventListener("click", () => {
    scrollIntoView("#contact");
});

//home 투명도 조절
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY/homeHeight;
});

// //arrow-up 투명도 조절
//arrowUpBtn.addEventListener("scroll", () => {
//    arrowUpBtn.style.opacity = window.scrollY*homeHeight + 0.1;
// });

//햄버거 메뉴 클릭 시 
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("open");
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
    }