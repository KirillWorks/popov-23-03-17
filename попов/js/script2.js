$(document).ready(function () {
    $('.head-slider').slick({
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 1,
        prevArrow: '<div class="PrevArrowTop"></div>',
        nextArrow: '<div class="NextArrowTop"></div>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
    }
  ]
    });

    $('.menu-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="PrevArrow"></div>',
        nextArrow: '<div class="NextArrow"></div>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
    }
  ]
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });





    $(".menu-slider-text").css({
        display: "none"
    });
    var active_sliders = $('.slick-active');
    var needed_slide = active_sliders.eq(2);
    var needed_slide_id = needed_slide.attr('id');

    if (needed_slide_id == 1) {
        $('#1t').css({
            display: "block"
        });
    }
    if (needed_slide_id == 2) {
        $('#2t').css({
            display: "block"
        });
    }
    if (needed_slide_id == 3) {
        $('#3t').css({
            display: "block"
        });
    }
    if (needed_slide_id == 4) {
        $('#4t').css({
            display: "block"
        });
    }
    if (needed_slide_id == 5) {
        $('#5t').css({
            display: "block"
        });
    }
    if (needed_slide_id == 6) {
        $('#6t').css({
            display: "block"
        });
    }




    /* Закрытие меню */

    
    $('.aside-after').click(function () { //выбираем класс icon-close и метод click

        $('aside').animate({ //выбираем класс menu и метод animate

            left: '-125px'
            /* при клике на крестик меню вернется назад в свое
                          положение и скроется */

        }, 100); //скорость движения меню в мс
        $('.aside-after').addClass('aside-after-hidden');
        $('.aside-after2').removeClass('aside-after-hidden');
        $('.col-md-2').addClass('col-md-1');
        $('.col-md-2').removeClass('col-md-2');
        $('.col-md-10').addClass('col-md-11');
        $('.col-md-10').removeClass('col-md-10');
    });

    
    
    $('.aside-after2').click(function () { //выбираем класс icon-close и метод click
        $('aside').animate({ //выбираем класс menu и метод animate

            left: '0px'
            /* при клике на крестик меню вернется назад в свое
                          положение и скроется */

        }, 300); //скорость движения меню в мс
        $('.aside-after').removeClass('aside-after-hidden');
        $('.aside-after2').addClass('aside-after-hidden');
        $('.col-md-1').addClass('col-md-2');
        $('.col-md-2').removeClass('col-md-1');
        $('.col-md-11').addClass('col-md-10');
        $('.col-md-10').removeClass('col-md-11');
    });


    $(".slick-arrow").click(function () {
        $(".menu-slider-text").css({
            display: "none"
        });
        var active_sliders = $('.slick-active');
        var needed_slide = active_sliders.eq(2);
        var needed_slide_id = needed_slide.attr('id');

        if (needed_slide_id == 1) {
            $('#1t').css({
                display: "block"
            });
        }
        if (needed_slide_id == 2) {
            $('#2t').css({
                display: "block"
            });
        }
        if (needed_slide_id == 3) {
            $('#3t').css({
                display: "block"
            });
        }
        if (needed_slide_id == 4) {
            $('#4t').css({
                display: "block"
            });
        }
        if (needed_slide_id == 5) {
            $('#5t').css({
                display: "block"
            });
        }
        if (needed_slide_id == 6) {
            $('#6t').css({
                display: "block"
            });
        }

    });
    var closed = false;
    $('.map-box').click(function () {
        $(this).removeClass('not_loaded');
        //        $('ymaps').show();
        if ($(window).width() <= 414) {
            $('.map-box').css({
                width: '255px',
                height: '255px'
            })
        } else {
            $('.map-box').css({
                width: '520px',
                height: '520px'
            })
        }
        $('.close-map').css({
            display: 'block'
        })
        $('.map-box > a').css({
            display: 'none'
        })

    });

    $('.close-map').click(function () {
        $('.map-box')
            .addClass('not_loaded')
            .css({
                width: '120px',
                height: '120px'
            });
        $(this).css({
            display: 'none'
        })

    });


    ymaps.ready(init);
    var myMap;

    function init() {
        myMap = new ymaps.Map("map", {
            center: [55.437717, 65.328638],
            zoom: 15
        });
        mamamia = new ymaps.Placemark([55.437187, 65.315853], {
            hintContent: 'МАММА МИА!'
        });

        marani = new ymaps.Placemark([55.436311, 65.317877], {
            hintContent: 'Марани!'
        });

        mishell = new ymaps.Placemark([55.438977, 65.349729], {
            hintContent: 'Мишель!'
        });

        record = new ymaps.Placemark([55.437103, 65.316609], {
            hintContent: 'Рекорд!'
        });

        myMap.geoObjects.add(mamamia);
        myMap.geoObjects.add(marani);
        myMap.geoObjects.add(mishell);
        myMap.geoObjects.add(record);
    }

    $("#show_map").click(function () {
        $("#map").fadeIn(1000);
        $(this).css("display", "none");
        $("#hide_map").css("display", "block");
    });

    $("#hide_map").click(function () {
        $("#map").fadeOut(1000);
        $(this).css("display", "none");
        $("#show_map").css("display", "block");
    });


    $("label[for='developments']").click(function () {
        $(".slider").addClass("slider-hidden");
        $(".check-developments").removeClass("slider-hidden");

    });

    $("label[for='workshops']").click(function () {
        $(".slider").addClass("slider-hidden");
        $(".check-workshops").removeClass("slider-hidden");

    });

    $("label[for='concerts']").click(function () {
        $(".slider").addClass("slider-hidden");
        $(".check-concerts").removeClass("slider-hidden");

    });





});
