/* Custom Script */

(function($){ "use strict";

/*=========================================================================
        Preloader
=========================================================================*/
     // $(window).on('load', function() { 
     //        $('body').addClass("preloader_active");
     //        $('.preloader_spinner').delay(6000).fadeOut(); 
     //        $('#preloader').delay(6000).fadeOut('slow');
     //        $('body').removeClass("preloader_active");
     //    });     

/*=========================================================================
        back to top
=========================================================================*/
     $(document).ready(function(){

        // hide #back-top first
        $("#back-top").hide();
        
        // fade in #back-top
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });

            // scroll body to 0px on click
            $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 1500);
                return false;
            });
        });

    });

/*=========================================================================
        counter-down
=========================================================================*/
    jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    });
/*=========================================================================
      fittext
=========================================================================*/
    $(".slogan").fitText();
        $("#fittext2").fitText(1.2);
        $("#fittext3").fitText(1.1, { minFontSize: '50px', maxFontSize: '75px'
     });

/*=========================================================================
     scroll nav bar color effect
=========================================================================*/
$(window).scroll(function() {
  if ($(document).scrollTop() > 200) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});
 
/*=========================================================================
     wow js
=========================================================================*/
 new WOW().init();









 })(jQuery);

