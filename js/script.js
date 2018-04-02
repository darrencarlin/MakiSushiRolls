$(document).ready(function () {

	let clicks = 0;

	$('a').click(function () {

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1000);
		$("body").removeClass("stop-scroll");
		$(".burger").removeClass("open");
		$("nav").removeClass("slide-in");

		clicks = 0
		return !1

	})

	$(".header-logo").css("opacity", "1");

	let randomnumber1 = Math.floor(Math.random() * (4 - 0 + 1)) + 1;
	let randomnumber2 = Math.floor(Math.random() * (4 - 0 + 1)) + 1;
	let answer = randomnumber1 + randomnumber2;
	let placeholder = `What is ${randomnumber1} + ${randomnumber2} ?`;
	$(".validator").attr("placeholder", placeholder);
	let review = $(".review");
	var reviewTimer = setInterval(displayReviews, 6000);


	function displayReviews() {
	
		var randomnumber = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
		review[randomnumber].style.opacity = "1";
		setTimeout(function () {
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
	let width = $(window).width();
	$(function scroll() {
		let lastScroll = 100;
		$(window).scroll(function (event) {

			let st = $(this).scrollTop();
			let top = 20;

			if (st > lastScroll && width > 700) {
				setTimeout(function () {
					$("nav").css("opacity", "0");
					$("nav").css("pointer-events", "none");
				}, 300);
			} else if (st <= lastScroll) {
				$("nav").css("opacity", "1");
				$("nav").css("pointer-events", "initial");
			}

			lastScroll = st;
		});
	});


	if (width > 700) {
		displayReviews();
	}

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
			$(".open-closed").html("<small><b>We are open, come get some sushi!</b></small>");
			$(".open-closed").css("opacity", "1");   
		} else {
			borderTop.addClass("closed-gradient");
			$(".open-closed").html("<small><b>We are closed :( </b></small>");
			$(".open-closed").css("opacity", "1");  
		}
		setTimeout(adjustHeight, 3000);
	}
	
	function adjustHeight() {
		$(".open-closed").css("opacity", "0");
		setTimeout(function(){
			$(".border-top").css("height", "5px"); 
		},300)
	}

	$(".burger").on("click", function () {

		if (clicks % 2 == 0) {
			$(this).addClass("open");
			$("nav").addClass("slide-in");
			$("body").addClass("stop-scroll"); // Potentiall Unnecessary
			// document.ontouchmove = function (e) {
			// 	e.preventDefault();
			// };
		} else {
			$(this).removeClass("open");
			$("nav").removeClass("slide-in");
			$("body").removeClass("stop-scroll"); // Potentiall Unnecessary
			// document.ontouchmove = function (e) {
			// 	return true;
			// };
		}

		clicks++;
	});


	/**************** 
	 * AJAX Request * 
	 ****************/

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$('form').submit(function (e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		let guess = parseInt($(".validator").val());
		if (guess === answer) {

			// Serialize the form data.
			var formData = $('form').serialize();

			// Submit the form using AJAX.
			$.ajax({
					type: 'POST',
					url: $('form').attr('action'),
					data: formData
				})
				.done(function (response) {
					// Add success text to div
					$('#formMessages').text('Thanks for your message, Ill be back to you as soon as possible!');
					// Clear the form
					$('#name, #email, #message').val('');
					// Re-enter placeholders.
					$('input[name=name]').attr('placeholder', 'Name:');
					$('input[name=email]').attr('placeholder', 'Email:');
					$('input[name=message]').attr('placeholder', 'Your Message:');

				})
				.fail(function (data) {

					// Set the message text.
					if (data.responseText !== '') {
						$('#formMessages').text(data.responseText);
					} else {
						$('#formMessages').text('Oops! An error occured and your message could not be sent.');
					}
				});
			//} else {
			//    $('#formMessages').text('Oops! The sum was wrong');
			// }
		} else {
			$('#formMessages').text('Oops! Sum Error');
			$('.validator').val('');
		}

	});

});