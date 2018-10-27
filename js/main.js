new WOW().init();

var $corner = $(".border"),
    $window = $(window);

$window.scroll(function() {    
    var scroll = $window.scrollTop();

    if (scroll >= 790) {
        $corner.addClass("light");
    } else {
        $corner.removeClass("light");
    }
});

var $body = $("body"),
    $window = $(window);

$window.scroll(function() {    
    var scroll = $window.scrollTop();

    if (scroll >= 790) {
        $body.addClass("light");
    } else {
        $body.removeClass("light");
    }
});

document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.typed', {
        strings: ["^500Hello^500", "^500Hola^500", "^500Nín hao^500", "^500Bonjour^500", "^500Ciao^500", "^500Kónnichi wa^500", "^500Annyeonghaseyo^500", "^500Buongiorno^500"],
        typeSpeed: 40,
		loop: true
      });
});

$('.gallery').flickity({
  wrapAround: true,
  imagesLoaded: true
});