$(document).ready(function(){

  $(".gnb").hover(function(){
    $(this).find(".main .sub_all").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

});