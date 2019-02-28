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