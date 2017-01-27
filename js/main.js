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

$('#lnkMail').hover(function(){
	// here you can use whatever replace you want
	var newHref = $(this).attr('href').replace('spam', 'com');
	$(this).attr('href', newHref);
});