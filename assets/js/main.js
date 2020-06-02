(function ($) {
	"use strict";

	$('.example-opensingle').beefup({
	    openSingle: true,
	});

    jQuery(document).ready(function($){



        jQuery('header nav').meanmenu({

            meanScreenWidth: "767",
            meanRemoveAttrs: true,
            meanMenuCloseSize: "30px",
            onePage: true
        });


        // SMOOTH SCROLLING
        $(function() {
            $("#mainmenu a[href*='#'], a[href*='#']").bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1250);
                event.preventDefault();

            });
        });


        /*----------------------------
            SCROLL TO TOP
        ------------------------------*/
            $(window).scroll(function () {
                var $totalHeight = $(window).scrollTop();
                var $scrollToTop = $(".scrolltotop");
                if ($totalHeight > 300) {
                    $(".scrolltotop").fadeIn();
                } else {
                    $(".scrolltotop").fadeOut();
                }

                if ($totalHeight + $(window).height() === $(document).height()) {
                    $scrollToTop.css("bottom", "90px");
                } else {
                    $scrollToTop.css("bottom", "20px");
                }
            });


          //STICKY NAV

        $("#sticker").sticky({
            topSpacing:-5,
        });

          // prettyPhoto

        $(".mfp-iframe").prettyPhoto();


         //WOW ANIMATION

           new WOW().init();


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();


        //NICE SELECT

        $('select').niceSelect();


        /*===================================*
            05. BACKGROUND ANIMATION JS
            *===================================*/


             $('.rodmap-carsoule').owlCarousel({
                 loop: false,
                 margin:30,
                 nav: true,
                 navText: ["<span class='ti-angle-left'>", "<span class='ti-angle-right'>"],
                 responsive: {
                     0: {
                         items: 1,

                     },
                     380: {
                         items: 2,
                         margin: 15,
                     },
                     600: {
                         items: 3
                     },
                     1000: {
                         items: 5
                     },
                     1199: {
                         items: 5
                     }
                 }
             });

        //CAROUSEL

        $(".advisory-carosul-wrapper").owlCarousel({
                items:4,
                loop:true,
                dots:true,
                nav:false,
                autoplay:false,
                mouseDrag:false,
                margin:30,
                responsive:{
                    0:{
                        items:1,
                        dots:false,
                        nav:true,
                         navText:["<span class='ti-angle-left'>", "<span class='ti-angle-right'>"],
                    },
                    600:{
                        items:3,
                        dots:false,
                        autoplay:true,
                        mouseDrag:true,
                        nav:true,
                        navText:["<span class='ti-angle-left'>", "<span class='ti-angle-right'>"],
                    },
                    1000:{
                        items:4,
                    }
                }
          });//CAROUSEL

        $(".logo-carsoule").owlCarousel({
                items:5,
                loop:true,
                dots:false,
                nav:false,
                autoplay:true,
                mouseDrag:true,
                margin:30,
                responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:3,
                    },
                    1000:{
                        items:5,
                    }
                }
          });



        //PREMENT DIV HOVER MOVE

          $(document).on('mousemove', function(e){
            $('.light').css({
               left:  e.pageX - 300,
               top:   e.pageY - 300
            });
        });

            var el = $('.js-tilt-container');

            el.on('mousemove', function(e){
                    const {left, top} = $(this).offset();
                    const cursPosX = e.pageX - left;
                    const cursPosY = e.pageY - top;
                    const cursFromCenterX = $(this).width()  - cursPosX;
                    const cursFromCenterY = $(this).height()  - cursPosY;


                    $(this).css('transform','perspective(500px) rotateX('+ (cursFromCenterY / 10) +'deg) rotateY('+ -(cursFromCenterX / 10) +'deg) translateZ(10px)');

                  const invertedX = Math.sign(cursFromCenterX) > 0 ? -Math.abs( cursFromCenterX ) : Math.abs( cursFromCenterX );

                  //Parallax transform on image
                  $(this).find('.js-perspective-neg').css('transform','translateY('+ ( cursFromCenterY / 10) +'px) translateX('+ -(invertedX  / 10) +'px) scale(1.15)');

                    $(this).removeClass('leave');
            });

                el.on('mouseleave', function(){
                    $(this).addClass('leave');
            });


    });


                    $('.tab-links a').click(function (e) {
                      e.preventDefault()
                      $(this).tab('show')
                    })






    jQuery(window).load(function(){


    });


}(jQuery));
