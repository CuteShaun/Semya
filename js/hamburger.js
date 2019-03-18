//hamburger
const hamburger = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("hamburger-close")
const mobileNav = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", openMenu);
hamburgerClose.addEventListener("click", closeMenu);

function openMenu() {
  mobileNav.classList.add("hamburger-menu--active");
  console.log(overlay, 'gg');
  overlay.classList.add("overlay--active")
}

function closeMenu() {
  mobileNav.classList.remove("hamburger-menu--active");
  overlay.classList.remove("overlay--active")
}

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    // При создании объекта карты необходимо указать его свойства
    // center - определяем точку на которой карта будет центрироваться
    center: { lat: 46.471, lng: 30.744 },
    // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
    zoom: 17
  });
}


// 46.4712047,30.7449723,17z