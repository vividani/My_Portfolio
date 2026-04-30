$(function(){
  //로딩 애니메이션
  $("#hero_textbox p").eq(0).fadeIn(500)
  $("#hero_textbox p").eq(1).delay(800).fadeIn(500)
  $("#hero_textbox p").eq(2).delay(1600).fadeIn(500)


  //로고 클릭
  $("#logo").click(function(){
    $("html").animate({"scrollTop":"0"}, 1000, "easeOutQuint")
  })
  
  //네비게이션 클릭
  $("#nav li").eq(0).click(function(){
    $("html").animate({"scrollTop":"0"}, 1000, "easeOutQuint")
  })
  $("#nav li").eq(1).click(function(){
    $("html").animate({"scrollTop":"1530"}, 1000, "easeOutQuint")
  })
  $("#nav li").eq(2).click(function(){
    $("html").animate({"scrollTop":"3930"}, 1000, "easeOutQuint")
  })
  $("#nav li").eq(3).click(function(){
    $("html").animate({"scrollTop":"4950"}, 1000, "easeOutQuint")
  })

  // ----------------------------------------

  $(".title").click(function(){
    alert($(window).scrollTop())
  })

  //스크롤 내릴 때
  $(window).scroll(function(){
    //copyright 원 애니메이션
    if($(this).scrollTop() > 500){
      $("#circle-background").addClass("left");
      $("#circle-background2").addClass("right");

    }else{
      $("#circle-background").removeClass("left");
      $("#circle-background2").removeClass("right");

    }

    //프로필 위로 애니메이션
    if($(this).scrollTop() > 1300){
      $("#about-box").addClass("profileUp")

    }else{
      $("#about-box").removeClass("profileUp")

    }

    //작업 애니메이션
    if($(this).scrollTop() > 4000){
      $("#works-box").addClass("profileUp");
      
    }else{
      $("#works-box").removeClass("profileUp");

    }


  })

})