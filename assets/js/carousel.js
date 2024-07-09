$(document).ready(function () {
  $(".carrossel")
    .slick({
      dots: true,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    })
    .on("afterChange", function () {
      $(".slick-current")
        .addClass("d-flex")
        .addClass("align-items-center")
        .addClass("justify-content-center");

        $('#user-feedback').remove();
      $(
        '<p id="user-feedback" role="alert"> Descrição da imagem:'
        +$(".slick-current")[0].querySelector('img').getAttribute('alt')
        +'</p>'
      ).appendTo(document.body);
    });
});
