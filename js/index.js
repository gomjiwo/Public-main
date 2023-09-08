$(document).ready(function(){

  $(".tab li").click(function(){

    let num =$(this).index();
    let move = 240*num;

    $(".tab-header .tab-highlight").animate({left:move});
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
    
    let result=$(this).attr("data-alt");
    $(".tabContent div").removeClass("active");
    $("#" + result).addClass("active");

  });

  let $bimg = $(".ban ul");
  let $bimgli = $(".ban ul li");
  let $bbtn = $(".ban_btn ul li");
  let $bimg_w = $bimgli.width();
  let bimg_n = $bimgli.length;
  let boldidx=0;
  let bindex=0;

  function bannerImg(bindex){

    targetX=-(bindex*$bimg_w)

    $bimg.stop().animate({left:targetX},500);
    $bbtn.eq(boldidx).removeClass("active");
    $bbtn.eq(bindex).addClass("active");
    boldidx=bindex;
  };

  function bannerAuto(){

    bindex++;

    if(bindex == bimg_n){
      bindex=0;
    }
    bannerImg(bindex);
  }
  auto = setInterval(bannerAuto,4000);

  $bbtn.click(function(){

    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    bindex=$(this).index();
    bannerImg(bindex);
    auto = setInterval(bannerAuto,4000);
  });

  $(".play").hide();

  $(".stop").click(function(){
    clearInterval(auto);
    $(".stop").hide();
    $(".play").show();
  });
  $(".play").click(function(){
    auto = setInterval(bannerAuto,4000);
    $(".play").hide();
    $(".stop").show();
  });

  chk = true;
  $(".family-site dl dt").click(function(){

    if(chk){
      $(".arrow").html("<span class='material-symbols-outlined'>arrow_drop_down</span>");
      $(".family-site dd ul").slideDown();
      chk = false;
    }else{
      $(".arrow").html("<span class='material-symbols-outlined'>arrow_drop_up</span>");
      $(".family-site dd ul").slideUp();
      chk = true;
    }
    
  });

  $(".top_btn").hide();
  $("#scroll_btn").hide();

  $(window).scroll(function(){

    let scrollpos=$(this).scrollTop();
    $("#txt1").text(scrollpos);

    if(scrollpos > 350){
      $(".top_btn").fadeIn();
      $("#scroll_btn").fadeIn();
    }else{
      $(".top_btn").fadeOut();
      $("#scroll_btn").fadeOut();
    };

    if(scrollpos>=600 && scrollpos<1400){
      $("#scroll_btn ul .scb1").addClass("active");
      $("#scroll_btn ul .scb1 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul .scb1").removeClass("active");
      $("#scroll_btn ul .scb1 a .scroll_hover").removeClass("active");
    };

    if(scrollpos>=1400 && scrollpos<2200){
      $("#scroll_btn ul .scb2").addClass("active");
      $("#scroll_btn ul .scb2 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul .scb2").removeClass("active");
      $("#scroll_btn ul .scb2 a .scroll_hover").removeClass("active");
    };

    if(scrollpos>=2200 && scrollpos<2900){
      $("#scroll_btn ul .scb3").addClass("active");
      $("#scroll_btn ul .scb3 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul .scb3").removeClass("active");
      $("#scroll_btn ul .scb3 a .scroll_hover").removeClass("active");
    };

  });

  $("#scroll_btn ul .scb1").click(function(){
    $("body,html").animate({scrollTop:"900px"},100);
  });
  $("#scroll_btn ul .scb2").click(function(){
    $("body,html").animate({scrollTop:"1700px"},100);
  });
  $("#scroll_btn ul .scb3").click(function(){
    $("body,html").animate({scrollTop:"2600px"},100);
  });

  $("top_btn").click(function(){
    $("html,body").animate({scrollTop:"0"});
  });


});

