$(document).ready(function() {
    ymaps.ready(init);
    var myMap;
    function init(){
        myMap = new ymaps.Map ("map", {
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

    $("#show_map").click(function() {
        $("#map").fadeIn(1000);
        $(this).css("display","none");
        $("#hide_map").css("display","block");
    });

    $("#hide_map").click(function() {
        $("#map").fadeOut(1000);
        $(this).css("display","none");
        $("#show_map").css("display","block");
    });
    
    $("#actions").slick({
        fade:true,
        prevArrow:"<div id='prev_arrow' class='actions_arrow'></div>",
        nextArrow:"<div id='next_arrow' class='actions_arrow'></div>"
    });
    
    $("#actions2").slick({
        fade:true,
        prevArrow:"<div id='prev_arrow' class='actions_arrow'></div>",
        nextArrow:"<div id='next_arrow' class='actions_arrow'></div>"
    });
    
    $("#actions3").slick({
        fade:true,
        prevArrow:"<div id='prev_arrow' class='actions_arrow'></div>",
        nextArrow:"<div id='next_arrow' class='actions_arrow'></div>"
    });
    
    

    jQuery.scrollSpeed(100, 800);
    $("#top_slider").slick({
        dots:true,
        autoplay:true,
        fade:true,
        prevArrow:"<div class='top_slider_arrow' id='top_prev_arrow'></div>",
        nextArrow:"<div class='top_slider_arrow' id='top_next_arrow'></div>"
    });

    $("#top_prev_arrow").mouseover(function() {
        $(this).css({
            backgroundColor:"rgba(250,250,250,0.2)"
        });
    });
    $("#top_prev_arrow").mouseout(function() {
        $(this).css({
            backgroundColor:"transparent"
        });
    });

    $("#top_next_arrow").mouseover(function() {
        $(this).css({
            backgroundColor:"rgba(250,250,250,0.2)"
        });
    });
    $("#top_next_arrow").mouseout(function() {
        $(this).css({
            backgroundColor:"transparent"
        });
    });


    //$("#prev_arrow").mouseover(function() {
        //$(this).stop().animate({
            //left:"-65px"
        //})
    //});
    //$("#prev_arrow").mouseout(function() {
        //$(this).stop().animate({
            //left:"-55px"
        //})
    //});

    //$("#next_arrow").mouseover(function() {
        //$(this).stop().animate({
            //right:"-65px"
        //})
   // });
    //$("#next_arrow").mouseout(function() {
        //$(this).stop().animate({
            //right:"-55px"
        //})
    //});




    $(window).scroll(function() {
        var this_current_scroll_top = $(this).scrollTop();
        if(this_current_scroll_top !== 0 ) {
            $("#header").fadeOut(700);
            $("#header2").fadeIn(1000);
        } else {
            $("#header").fadeIn(300);
            $("#header2").fadeOut(1000);
        }

    });







    $(window).scroll(function() {
        var currentScrollTop = $(this).scrollTop();        
        if(currentScrollTop > 709) {
            $("#header2_top_menu").css({
                color:"#000"
            });
        } else {
            $("#header2_top_menu").css({
                color:"#fff"
            });
        }
    });
    
    $("label[for='developments']").click(function(){
    $(".slider").addClass("slider-hidden");
    $(".check-developments").removeClass("slider-hidden"); 

    });

    $("label[for='workshops']").click(function(){
    $(".slider").addClass("slider-hidden");
    $(".check-workshops").removeClass("slider-hidden"); 

     });
    
    $("label[for='concerts']").click(function(){
    $(".slider").addClass("slider-hidden");
    $(".check-concerts").removeClass("slider-hidden"); 

     });    
   

});


