$(function (){
    $('.sag .h6').on('click',function (){
        $('.sag ul ul').stop().slideUp();
        $(this).next('ul').stop().slideToggle();
    });
  
  
  
});