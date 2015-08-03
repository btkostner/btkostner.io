$(document).ready(function() {
  grid = function() {
    var wh = $(window).innerHeight();
    var ww = $(window).innerWidth();
    var dh = $("body").innerHeight();
    var dw = $("body").innerWidth();
    var $c = $("body").find("#grid");

    $($c).html("");

    for (var i = 0; i <= Math.floor(ww / 64); i++) {
      $($c).append("<div class='vertical' style='left: " + ((i * 64) + ((ww - (Math.floor(ww / 64) * 64)) / 2)) + "px;'></div>")
    }

    for (var i = 0; i <= Math.floor(dh / 64); i++) {
      $($c).append("<div class='horizonal' style='top: " + ((i * 64) + ((dh - (Math.floor(dh / 64) * 64)) / 2)) + "px;'></div>")
    }

    var ch = $("#container").innerHeight();
    $("#container").css({
      left: ((ww - (Math.floor(ww / 64) * 64)) / 2),
      top: ((dh - (Math.floor(dh / 64) * 64)) / 2),
      "min-height": Math.floor(wh / 64) * 64 + 1,
      height: Math.ceil(ch / 64) * 64 + 1,
      width: Math.floor(ww / 64) * 64 + 1
    });

    $(".grid").each(function() {
      var i = this;
        var ih = $(i).innerHeight();
        var iw = $(i).innerWidth();
        $(i).css({
          height: Math.ceil(ih / 64) * 64 + 1,
          width: Math.ceil(iw / 64) * 64 + 1
        });
    });
  };

  subtitle = function() {
    var x = [
      "creator of over complicated grids",
      "master of free time projects",
      "UX critique",
      "follower of efficiency"
    ];
    var i = Math.floor(Math.random() * x.length);
    var s = x[i];
    $("h2").html(s);
  };

  $(window).resize(function() {
    grid();
  });

  subtitle();
  grid();

});
