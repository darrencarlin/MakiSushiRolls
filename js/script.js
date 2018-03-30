$(document).ready(function() {
    
    let clicks = 0;
    
    $('a').click(function() {
       
		$('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
  
        }, 1000);
        $(".burger").removeClass("open");
        $("nav").removeClass("slide-in");
        $("body").removeClass("stop-scroll");
        clicks = 0
		return !1
		
	})
	$(".header-logo").css("opacity", "1");
	let review = $(".review");
	displayReviews();
	var reviewTimer = setInterval(displayReviews, 5000);

	function displayReviews() {
		var randomnumber = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
		review[randomnumber].style.opacity = "1";
		setTimeout(function() {
			review[randomnumber].style.opacity = "0";
		}, 5000);
	}
	// Fixed
	let philosophy = $("#philosophy").offset().top;
	let rolls = $("#rolls").offset().top;
	let menu = $("#menu").offset().top;
	let location = $("#location").offset().top;
	let reviews = $("#reviews").offset().top;
	let order = $("#order").offset().top;
	$("#reviewsContainer").on('touchmove touchstart touchend', function(e) {
		let x = $(this).scrollLeft()
		if (x > 950) {
			$(".element").attr('class', 'fas fa-angle-double-left element');
		} else if (x < 50) {
			$(".element").attr('class', 'fas fa-angle-double-right element');
		}
	});
	$(function scroll() {
		let lastScroll = 100;
		$(window).scroll(function(event) {
			console.log($("#reviewsContainer").scrollLeft());
			let st = $(this).scrollTop();
			let top = 20;
			if (st > lastScroll) {
				setTimeout(function() {}, 300);
			} else if (st <= top) {}
			if (st < philosophy && st <= rolls) {
				$(".nav-philosophy").css("color", "orange");
			} else {
				$(".nav-philosophy").css("color", "#fff");
			}
			if (st > reviews && st < rolls) {
				$(".nav-reviews").css("color", "orange");
			} else {
				$(".nav-reviews").css("color", "#fff");
			}
			if (st >= rolls && st < menu) {
				$(".nav-rolls").css("color", "orange");
			} else {
				$(".nav-rolls").css("color", "#fff");
			}
			if (st > menu && st < location) {
				$(".nav-menu").css("color", "orange");
			} else {
				$(".nav-menu").css("color", "#fff");
			}
			if (st > location && st < order) {
				$(".nav-location").css("color", "orange");
			} else {
				$(".nav-location").css("color", "#fff");
			}
			if (st > order) {
				$(".nav-order").css("color", "orange");
			} else {
				$(".nav-order").css("color", "#fff");
			}
			lastScroll = st;
		});
	});
	// Border Top Open Indicator
	var date = new Date();
	var hours = date.getHours();
	var days = date.getDay();
	var borderTop = $("#borderTop");
	var aTag = $("#openHours");
	var iTag = $("#i");
	var timer = setInterval(timer, 1000);

	function timer() {
		if (hours >= 9 && hours < 18 && days > 0) {
			borderTop.addClass("open-gradient");
		} else {
			borderTop.addClass("closed-gradient");
		}
	}

	$(".burger").on("click", function() {
       
		if (clicks % 2 == 0) {
			$(this).addClass("open");
			$("nav").addClass("slide-in");
			$("body").addClass("stop-scroll"); // Potentiall Unnecessary
			document.ontouchmove = function(e) {
				e.preventDefault();
			};
		} else {
			$(this).removeClass("open");
			$("nav").removeClass("slide-in");
			$("body").removeClass("stop-scroll"); // Potentiall Unnecessary
			document.ontouchmove = function(e) {
				return true;
			};
        }
        
		clicks++;
	});
});