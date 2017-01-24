new WOW().init();

$('#type').typeIt({
     speed: 50,
     autoStart: false
});

var $corner = $(".border"),
    $window = $(window);

$window.scroll(function() {    
    var scroll = $window.scrollTop();

    if (scroll >= 400) {
        $corner.addClass("light");
    } else {
        $corner.removeClass("light");
    }
});

var $body = $("body"),
    $window = $(window);

$window.scroll(function() {    
    var scroll = $window.scrollTop();

    if (scroll >= 400) {
        $body.addClass("light");
    } else {
        $body.removeClass("light");
    }
});