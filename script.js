/*eslint-disable*/
$(document).ready(function(){

  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    }
  });

  var flex1w = $('.feat').width();
  $('.feat').css({'height':flex1w+'px'});
  var flex2w = $('.feat2').width();
  $('.feat2').css({'height':flex2w+'px'}); 

   var scroll_start = 0;
   var startchange = $('#container');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbar').css('background-color', 'white');
          $('a').removeClass('menubefore').addClass('menuafter');
       }
       else {
          $('#navbar').css('background-color', 'transparent');
          $('a').removeClass('menuafter').addClass('menubefore');
       }
   });

   $(window).scroll(function(item){
     $('.fadein').each(function(item){
       var objecttop = $(this).offset().top;
       var windowbottom = $(window).scrollTop()+$(window).height();
       if(objecttop<windowbottom){
         $(this).animate({'opacity':'1'},750);
       }
     });
   });

   $(window).scroll(function(item){
     $('.fadein2').each(function(item){
       var objecttop = $(this).offset().top;
       var windowbottom = $(window).scrollTop()+$(window).height();
       if(objecttop<windowbottom){
         $(this).animate({'opacity':'1'},1000);
       }
     });
   });
});
