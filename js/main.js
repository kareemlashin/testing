$(document).ready(function () {
    $("#load").fadeOut(1000, function () {
        $("body,html").css("overflow", "auto")
    })
    $(".navbar  .navbar-nav .nav-link").click(function () {
        let myHref = $(this).attr("href");
        $("body,html").animate({ scrollTop: $(myHref).offset().top + 30 + 'px' }, 1000)
    })
    AOS.init();

    $(".upPage").click(function () {
        $("body ,html").animate({ scrollTop: 0 }, 2000)
    })
    var typed = new Typed('.element', {
        strings: ["  the world and people"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    let contSectionOffset = $(".contSection").offset().top;
    let ourOffset = $(".our").offset().top;
    $(window).scroll(function () {
        let myWindow = $(window).scrollTop();
        if (myWindow > ourOffset) {
            $("nav").addClass("bg-offset");
        }
        else {
            $("nav").removeClass("bg-offset");

        }
        if (myWindow > contSectionOffset) {
            function inc1() {
                let num1 = $("#oneCount").text();
                if (num1 < 200) {
                    num1++;
                    clearInterval(inc1)
                }
                $("#oneCount").text(num1)


            }
            function inc2() {
                let num2 = $("#twoCount").text();
                if (num2 < 200) {
                    num2++;
                    clearInterval(inc2)
                }
                $("#twoCount").text(num2)


            }
            function inc3() {
                let num3 = $("#threeCount").text();
                if (num3 < 200) {
                    num3++;
                    clearInterval(inc3)
                }
                $("#threeCount").text(num3)


            }

            function inc4() {
                let num4 = $("#fourCount").text();
                if (num4 < 200) {
                    num4++;
                    clearInterval(inc4)
                }
                $("#fourCount").text(num4)


            }
            setInterval(inc3, 100);
            setInterval(inc2, 100);
            setInterval(inc1, 100);
            setInterval(inc4, 100);
        }
    })




    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2031 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
})