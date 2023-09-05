window.addEventListener("load", function () {
  // select 요소를 가져옵니다.
  var selectElement = document.getElementById("carValue");
  // 이미지가 나타날 곳을 가져옵니다.
  var carImage = document.getElementById("carImage");

  // select 요소의 변경 이벤트를 감지하고 이미지를 업데이트합니다.
  selectElement.addEventListener("change", function () {
    var selectedCar = selectElement.value; // 선택된 차량 값 가져오기

    // 선택된 차량에 따라 이미지 업데이트
    if (selectedCar === "Venue") {
      carImage.innerHTML =
        '<img src="images/testcar.png" alt="Venue 차량 이미지">';
    } else {
      carImage.innerHTML = ""; // 선택한 차량에 해당하지 않으면 이미지 삭제
    }
  });
  // 가상의 지역 데이터
  const regions = [
    { id: "all", name: "전체" },
    { id: "seoul", name: "서울" },
    { id: "gangwon", name: "강원" },
    { id: "gyeonggi", name: "경기" },
    { id: "gyeongnam", name: "경남" },
    { id: "gyeongbuk", name: "경북" },
    { id: "gwangju", name: "광주" },
    { id: "daegu", name: "대구" },
    { id: "busan", name: "부산" },
    { id: "ulsan", name: "울산" },
    { id: "incheon", name: "인천" },
    { id: "jeonbuk", name: "전북" },
    { id: "chungnam", name: "충남" },
    { id: "chungbuk", name: "충북" },
  ];

  // 가상의 지역 라운지 데이터
  const loungeData = {
    seoul: [
      "강동(EV스테이션)",
      "드라이빙라운지 성수",
      "드라이빙라운지 용산",
      "드라이빙라운지 목동",
      "드라이빙라운지 미아",
    ],
    gangwon: ["드라이빙라운지 원주"],
    gyeonggi: [
      "드라이빙라운지 동탄",
      "드라이빙라운지 수원",
      "드라이빙라운지 안양",
      "드라이빙라운지 안산",
      "드라이빙라운지 의정부",
      "드라이빙라운지 일산",
      "드라이빙라운지 분당",
    ],
    gyeongnam: ["드라이빙라운지 창원"],
    gyeongbuk: ["드라이빙라운지 포항"],
    gwangju: ["드라이빙라운지 광주"],
    daegu: ["드라이빙라운지 대구서부", "드라이빙라운지 대구동부"],
    busan: ["드라이빙라운지 부산동부", "드라이빙라운지 부산중앙"],
    ulsan: ["드라이빙라운지 울산"],
    incheon: ["드라이빙라운지 인천서부", "드라이빙라운지 인천동부"],
    jeonbuk: ["드라이빙라운지 전주"],
    chungnam: ["드라이빙라운지 천안아산"],
    chungbuk: ["드라이빙라운지 청주"],
    all: [
      "강동(EV스테이션)",
      "드라이빙라운지 성수",
      "드라이빙라운지 용산",
      "드라이빙라운지 목동",
      "드라이빙라운지 미아",
      "드라이빙라운지 원주",
      "드라이빙라운지 동탄",
      "드라이빙라운지 수원",
      "드라이빙라운지 안양",
      "드라이빙라운지 안산",
      "드라이빙라운지 의정부",
      "드라이빙라운지 일산",
      "드라이빙라운지 분당",
      "드라이빙라운지 창원",
      "드라이빙라운지 포항",
      "드라이빙라운지 광주",
      "드라이빙라운지 대구서부",
      "드라이빙라운지 대구동부",
      "드라이빙라운지 부산동부",
      "드라이빙라운지 부산중앙",
      "드라이빙라운지 울산",
      "드라이빙라운지 인천서부",
      "드라이빙라운지 인천동부",
      "드라이빙라운지 전주",
      "드라이빙라운지 천안아산",
      "드라이빙라운지 청주",
    ],
  };

  const selcity = document.getElementById("selcity");
  const dealer = document.getElementById("dealer");

  // 지역 옵션 추가
  regions.forEach((region) => {
    const option = document.createElement("option");
    option.value = region.id;
    option.textContent = region.name;
    selcity.appendChild(option);
  });

  // 지역 옵션 선택 시 지역 라운지 업데이트
  selcity.addEventListener("change", () => {
    const selectedRegion = selcity.value;
    dealer.innerHTML = ""; // 딜러 선택지 초기화

    if (selectedRegion in loungeData) {
      loungeData[selectedRegion].forEach((lounge) => {
        const option = document.createElement("option");
        option.value = lounge;
        option.textContent = lounge;
        dealer.appendChild(option);
      });
    } else {
      const option = document.createElement("option");
      option.textContent = "라운지 없음";
      dealer.appendChild(option);
    }
  });

  // 시승 신청 라디오 버튼
  var driveRadioButton = document.querySelector(".testType1");
  // 차량 상담 라디오 버튼
  var consultingRadioButton = document.querySelector(".testType2");

  // 시승 신청 라디오 버튼의 변경 이벤트 처리
  driveRadioButton.addEventListener("change", function () {
    if (this.checked) {
      // 시승 신청 라디오 버튼이 선택되었을 때
      consultingRadioButton.checked = false; // 차량 상담 라디오 버튼 체크 해제
    }
  });

  // 차량 상담 라디오 버튼의 변경 이벤트 처리
  consultingRadioButton.addEventListener("change", function () {
    if (this.checked) {
      // 차량 상담 라디오 버튼이 선택되었을 때
      driveRadioButton.checked = false; // 시승 신청 라디오 버튼 체크 해제
    }
  });
  // 개인정보 제공 동의
  const argeeAll = $("#agree-all");
  const argeeA = $("#check_1");
  const argeeB = $("#check_2");

  argeeAll.click(function () {
    const flag = argeeAll.prop("checked");
    if (flag) {
      argeeA.prop("checked", true);
      argeeB.prop("checked", true);
    } else {
      argeeA.prop("checked", false);
      argeeB.prop("checked", false);
    }
  });

  argeeA.click(function () {
    checkAgreeAll();
  });

  argeeB.click(function () {
    checkAgreeAll();
  });

  // "argeeA"와 "argeeB" 모두 체크되었는지 확인하고 "agree-all" 체크박스 업데이트
  function checkAgreeAll() {
    if (argeeA.prop("checked") && argeeB.prop("checked")) {
      argeeAll.prop("checked", true);
    } else {
      argeeAll.prop("checked", false);
    }
  }
});
