$(document).ready(function () {

    var tp = $(".top");
    var mnv = $(".main-nav").offset().top;
    var mn = $(".main-nav");


    new WOW().init();
    //  wow js

    tp.click(function () {
        $("html,body").animate({
            scrollTop: 0,
        }, 3000);
    });
    $(window).scroll(function () {
        var a = $(this).scrollTop();
        if (a != 0) {
            tp.fadeIn();
        } else {
            tp.fadeOut();
        }

    });
    //  back to top menu

    $(window).scroll(function () {
        var b = $(this).scrollTop();
        if (mnv < b) {
            mn.addClass("sticky");
        } else {
            mn.removeClass("sticky");
        }
    });
    //  sticky menu



    $('.slick-slider').slick({
        dots: true,
        infinite: true,
        fade: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });
    //  slick slider
    $('.slider-slick').slick({
        dots: true,
        infinite: false,
        fade: false,
        arrows: false,
        speed: 300,
        autoplaySpeed: true,
        autoplaySpeed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });
    //  slick slider
    $('.venobox').venobox();

    //  veno box
    $('.team_slick').slick({
        dots: false,
        infinite: true,
        fade: false,
        arrows: false,
        speed: 300,
        autoplaySpeed: true,
        autoplaySpeed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });
    //  slick slider
    $('.slick1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: 0,
        fade: false,
        speed: 300,
        autoplaySpeed: true,
        autoplaySpeed: 300,
        infinite: true,
        asNavFor: '.slick2'
    });
    $('.slick2').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slick1',
        dots: true,
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true
    });
//          slick 


    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 200,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    //    particles particles
    
   



});


$(document).ready(function(){
     $('.ripples_plagin').ripples({

  // Image Url


  // The width and height of the WebGL texture to render to. 
  // The larger this value, the smoother the rendering and the slower the ripples will propagate.
  resolution: 256,

  // The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
  dropRadius: 20,

  // Basically the amount of refraction caused by a ripple. 
  // 0 means there is no refraction.
  perturbance: 0.04,

  // Whether mouse clicks and mouse movement triggers the effect.
  interactive: true,


  
});
})
 
