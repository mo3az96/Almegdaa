$(window).on("load", function () {
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
    });
});
$(document).ready(function () {

    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");

        $('.mo-menu-icon').click(function () {
            $(".navbar-cont").fadeIn(400);
            $(".nav-ul-cont").addClass("nav-in");
            $("body").toggleClass("overflow");
            $(".lang").show();
        });
        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(500);
            $("body").toggleClass("overflow");
            $('.search-input').focus();
        });
        $('.navbar-cont, .close-btn, .search-form').click(function () {
            $(".navbar-cont").fadeOut(400);
            $(".nav-ul-cont").removeClass("nav-in");
            $("body").toggleClass("overflow");
            $(".search-form").fadeOut(500);
            $(".lang").hide();
        });
        $('.mo-navbar, .search-cont').click(function (e) {
            e.stopPropagation();
        });

    }
    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
    })



    var mainswiper = new Swiper('.main-slider .swiper-container', {
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
        },
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            500: {
                navigation: false
            },
        }
    });

    var productsswiper = new Swiper('.products .Product-slider', {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.products .swiper-button-next',
            prevEl: '.products .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
                pagination: {
                    el: '.products .swiper-pagination',
                    clickable: true,
                },
            },
            991: {
                slidesPerView: 3,
                navigation: false,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

});