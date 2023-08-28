// 작성자 : 김우철
window.addEventListener("load", function () {
  // design
  //   const designSwiper = new Swiper("클래스명", {옵션})
  const designSwiper = new Swiper(".designswiper", {
    effect: "cards",
    grabCursor: true,
  });
  // space
  var swiper = new Swiper(".spaceSwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
});
