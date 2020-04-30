// on load
$(function () {

  // make scroll
  $("a.scroll-link").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 500);
  });

});

