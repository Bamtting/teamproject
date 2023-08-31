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

    autoplay: {
      delay: 1000,

      disableOnInteraction: true,
    },
  });
  // 스크롤 시 상단으로 이동
  $(function () {
    // 보이기 | 숨기기
    $(window).scroll(function () {
      if ($(this).scrollTop() > 900) {
        //250 넘으면 버튼이 보여짐니다.
        $(".modal-top").fadeIn();
        $(".modal-top").css("left", $("#sidebar").offset().left);
      } else {
        $(".modal-top").fadeOut();
      }
    });
    // 버튼 클릭시
    $(".modal-top").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0, // 0 까지 animation 이동합니다.
        },
        400
      ); // 속도 400 return false;
    });
  });

  // 스와이프 제어 버튼
  $(".fa-play").on("click", function () {
    $(".fa-pause").removeClass("active");
    $(this).addClass("active");
    visualswiper.autoplay.start();
    return false;
  });
  $(".fa-pause").on("click", function () {
    $(".fa-play").removeClass("active");
    $(this).addClass("active");
    visualswiper.autoplay.stop();
    return false;
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
