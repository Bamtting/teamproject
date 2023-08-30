// 작성자 : 김우철
window.addEventListener("load", function () {
  // design
  //   const designSwiper = new Swiper("클래스명", {옵션})
  const designSwiper = new Swiper(".designswiper", {
    effect: "cards",
    grabCursor: true,
  });
  // space

  const spaceimage1 = document.getElementById("image1");
  const spaceimage2 = document.getElementById("image2");

  const spacebutton1 = document.getElementById("button1");
  const spacebutton2 = document.getElementById("button2");

  spacebutton1.addEventListener("click", () => {
    spaceimage1.style.display = "block";
    spaceimage2.style.display = "none";
  });

  spacebutton2.addEventListener("click", () => {
    spaceimage1.style.display = "none";
    spaceimage2.style.display = "block";
  });
  // ===========================================
  // highlight
  var highlightswiper = new Swiper(".highlightswiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  // highlighttxth3.addEventListener("click", function () {
  //   highlighttxtp.style.display = "block";
  // });
     // 클릭 이벤트 핸들러 함수
     function addClassToElements() {
      // 모든 클래스를 추가할 대상 요소들을 선택합니다.
      var elements = document.querySelectorAll('.performance-subtitle');

      // 요소들에 클래스를 추가합니다.
      elements.forEach(function(element) {
          element.classList.add('active');
      });
  }

  // 클릭 이벤트를 감지하고 함수를 실행합니다.
  document.addEventListener('click', addClassToElements);
});
