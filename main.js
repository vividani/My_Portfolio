
document.addEventListener("DOMContentLoaded", () => {

  const logo = document.querySelector("#logo");
  const circleBox = document.querySelector("#circle-box");
  const circleTrigger = document.querySelector("#circle-trigger");
  const copyright = document.querySelector("#copyright");
  const aboutBox = document.querySelector("#about-box");
  const worksBox = document.querySelector("#works-box");
  const contactBox = document.querySelector("#contact-box");

  const headerHeight = document.querySelector("#header").offsetHeight;
  const navItems = document.querySelectorAll("#nav li");

  // ========================
  // Click logo
  // ========================
  logo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  
  // ========================
  // Navigation
  // ========================
  const section = [
    null,
    "#about-box",
    "#works-box",
    "#contact-box"
  ];

  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      const top =
        index === 0
          ? 0
          : document.querySelector(section[index]).offsetTop - headerHeight;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    });
  });


  // ========================
  // Observer
  // ========================
  const lines = document.querySelectorAll('.underLine');

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      const target = entry.target;

      if(entry.isIntersecting){

        switch (target.id) {
          case "circle-trigger" :

            circleBox.classList.add("show");

            setTimeout(() => {

              copyright.classList.add("show");

            }, 300);

            break;
          
          case "about-box" :

            target.classList.add("sectionUp");

            lines.forEach((line, i) => {

              setTimeout(() => {

                line.classList.add("active");

              }, i * 500);

            });

            break;
          
          case "works-box" :

            target.classList.add("sectionUp");

            break;

          case "contact-box" :

            target.classList.add("show");

            break;
        }
        

      } else {

        switch (target.id) {
          case "circle-trigger" :

            circleBox.classList.remove("show");

            copyright.classList.remove("show");

            break;
          
          case "about-box" :

            // target.classList.remove("sectionUp");

            lines.forEach(line => {

              line.classList.remove("active");

            });

            break;

          // case "work-box" :

          //   target.classList.remove("sectionUp");

          //   break;

          case "contact-box" :

            target.classList.remove("show");

            break;
        }

      }

    });

  }, {
    threshold: 0.3 // 30% 보이면 실행
  });


  // ========================
  // Observe
  // ========================

  // 관찰 대상
  observer.observe(aboutBox);
  observer.observe(worksBox);
  observer.observe(contactBox);

  // circle용 트리거
  observer.observe(circleTrigger);

})
