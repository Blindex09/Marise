$(document).ready(function () {
  $(".carrossel")
    .slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    })
    .on("afterChange", function () {
      $(".slick-current")
        .addClass("d-flex")
        .addClass("align-items-center")
        .addClass("justify-content-center");
    });
});
