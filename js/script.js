$(document).ready(function () {
    
    $(".header-logo").css("opacity","1");
    
    
    // Fixed
    let philosophy = $("#philosophy").offset().top;
    let rolls = $("#rolls").offset().top;
    let menu = $("#menu").offset().top;
    let location = $("#location").offset().top;
    let reviews = $("#reviews").offset().top;
   
    $("#reviewsContainer").on('touchmove touchstart touchend', function(e){
        
        let x = $(this).scrollLeft()
        if (x > 950) {
            $(".element").attr('class', 'fas fa-angle-double-left element');
            
        } else if ( x < 50) {
            $(".element").attr('class', 'fas fa-angle-double-right element');
            
        }
    });
    
    


    $(function scroll() {
        let lastScroll = 100;
        
       
        $(window).scroll(function (event) {
            
            console.log($("#reviewsContainer").scrollLeft());
         
            let st = $(this).scrollTop();
            let top = 20;

            if (st > lastScroll) {
                setTimeout(function () {
                    //$("nav").addClass("fixed");

                }, 300);
            } else if (st <= top) {
                //$("nav").removeClass("fixed");

            }

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
            if (st > rolls && st < menu) {
                $(".nav-rolls").css("color", "orange");
            } else {
                $(".nav-rolls").css("color", "#fff");
            }
            if (st > menu && st < location) {
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