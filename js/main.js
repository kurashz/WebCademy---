var owl = $(".owl-carousel");
owl.owlCarousel({
  center: true,
  margin: 30,
  loop: true,
  items: 3,
});
$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".slider__btn--prev").click(function () {
  owl.trigger("prev.owl.carousel");
});
