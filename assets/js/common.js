$(function() {

	  var stickHeader = $('header .top').clone().addClass('fixed-header');





	if(window.innerWidth <= 993) {
		$(document).on('click', '.language', function(e) {
			//e.preventDefault();
			if($(this).hasClass('language__hover')) {
				$(this).removeClass('language__hover');0
			} else {
				$(this).addClass('language__hover');
			}
		});
	} else {
		$(document).on({
		    mouseenter: function () {
		        //stuff to do on mouse enter
		        $(this).addClass('language__hover');
		    },
		    mouseleave: function () {
		        //stuff to do on mouse leave
		        $(this).removeClass('language__hover');
		    }
		}, ".language");
	}

var stage = 0;
    var text = $('.collect__handle').text();

    if(text.indexOf('k')>=0||text.indexOf('к')>=0) {
        stage = Number(text.replace(/k|к/, ''))/1000;
        $('.collect__slider').css('width', (stage*100)+'%');
    } else if(text.indexOf('m')>=0) {
        stage = Number(text.replace('m', ''));
        $('.collect__slider').css('width', '100%');
    }


    $('.collect__circle').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: stage,
        emptyFill: 'rgba(0, 0, 0, .0)',
        thickness: '9',
        size: 120,
        fill: {
            // gradient: ['#3a9bff', '#6f3fff', '#ff2f78']
            image: 'img/home/header/progress/bg.png',
        }
    }).on('circle-animation-progress', function (event, progress, stepValue) {
        $(this).find('.collect__procent').html(Math.round(stepValue*100));
    });

