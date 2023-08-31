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
  var hgaSubtitle = document.querySelectorAll('.hga-subtitle');
  hgaSubtitle.forEach(hgaSubtitle => {
    hgaSubtitle.addEventListener("click", function () {
      var contents = hgaSubtitle.nextElementSibling;
      hgaSubtitle.style.display = "block"
    })
  })
});
