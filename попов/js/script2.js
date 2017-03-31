$(document).ready(function(){ 
  $('.head-slider').slick({
      centerMode: true,
  centerPadding: '300px',
  slidesToShow: 1,
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
       prevArrow:'<div class="PrevArrow"></div>',
       nextArrow:'<div class="NextArrow"></div>',
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
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
 
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    
    
    
    
    
     $(".menu-slider-text").css({display:"none"});
        var active_sliders = $('.slick-active');
        var needed_slide = active_sliders.eq(2);
        var needed_slide_id = needed_slide.attr('id');
        
         if (needed_slide_id == 1){            
            $('#1t').css({display:"block"});
            }
        if (needed_slide_id == 2){            
            $('#2t').css({display:"block"});
        }
        if (needed_slide_id == 3){            
            $('#3t').css({display:"block"});
        }        
        if (needed_slide_id == 4){           
            $('#4t').css({display:"block"});
        }
        if (needed_slide_id == 5){            
            $('#5t').css({display:"block"});
        }
        if (needed_slide_id == 6){            
            $('#6t').css({display:"block"});
        }        
   
    
    
    $(".slick-arrow").click(function() {
    $(".menu-slider-text").css({display:"none"});
        var active_sliders = $('.slick-active');
        var needed_slide = active_sliders.eq(2);
        var needed_slide_id = needed_slide.attr('id');
        
         if (needed_slide_id == 1){            
            $('#1t').css({display:"block"});
            }
        if (needed_slide_id == 2){            
            $('#2t').css({display:"block"});
        }
        if (needed_slide_id == 3){            
            $('#3t').css({display:"block"});
        }        
        if (needed_slide_id == 4){           
            $('#4t').css({display:"block"});
        }
        if (needed_slide_id == 5){            
            $('#5t').css({display:"block"});
        }
        if (needed_slide_id == 6){            
            $('#6t').css({display:"block"});
        }        
        
    });    
    
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