window.addEventListener("resize", function() {
  changeControlHeight();
});

function changeControlHeight() {
  const carouselControl = document.getElementById("carousel-control");
  let carouselImg = document.querySelector(
    ".carousel-item.active .carousel__img"
  );
  carouselControl.style.height = `${carouselImg.clientHeight}px`;
}

function multipleCarousel() {
  $("#recipeCarousel").carousel({
    interval: 10000
  });

  $(".carousel-1 .carousel-item").each(function() {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next
      .children(":first-child")
      .clone()
      .appendTo($(this));

    for (var i = 0; i < 2; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(":first");
      }

      next
        .children(":first-child")
        .clone()
        .appendTo($(this));
    }
  });

  $("#recipeCarousel-1").carousel({
    interval: 10000
  });

  $(".carousel-2 .carousel-item").each(function() {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next
      .children(":first-child")
      .clone()
      .appendTo($(this));

    for (var i = 0; i < 2; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(":first");
      }

      next
        .children(":first-child")
        .clone()
        .appendTo($(this));
    }
  });
}

multipleCarousel();
changeControlHeight();


//hamburger
