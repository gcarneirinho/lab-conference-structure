// on load
$(function () {

  // make scroll
  $("a.scroll-link").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
  });

  $('#btn-copiar').click(function (event){
    event.preventDefault();
    // $(this).toggleClass('green copied');
    var isRed = $(this).hasClass("red");

    if(isRed) {
      $(this).removeClass('red copy text-blue').addClass('green copied');
    } else {
      $(this).removeClass('green copied').addClass('red copy text-blue');
    }

    var text = $('#btn-copiar').text();
    $('#btn-copiar').text(text == "Copiar" ? "Copiado" : "Copiar");
  })

  $('#open-modal').click(function (event){
    event.preventDefault();
    
    $('#modal').addClass('show');

  })

  $('#btn-iniciar').click(function (event){
    event.preventDefault();
    
    $('#modal').addClass('hide').removeClass('show');
      // remove a class hide depois de completada
      setTimeout(function(){
        $('#modal').removeClass('hide');
      }, 500);
   
  })

  $('#btn-participantes-microfone').click(function(event) {
    event.preventDefault();

    var isOff = $(this).hasClass("off");

    if(!isOff) {
      $(this).addClass('off');
    } else {
      $(this).removeClass('off');
    }
  })

  $('#btn-participantes-camera').click(function(event) {
    event.preventDefault();

    var isOff = $(this).hasClass("off");

    if(!isOff) {
      $(this).addClass('off');
    } else {
      $(this).removeClass('off');
    }
  })

  $('#btn-participantes-seila').click(function(event) {
    event.preventDefault();

    var isOff = $(this).hasClass("off");

    if(!isOff) {
      $(this).addClass('off');
    } else {
      $(this).removeClass('off');
    }
  })

  $(window).resize(function(){
    // console.log("resized: " + window.outerHeight)
  });


});

