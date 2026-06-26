$(function(){

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

  const lines = document.querySelectorAll('.underLine');
  

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

      const target = entry.target;

      if(entry.isIntersecting){

        // circle 영역
        if(target.id === "circle-trigger"){
          $("#circle-box").addClass("show");
          setTimeout(() => {
            $("#copyright").addClass("show");
          }, 300);
        }

        // about 영역
        if(target.id === "about-box"){
          $(target).addClass("sectionUp");

          lines.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("active");
            }, i * 500);
          });
        }

        // works 영역
        if(target.id === "works-box"){
          $(target).addClass("sectionUp");
        }

        // contact 영역
        if(target.id === "contact-box"){
          $(target).addClass("show");
        }

      } else {

        if(target.id === "circle-trigger"){
          $("#circle-box").removeClass("show");
          $("#copyright").removeClass("show");
        }

        if(target.id === "about-box"){
          // $(target).removeClass("sectionUp");
          $(lines).removeClass('active');
        }

        // if(target.id === "works-box"){
        //   $(target).removeClass("sectionUp");
        // }

        if(target.id === "contact-box"){
          $(target).removeClass("show");
        }

      }

    });
  }, {
    threshold: 0.3 // 30% 보이면 실행
  });

  // 관찰 대상 등록
  observer.observe(document.querySelector("#about-box"));
  observer.observe(document.querySelector("#works-box"));
  observer.observe(document.querySelector("#contact-box"));

  // circle용 트리거
  observer.observe(document.querySelector("#circle-trigger"));



})