// setTimeout(function() { $('.collect__circle').circleProgress('value', 0.7); }, 1000);
//     setTimeout(function() { $('.collect__circle').circleProgress('value', 1.0); }, 1100);
//     setTimeout(function() { $('.collect__circle').circleProgress('value', 0.8); }, 2100);





	$(function (){
	  function countdown() {
	    var now = new Date();
	    var eventDate = new Date($('.timer').attr('data-timer'));
	    var currentTime = now.getTime() + (now.getTimezoneOffset() );
	    var evenTime = eventDate.getTime();
	    var remTime = evenTime - currentTime;
	    var sec = Math.floor(remTime / 1000);
	    var min = Math.floor(sec / 60);
	    var hur = Math.floor(min / 60);
	    var day = Math.floor(hur / 24);

	    hur %= 24;
	    min %= 60;
	    sec %= 60;

	    hur = (hur < 10) ? "0" + hur : hur;
	    min = (min < 10) ? "0" + min : min;
	    sec = (sec < 10) ? "0" + sec : sec;

	    $('.seconds').text(sec);
	    $('.minutes').text(min);
	    $('.hours').text(hur);
	    $('.days').text(day);

	    setTimeout(countdown, 1000);
	  }

	  countdown();
	});

	$('.about__video_play, .rewievs__play, .video__play').magnificPopup({
		type: 'iframe',
		callbacks: {
			beforeOpen: function() {
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		midClick: true
	});




		if ($(window).width() < 1200) {
		} else {
			if ($('.collect').is(':visible')) {
			} else {
				$('.middle__items').css('max-width', '100%');
			}
		}

		if ($(window).width() < 992) {
		} else {
			if ($('.collect').is(':visible')) {
			} else {
				$('.about').css('padding-top', '230px');
			}
		}

		var controls = {
				video: $(".rewievs__video"),
				playpause: $(".rewievs__play")
			};
			controls.playpause.on('click', function(){
				if ($(this).hasClass("paused")) {
					$(this).hide();
					$(this).prev().get(0).play();
					$(this).toggleClass("paused");
					$(this).prev().attr("controls", "0");
					$(this).closest('.rewievs__item').find('.rewievs__video').css('z-index', '1000')
				}
			});
			controls.video.on('click', function(){
				$(this).next().show();
				$(this).next().toggleClass("paused");
				$(this).get(0).pause();
				$(this).removeAttr("controls", "0");
				controls.video.css('z-index', '0')
			});

			$('body').on('click', '.team__all', function(event) {
				event.preventDefault();
				$('.team__item').toggleClass('team__open');
				$('.team__all').hide(400);
			});

		$('.aworker__tabs').find('.aworker__box:not(.visible)').css({
			opacity : 0,
			position : 'absolute',
		});
		$('.aworker__buttons').delegate('.aworker__btn:not(.aworker__btn_active)', 'click', function() {
			$(this).addClass('aworker__btn_active').siblings().removeClass('aworker__btn_active')
			.parents('.aworker__tabs').find('.aworker__box').css({
				opacity: 1,
				position: 'relative',
			}).hide().eq($(this).index()).fadeIn(450);
		});


		if ($(window).width() < 1261) {
		$('.aworker__bottom').find('.aworker__bottom_box:not(.visible)').css({
			opacity : 0,
			position : 'absolute',
		});
		$('.aworker__bottom_buttons').delegate('.aworker__bottom_btn:not(.aworker__bottom_active)', 'click', function() {
			$(this).addClass('aworker__bottom_active').siblings().removeClass('aworker__bottom_active')
			.parents('.aworker__bottom').find('.aworker__bottom_box').css({
				opacity: 1,
				position: 'relative',
			}).hide().eq($(this).index()).fadeIn(450);
		});
	}

		if ($(window).width() < 1261) {
			$('.roadmap__items').slick({
				pauseOnHover: false,
				slidesToShow: 3,
				slidesToScroll: 1,
				speed: 500,
				variableWidth: true,
				centerMode: true,
				initialSlide: 5,
				infinite: false,
				prevArrow: '<div class="prev roadmap__prev"></div>',
				nextArrow: '<div class="next roadmap__next"></div>'
			});
		}

		$('.distribution__tabs').find('.distribution__box:not(.visible)').css({
			opacity : 0,
			position : 'absolute',
		});
		$('.distribution__buttons').delegate('.distribution__btn:not(.distribution__btn_active)', 'click', function() {
			$(this).addClass('distribution__btn_active').siblings().removeClass('distribution__btn_active')
			.parents('.distribution__tabs').find('.distribution__box').css({
				opacity: 1,
				position: 'relative',
			}).hide().eq($(this).index()).fadeIn(450);
		});



		$('.btn__popup').magnificPopup({
			type: 'inline',
			removalDelay: 500,
			callbacks: {
				beforeOpen: function() {
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			midClick: true
		});

	$('.whitelist input[type=checkbox]').change(function() {
			if($('.checkbox__input:checked').length == 2) {
				$('.whitelist__btn').attr('disabled', false);
			} else {
				$('.whitelist__btn').attr('disabled', true);
			}
		});



	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			//alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$.magnificPopup.close();

			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	// WORK TOKEN PRICE

	function chooseTableOfPrice () {
		var price = $('.js-price');
		var priceButton = price.find('.js-price-button');
		var priceTable = price.find('.js-price-table');

		if (!price.length) {
			return;
		}

		function getDataAttribute (element) {
			var attribute = element.data('name');
			return attribute;
		}

		function setCorrectButton (element) {
			var classContrast = 'is-contrast';

			$(element).addClass(classContrast)
				.siblings().removeClass(classContrast);
		}

		function setCorrectTable (element) {
			var activeClass = 'is-active';
			var attributeCurrent = 'priceCurrent';
			var attributeNext = 'priceNext';

			var priceTable = price.find('.js-price-table');
			var curentAttribute = getDataAttribute(element);

			if (!priceTable.length) {
				return;
			}

			if (curentAttribute === attributeCurrent) {
				priceTable.css('transform', 'translateX(0)');
			} else {
				priceTable.css('transform', 'translateX(-100%)');
			}
		}

		priceButton.on('click', function () {
			var currentButton = $(this);
			setCorrectButton(currentButton);
			setCorrectTable(currentButton);
		});
	}

	chooseTableOfPrice();
});
