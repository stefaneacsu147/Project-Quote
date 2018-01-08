$(window).keypress(function (e) {
  if (e.which === 32) {
    $("#quote").addClass("reset");
    $("#quote").removeClass("executed");
    $("#writer").toggleClass("fade");
    setTimeout(function () {
      $.ajax({
        crossOrigin: true,
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback",
        dataType: "jsonp"
      });
    }, 1000);
  }
});

function mycallback(json) {
  var quote = json[0];
  $("#quote").html(quote.content)
  $("#writer").html(quote.title)
  $("#quote").addClass("executed");
  $("#quote").removeClass("reset");
  $("#writer").toggleClass("fade");
}

var refreshRate = 10000;

setInterval(function () {
  window.location.reload();
}, refreshRate);

$('.random-image').hide();

$('.random-image').css({
  // serves a random image from this collection on Unsplash.com
  'background-image': 'url(https://source.unsplash.com/collection/142324/1600x900)'
}).fadeIn(1500);