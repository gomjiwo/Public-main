$(document).ready(function(){
  let $img=$(".mvtext ul li");
  let oldidx=0;
  let idx=0;
  let img_n=$img.length;

  function changeImg(idx){

    if(oldidx != idx){
      $img.eq(oldidx).stop().fadeOut("500");
      $img.eq(idx).stop().fadeIn("500");
    }
    oldidx=idx;
  };

  function changeAuto(){

    idx++;
    if(idx > img_n-1){
      idx=0;
    }
    changeImg(idx);
  }
  timer=setInterval(changeAuto,4000);



});