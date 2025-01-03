const searchIcons = document.querySelectorAll("#search-icon");
const backIcon = document.getElementById("back-icon");
const navn = document.getElementById("nav-norm");
const navs = document.getElementById("nav-search");
const menu = document.getElementById("menu");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const dropiconsd = document.querySelectorAll(".dropicondown");
const dropiconsu = document.querySelectorAll(".dropiconu");
const dropds = document.querySelectorAll(".dropd");
const dropdlu = document.querySelectorAll(".up");
const dropdld = document.querySelectorAll(".down");
const menui = document.querySelector("#menuicon");
const closei = document.querySelector("#close-icon");
const navmenu = document.querySelector("#menunav");
const navnorm = document.querySelector("#nav-norm");
let currentIndex = 0;
let navnc = 1;
let navmc = 0;
let navsc = 0;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

function toggleNavs() {
  if (navnc === 1) {
    navn.classList.add("hidden");
    navnc=0;
  } 
  else if(navmc===1 && navnc===0) {
    navmenu.classList.add("hidden");
    navmc=0;
    menu.classList.add("hidden");
  }
  else if(navmc===0 && navnc===0){
    navn.classList.remove("hidden");
    navnc=1;
  };
  if(navsc===1){
    navs.classList.add("hidden");
    navsc=0;
  }
  else{
    navs.classList.remove("hidden");
    navsc=1;
  }
}

searchIcons.forEach((searchIcon) => {
  searchIcon.addEventListener("click", toggleNavs);
});

backIcon.addEventListener("click", toggleNavs);

function showMenu() {
  menu.classList.toggle("hidden");
  navmenu.classList.toggle("hidden");
  navnorm.classList.toggle("hidden");
  if (navmc === 0) {
    navmc = 1;
  } else {
    navmc = 0;
  }
  if (navnc === 1) {
    navnc = 0;
  } else {
    navnc = 1;
  }
}

function showDropd(i) {
  dropds[i].classList.toggle("hidden");
  dropdlu[i].classList.toggle("hidden");
  dropdld[i].classList.toggle("hidden");
}

// Add event listeners for the down icons
dropiconsd.forEach((dropicon, i) => {
  dropicon.addEventListener("click", () => showDropd(i));
});
dropiconsu.forEach((dropicon, i) => {
  dropicon.addEventListener("click", () => showDropd(i));
});

menui.addEventListener("click", showMenu);
closei.addEventListener("click", showMenu);
