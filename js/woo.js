// 작성자 : 김우철
window.addEventListener("load", function () {
  // AOS적용
  AOS.init();
  // ==================================
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
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // highlighttxth3.addEventListener("click", function () {
  //   highlighttxtp.style.display = "block";
  // });
  // var hgaSubtitle = document.querySelectorAll(".performance-subtitle");
  // hgaSubtitle.forEach((hgaSubtitle) => {
  //   hgaSubtitle.addEventListener("click", function () {
  //     var contents = hgaSubtitle.nextElementSibling;
  //     hgaSubtitle.style.display = "block";
  //   });
  // });

  const highlightTexts = $(".highlight-txt");

  // jQuery 의 배열을 반복해서 다룸 $.each(배열, function(index, item) {})
  $.each(highlightTexts, function (index, item) {
    // 각각의 탭 메뉴를 찾는다.
    const tabMenu = $(item).find(".highlight-tab-memu");
    // 찾아놓은 탭 메뉴에서 a 태그를 찾는다.
    const tabMenu_A = $(tabMenu).find("a");
    // 각각의 탭 내용을 찾는다.
    const tabContent = $(item).find(".highlight-tab-content");
    // 찾아놓은 탭 내용에서 p 태그를 찾는다.
    const tabContent_P = $(tabContent).find("p");

    $.each(tabMenu_A, function (index_tag_a, item_tag_a) {
      $(item_tag_a).click(function (e) {
        // href 막기
        e.preventDefault();
        // a 클릭시 전체 내용을 우선 숨긴다.
        tabContent_P.hide();
        // 현재 클릭된 a 태그의 순서 번호를 이용해서
        // 내용(P)를 보여준다.
        tabContent_P.eq(index_tag_a).show();
      });
    });
  });
});
