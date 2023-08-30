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
// highlight
var highlightswiper = new Swiper(".highlight-mySwiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
});