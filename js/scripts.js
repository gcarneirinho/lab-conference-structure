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

  // Video Host
  $('#btn-host-microfone').click(function(event) {
    event.preventDefault();

    var isOff = $(this).hasClass("off");

    if(!isOff) {
      $(this).addClass('off');
    } else {
      $(this).removeClass('off');
    }
  })

  $('#btn-host-camera').click(function(event) {
    event.preventDefault();

    var isOff = $(this).hasClass("off");

    if(!isOff) {
      $(this).addClass('off');
    } else {
      $(this).removeClass('off');
    }
  })

  $('#btn-host-exit-room').click(function(event) {
    event.preventDefault();

    var isOff = $(this).hasClass("off");

    if(!isOff) {
      $(this).addClass('off');
    } else {
      $(this).removeClass('off');
    }
  })

  // btn-host-microfone, btn-host-camera, btn-host-exit-room

  $('#btn-menu-lateral').click(function(event) {
    event.preventDefault();

    var isOff = $('.menu__lateral_sala').hasClass("off");

    if(!isOff) {
      $('.menu__lateral_sala').addClass('off').removeClass('on');
    } else {
      $('.menu__lateral_sala').removeClass('off').addClass('on');
      setTimeout(function(){
        $('.menu__lateral_sala').removeClass('on');
      }, 500);
    }
  })

  $('.mainmenu > li').click(function(event) {
    event.preventDefault();

    var isActive =  $(this).hasClass('active');

    if(!isActive) {
      $(this).addClass('active');
      $(this).children('ul.submenu').addClass('off');
    } else {
      $(this).removeClass('active');
      $(this).children('ul.submenu').removeClass('off');
    }

    $(this).parent().children('li').not(this).removeClass('active');
    var _ul = $(this).parent().children('li').not(this).children('ul.submenu.off');
    _ul.removeClass('off')
  });

  $('#btn-show-guests-controller').click(function(event) {
    event.preventDefault();

    var isActive =  $(this).hasClass('active');

    if(!isActive) {
      $(this).addClass('active');
      $('.menu__guest--container').removeClass('off');
    } else {
      $(this).removeClass('active');
      $('.menu__guest--container').addClass('off');
    }
  });

  $('.menu-camera li').click(function(event) {
    event.preventDefault();
    console.log("a")

    var isActive =  $(this).hasClass('on');

    var isMic = $(this).hasClass('mic');

    if(isActive) {
      $(this).addClass('off').removeClass('on');

      if(isMic){
        $("#img-mic").attr("src","assets/svg/icon-microfone-off.svg");
      } else {
        $("#img-cam").attr("src","assets/svg/icon-camera-off.svg");
      }
      
    } else {
      $(this).removeClass('off').addClass('on');
      if(isMic){
        $("#img-mic").attr("src","assets/svg/icon-microfone.svg");
      } else {
        $("#img-cam").attr("src","assets/svg/icon-camera.svg");
      }
    }
  });

  

  

  
  $('#btn-video').click(function(event) {
    event.preventDefault();

    var video = document.querySelector("#videoElement");
  
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err0r) {
          console.log("Something went wrong!");
        });
    }
  })

  
  $('#btn-stop-video').click(function(event) {
    var video = document.querySelector("#videoElement");

    var stream = video.srcObject;
    var tracks = stream.getTracks();
  
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }
  
    video.srcObject = null;
  });

  /*
  $(window).resize(function(){
    // console.log("resized: " + window.outerHeight)
  });*/

  function appendLoader() {
    let loader = `<div id="preloader" class="d-flex justify-content-center on-enter">
    <div class="spinner-border text-warning" style="width: 5rem; height: 5rem;" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    </div>`;

    let cont = document.querySelector('.container-fluid.preloader');

    if(cont) {
      cont.insertAdjacentHTML('beforebegin', loader)
    }
    
  }

  $('.btn-toggle-debug').click(function(event) {
    event.preventDefault();

    var isActive =  $('#preloader').hasClass('on-enter');

    if(isActive) {
      $('#preloader').removeClass('on-enter').addClass('on-leave');
    } else {
      $('#preloader').removeClass('on-leave').addClass('on-enter');
    }
  })

  appendLoader();

  $('#btn-add-user').click(function() {
    addUserToMenu();
  });

  function addUserToMenu() {
    var userContainer = document.querySelector('#add-user');

    let userTemplate = `<div class="guest">
    <div id="video-container" class="video__container">
      <div class="video__container--controller">
        <ul>
          <li id="btn-host-microfone" class="microfone"></li>
          <li id="btn-host-camera" class="camera"></li>
          <li id="btn-host-exit-room" class="exit-room"></li>
        </ul>
      </div>
      <div class="video__container--titulo orange">
        <p>Valdisnéia dos Santos</p>
        <div class="audio">
          <img src="./images/fake-audio.png" alt="audio">
        </div>
      </div>
      <video autoplay="true" id="videoElement">
      </video>
    </div>
  </div>`;

    userContainer.insertAdjacentHTML('afterbegin', userTemplate);
  }

  
  



});

