/*eslint-disable*/
$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#container');
   var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbar').css('background-color', 'white');
          $('.links li a').css('color', '#6cc4c5');
       } else {
          $('#navbar').css('background-color', 'transparent');
          $('.links li a').css('color', 'white');
       }
   });

   $(window).scroll(function(item){
     $('.fadein').each(function(item){
       var objecttop = $(this).offset().top;
       var windowbottom = $(window).scrollTop()+$(window).height();
       if(objecttop<windowbottom){
         $(this).animate({'opacity':'1'},1750);
       }
     });
   });
});
