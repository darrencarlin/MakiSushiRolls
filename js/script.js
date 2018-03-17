$(document).ready(function () {
    
    $(".header-logo").css("opacity","1")
    
    
    // Fixed
    let philosophy = $("#philosophy").offset().top;
    let rolls = $("#rolls").offset().top;
    let menu = $("#menu").offset().top;
    let location = $("#location").offset().top;
    $(function scroll() {
        let lastScroll = 100;

        $(window).scroll(function (event) {
            let st = $(this).scrollTop();
            let top = 20;

            if (st > lastScroll) {
                setTimeout(function () {
                    //$("nav").addClass("fixed");

                }, 300);
            } else if (st <= top) {
                //$("nav").removeClass("fixed");

            }

            if (st >= philosophy && st <= rolls) {
                $(".nav-philosophy").css("color", "orange");
            } else {
                $(".nav-philosophy").css("color", "#fff");
            }
            if (st >= rolls && st <= menu) {
                $(".nav-rolls").css("color", "orange");
            } else {
                $(".nav-rolls").css("color", "#fff");
            }
            if (st >= menu && st <= location) {
                $(".nav-menu").css("color", "orange");
            } else {
                $(".nav-menu").css("color", "#fff");
            }
            if (st >= location) {
                $(".nav-location").css("color", "orange");
            } else {
                $(".nav-location").css("color", "#fff");
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
    let clicks = 0;
    $(".burger").on("click", function () {
        if (clicks % 2 == 0) {
            $(this).addClass("open");
            $("nav").addClass("slide-in");
            $("body").addClass("stop-scroll"); // Potentiall Unnecessary
            document.ontouchmove = function (e) {
                e.preventDefault();
            };
        } else {
            $(this).removeClass("open");
            $("nav").removeClass("slide-in");
            $("body").removeClass("stop-scroll"); // Potentiall Unnecessary
            document.ontouchmove = function (e) {
                return true;
            };
        }
        clicks++;
    });
});