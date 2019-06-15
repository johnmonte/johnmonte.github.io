//new WOW().init();

var $corner = $(".border"),
    $window = $(window);

$window.scroll(function() {    
    var scroll = $window.scrollTop();

    if (scroll >= 1820) {
        $corner.addClass("light");
    } else {
        $corner.removeClass("light");
    }
});

var $body = $("body"),
    $window = $(window);

$window.scroll(function() {    
    var scroll = $window.scrollTop();

    if (scroll >= 1820) {
        $body.addClass("light");
    } else {
        $body.removeClass("light");
    }
});

document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.typed', {
        strings: ["^500Hello^500", "^500Hola^500", "^500Nín hao^500", "^500As Salaam Alaikum^500", "^500Bonjour^500",  "^500Hallo^500", "^500Ciao^500", "^500Kónnichi wa^500", "^500Annyeonghaseyo^500", "^500Zdravstvuyte^500", "^500Namaste^500", "^500Kumusta^500"],
        typeSpeed: 40,
		loop: true
      });
});

$('.gallery').flickity({
  wrapAround: true,
  imagesLoaded: true
});

{
    const MathUtils = {
        lineEq: (y2, y1, x2, x1, currentVal) => {
            const m = (y2 - y1) / (x2 - x1);
            const b = y1 - m * x1;
            return m * currentVal + b;
        },
        lerp: (a, b, n) => (1 - n) * a + n * b,
        getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
    };
    const body = document.body;
    const docEl = document.documentElement;

    let winsize;
    const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
    calcWinsize();
    window.addEventListener('resize', calcWinsize);

    // Gets the mouse position. From http://www.quirksmode.org/js/events_properties.html#position
    const getMousePos = (ev) => {
        let posx = 0;
        let posy = 0;
        if (!ev) e = window.event;
        if (ev.pageX || ev.pageY)   {
            posx = ev.pageX;
            posy = ev.pageY;
        }
        else if (ev.clientX || ev.clientY)  {
            posx = ev.clientX + body.scrollLeft + docEl.scrollLeft;
            posy = ev.clientY + body.scrollTop + docEl.scrollTop;
        }
        return { x : posx, y : posy }
    };
    let mousepos = {x: winsize.width/2, y: winsize.height/2};
    window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));
    
    let activeTilt = {
        columns: true,
        letters: true,
    }

    // Custom cursor
    class Cursor {
        constructor(el) {
            this.DOM = {el: el};
            this.DOM.circle = this.DOM.el.querySelector('.cursor__inner--circle');
            this.bounds = this.DOM.circle.getBoundingClientRect();
            this.lastMousePos = {x:0, y:0};
            this.scale = 1;
            this.lastScale = 1;
            this.lastY = 0;
            requestAnimationFrame(() => this.render());
        }
        render() {
            this.lastMousePos.x = MathUtils.lerp(this.lastMousePos.x, mousepos.x - this.bounds.width/2, 0.15);
            this.lastMousePos.y = MathUtils.lerp(this.lastMousePos.y, mousepos.y - this.bounds.height/2, 0.15);
            this.direction = this.lastY - mousepos.y > 0 ? 'up' : 'down';
            this.lastScale = MathUtils.lerp(this.lastScale, this.scale, 0.15);
            this.DOM.circle.style.transform = `translateX(${(this.lastMousePos.x)}px) translateY(${this.lastMousePos.y}px) scale(${this.lastScale})`;
            this.lastY = mousepos.y;
            requestAnimationFrame(() => this.render());
        }
        enter() {
            this.scale = 1.5;
        }
        leave() {
            this.scale = 1;
        }
        click() {
            this.lastScale = .4;
        }
    }
	
    // Custom mouse cursor
    const cursor = new Cursor(document.querySelector('.cursor'));
    // Content elements
    const content = {
        first: document.querySelector('.content--first'),
        second: document.querySelector('.content--second')
    };
	
    // Activate the enter/leave/click methods of the custom cursor when hovering in/out on every <a> and when clicking anywhere
    [...document.querySelectorAll('a')].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter());
        link.addEventListener('mouseleave', () => cursor.leave());
    });
    document.addEventListener('click', () => cursor.click());
	
}