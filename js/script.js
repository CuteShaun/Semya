// window.addEventListener("resize", function() {
//   changeControlHeight();
// });

// function changeControlHeight() {
//   const carouselControl = document.getElementById("carousel-control");
//   let carouselImg = document.querySelector(
//     ".carousel-item.active .carousel__img"
//   );
//   carouselControl.style.height = `${carouselImg.clientHeight}px`;
// }

// function multipleCarousel() {
//   $("#recipeCarousel").carousel({
//     interval: 10000
//   });

//   $(".carousel-1 .carousel-item").each(function() {
//     var next = $(this).next();
//     if (!next.length) {
//       next = $(this).siblings(":first");
//     }
//     next
//       .children(":first-child")
//       .clone()
//       .appendTo($(this));

//     for (var i = 0; i < 2; i++) {
//       next = next.next();
//       if (!next.length) {
//         next = $(this).siblings(":first");
//       }

//       next
//         .children(":first-child")
//         .clone()
//         .appendTo($(this));
//     }
//   });

//   $("#recipeCarousel-1").carousel({
//     interval: 10000
//   });

//   $(".carousel-2 .carousel-item").each(function() {
//     var next = $(this).next();
//     if (!next.length) {
//       next = $(this).siblings(":first");
//     }
//     next
//       .children(":first-child")
//       .clone()
//       .appendTo($(this));

//     for (var i = 0; i < 2; i++) {
//       next = next.next();
//       if (!next.length) {
//         next = $(this).siblings(":first");
//       }

//       next
//         .children(":first-child")
//         .clone()
//         .appendTo($(this));
//     }
//   });
// }

// multipleCarousel();
// changeControlHeight();
function newSlickInstance(params) {
  let {prev, next} = params;
  $('#main-slider').slick({
    prevArrow: $(prev),
    nextArrow: $(next)
  });
}

newSlickInstance({
  prev: ".main-slider__prev",
  next: ".main-slider__next"
});

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
