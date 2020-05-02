// on load
$(function () {

  // make scroll
  $("a.scroll-link").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
  });

  $('#btn-copiar').click(function (event){
    event.preventDefault();
    $(this).toggleClass('green');

    var text = $('#btn-copiar').text();
    $('#btn-copiar').text(text == "Copiar" ? "Copiado" : "Copiar");
  })

});

