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
      delay: 2500,

      disableOnInteraction: true,
    },
  });
  // 스크롤 시 상단으로 이동
  $(function () {
    // 보이기 | 숨기기
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) {
        $(".modal-top").fadeIn();
        $(".modal").fadeIn();
      } else {
        $(".modal-top").fadeOut();
        $(".modal").fadeOut();
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
  const videobc = this.document.querySelector(".videos");
  // 비디오 파일
  const videos = document.querySelector("video");
  videos.currentTime = 0;
  videos.pause();

  videoBtn.addEventListener("click", function () {
    // 비디오 효과 div 숨기기
    videobc.style.backgroundColor = "#000";
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

  // 디자인 스크롤

  // "디자인" 메뉴 항목과 대상 섹션을 선택합니다.
  var designMenuItem = $("ul.header-menu-box li:contains('디자인') a");
  var designSection = $("section.design.clearfix");

  // 메뉴 항목을 클릭할 때 스크롤 애니메이션을 적용합니다.
  designMenuItem.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: designSection.offset().top,
      },
      1000
    );
  });

  // 실내공간
  var spaceMenuItem = $("ul.header-menu-box li:contains('실내공간') a");
  var spaceSection = $("section.space.clearfix");

  spaceMenuItem.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: spaceSection.offset().top,
      },
      1000
    );
  });
  // FLUX
  var fluxMenuItem = $("ul.header-menu-box li:contains('FLUX') a");
  var fluxSection = $("section.flux.clearfix");

  fluxMenuItem.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: fluxSection.offset().top,
      },
      1000
    );
  });
  // 기능
  var highlightMenuItem = $("ul.header-menu-box li:contains('기능') a");
  var highlightSection = $("section.highlight.clearfix");

  highlightMenuItem.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: highlightSection.offset().top,
      },
      1000
    );
  });
  // 갤러리
  var galleryMenuItem = $("ul.header-menu-box li:contains('갤러리') a");
  var gallerySection = $("section.gallery.clearfix");

  galleryMenuItem.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: gallerySection.offset().top,
      },
      1000
    );
  });
  // 뉴스
  var newsMenuItem = $("ul.header-menu-box li:contains('뉴스') a");
  var newsSection = $("section.news.clearfix");

  newsMenuItem.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: newsSection.offset().top,
      },
      1000
    );
  });
  // 리뷰
  var reviewMenuItem = $("ul.header-menu-box li:contains('리뷰') a");
  var reviewSection = $("section.review.clearfix");

  reviewMenuItem.click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: reviewSection.offset().top,
      },
      1000
    );
  });
});
