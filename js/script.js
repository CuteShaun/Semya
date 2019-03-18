window.addEventListener(
  "resize",
  function() {
    changeControlHeight();
  },
  { passive: true }
);

function changeControlHeight() {
  const carouselControl1 = document.getElementById(
    "multiple-one-carousel__control"
  );

  const carouselControl2 = document.getElementById(
    "multiple-one-carousel__control-2"
  );

  let carouselImg = document.querySelector(
    ".slick-current .multiple-one-carousel__img"
  );
  let carouselImg2 = document.querySelector(
    ".slick-current .multiple-one-carousel__img--second"
  );
  carouselControl1.style.height = `${carouselImg.clientHeight}px`;
  carouselControl2.style.height = `${carouselImg2.clientHeight}px`;
}

function newSlickInstance(params) {
  let {
    prev,
    next,
    selector,
    slideShow,
    slideScroll,
    infinite,
    responsive,
    classNameCSS
  } = params;

  $(selector).slick({
    prevArrow: $(prev),
    nextArrow: $(next),
    infinite: infinite,
    slidesToShow: slideShow,
    slidesToScroll: slideScroll,
    responsive: responsive
  });
}

newSlickInstance({
  selector: "#main-slider",
  prev: ".main-slider__prev",
  next: ".main-slider__next"
});

newSlickInstance({
  selector: "#multiple-one-carousel",
  infinite: true,
  slideShow: 3,
  slideScroll: 1,
  next: ".multiple-one-carousel__control",
  classNameCSS: ".multiple-one-carousel",
  responsive: [
    {
      breakpoint: 980, //tablet breakpoint
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

newSlickInstance({
  selector: "#multiple-one-carousel--second",
  infinite: true,
  slideShow: 3,
  slideScroll: 1,
  next: ".multiple-one-carousel__control--second",
  classNameCSS: ".multiple-one-carousel",
  responsive: [
    {
      breakpoint: 980, //tablet breakpoint
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

newSlickInstance({
  selector: "#country-slider",
  slideShow: 4,
  slideScroll: 4,
  prev: ".country-slider__prev",
  next: ".country-slider__next",
  classNameCSS: ".country-slider",
  responsive: [
    {
      breakpoint: 768, //tablet breakpoint
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});

//reset slider position in tabs
$('a[data-toggle="tab"]').on("shown.bs.tab", { passive: true }, function(e) {
  e.target;
  e.relatedTarget;
  $(".multiple-one-carousel").slick("setPosition");
  changeControlHeight();
});

// hamburger;
const hamburger = document.getElementById("hamburger");
const hamburgerClose = document.getElementById("hamburger-close");
const mobileNav = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", openMenu, { passive: true });
hamburgerClose.addEventListener("click", closeMenu, { passive: true });

function openMenu() {
  mobileNav.classList.add("hamburger-menu--active");
  console.log(overlay, "gg");
  overlay.classList.add("overlay--active");
}

function closeMenu() {
  mobileNav.classList.remove("hamburger-menu--active");
  overlay.classList.remove("overlay--active");
}

changeControlHeight();
