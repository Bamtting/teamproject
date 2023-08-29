window.addEventListener("load", function () {
  var visualswiper = new Swiper(".visual-mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 비디오 제어
  const videoPoster = document.querySelector(".videos-poster");
  const videoBtn = document.querySelector(".video-btn");
  const videoBox = document.querySelector(".video-box");
  // 비디오 파일
  const videos = document.querySelector("video");
  videos.currentTime = 0;
  videos.pause();

  videoBtn.addEventListener("click", function () {
    // 비디오 효과 div 숨기기
    videoPoster.classList.add("video-box-hide");
    // 비디오 div 보여주기
    videoBox.classList.add("video-active");
    // 비디오 실행하기
    videos.currentTime = 0;
    videos.play();
  });
  // 메뉴판 보여주기
  $(".footer-family-inner").click(function () {
    var familyBox = $(this).next(".footer-family-box");

    // familyBox 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
    if (familyBox.is(":visible")) {
      familyBox.slideUp();
    } else {
      familyBox.slideDown();
    }
  });
});
