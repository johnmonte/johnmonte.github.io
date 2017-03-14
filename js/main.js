new WOW().init();

document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.typed', {
        strings: ["John Monte is a self-taught designer with over a decade of experience, solving problems through curiosity and good design."],
        typeSpeed: 0,
      });
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

$('#mail').hover(function(){
	// here you can use whatever replace you want
	var newHref = $(this).attr('href').replace('spam', 'com');
	$(this).attr('href', newHref);
});