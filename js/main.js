new WOW().init();

var $corner = $(".border"),
    $window = $(window);

$window.scroll(function() {    
    var scroll = $window.scrollTop();

    if (scroll >= 390) {
        $corner.addClass("light");
    } else {
        $corner.removeClass("light");
    }
});

var $body = $("body"),
    $window = $(window);

$window.scroll(function() {    
    var scroll = $window.scrollTop();

    if (scroll >= 390) {
        $body.addClass("light");
    } else {
        $body.removeClass("light");
    }
});