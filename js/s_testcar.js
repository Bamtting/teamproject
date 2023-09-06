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
  // 개별 동의 체크박스와 전체동의 체크박스 요소를 가져옵니다.
  var argeeAll = document.getElementById("agree-all");
  var argeeA = document.getElementById("check_1");
  var argeeB = document.getElementById("check_2");
  var argeeAUnchecked = document.getElementById("agrUseYnn");
  var argeeBUnchecked = document.getElementById("agrOfrYnn");

  // "동의 안함" 체크박스가 클릭되었을 때 전체동의 체크 해제
  argeeAUnchecked.addEventListener("change", function () {
    if (this.checked) {
      argeeAll.checked = false;
    }
  });

  argeeBUnchecked.addEventListener("change", function () {
    if (this.checked) {
      argeeAll.checked = false;
    }
  });

  // 개별 동의 체크박스 클릭 시 전체동의 체크 여부 업데이트
  argeeA.addEventListener("change", function () {
    checkAgreeAll();
  });

  argeeB.addEventListener("change", function () {
    checkAgreeAll();
  });

  // 전체동의 체크박스 클릭 시 개별 동의 체크 여부 업데이트
  argeeAll.addEventListener("change", function () {
    var flag = argeeAll.checked;
    argeeA.checked = flag;
    argeeB.checked = flag;
    argeeAUnchecked.checked = false;
    argeeBUnchecked.checked = false;
  });

  // "argeeA"와 "argeeB" 모두 체크되었는지 확인하고 "agree-all" 체크박스 업데이트
  function checkAgreeAll() {
    if (
      (argeeA.checked || argeeAUnchecked.checked) &&
      (argeeB.checked || argeeBUnchecked.checked)
    ) {
      argeeAll.checked = true;
    } else {
      argeeAll.checked = false;
    }
  }

  // 체크박스
  // 첫 번째 체크박스와 두 번째 체크박스 요소를 가져옵니다.
  var checkBox1 = document.getElementById("check_1");
  var checkBox2 = document.getElementById("agrUseYnn");

  // 첫 번째 체크박스의 변경 이벤트를 처리합니다.
  checkBox1.addEventListener("change", function () {
    if (this.checked) {
      // 첫 번째 체크박스가 선택되면 두 번째 체크박스를 해제합니다.
      checkBox2.checked = false;
    }
  });

  // 두 번째 체크박스의 변경 이벤트를 처리합니다.
  checkBox2.addEventListener("change", function () {
    if (this.checked) {
      // 두 번째 체크박스가 선택되면 첫 번째 체크박스를 해제합니다.
      checkBox1.checked = false;
    }
  });

  // 체크박스2
  var checkBox3 = document.getElementById("check_2");
  var checkBox4 = document.getElementById("agrOfrYnn");

  checkBox3.addEventListener("change", function () {
    if (this.checked) {
      checkBox4.checked = false;
    }
  });

  checkBox4.addEventListener("change", function () {
    if (this.checked) {
      checkBox3.checked = false;
    }
  });

  var timerInterval; // 타이머 인터벌 변수

  // "인증번호 받기" 버튼 클릭 시 실행되는 함수
  document
    .getElementById("getAuthButton")
    .addEventListener("click", function () {
      // 이름 입력 필드와 전화번호 입력 필드를 가져옵니다.
      var nameInput = document.getElementById("nameInput");
      var phoneInput = document.getElementById("phoneInput");

      // 이름과 전화번호를 입력받습니다.
      var name = nameInput.value;
      var phoneNumber = phoneInput.value;

      // 이름이나 전화번호 중 하나라도 비어 있으면 알림을 표시합니다.
      if (!name) {
        alert("이름을 입력해주세요.");
        return;
      }

      if (!phoneNumber) {
        alert("전화번호를 입력해주세요.");
        return;
      }

      // "확인" 버튼 스타일 변경
      var confirmButton = document.getElementById("confirmButton");
      confirmButton.style.backgroundColor = "blue";
      confirmButton.style.color = "white";

      // "확인" 버튼을 활성화합니다.
      confirmButton.disabled = false;

      // 타이머 시작 (3분)
      var duration = 180;
      startTimer(duration);

      alert("인증 번호를 보냈습니다.");
    });

  // 인증번호 확인버튼
  document
    .getElementById("confirmButton")
    .addEventListener("click", function () {
      var codeInput = document.querySelector(".info-code");
      if (!codeInput) {
        alert("인증번호 입력 필드를 찾을 수 없습니다.");
        return;
      }

      var code = codeInput.value;
      if (!code) {
        alert("인증번호를 입력해주세요.");
      } else {
        alert("인증되었습니다.");

        // 이름 입력 필드, 전화번호 입력 필드, 인증번호 입력 필드 비활성화
        var nameInput = document.getElementById("nameInput");
        var phoneInput = document.getElementById("phoneInput");
        var confirmButton = document.getElementById("confirmButton");
        nameInput.disabled = true;
        phoneInput.disabled = true;
        codeInput.disabled = true;
        confirmButton.disabled = true;

        // 메시지 업데이트
        var message = document.getElementById("message");
        message.textContent = "인증이 완료되었습니다.";

        // 타이머 숨기기
        var timer = document.getElementById("timer");
        timer.style.display = "none";
      }
    });

  // 타이머 시작 함수
  function startTimer(duration) {
    var timerDisplay = document.getElementById("timer");
    var timer = duration,
      minutes,
      seconds;
    timerInterval = setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      timerDisplay.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        clearInterval(timerInterval);
        alert("3분이 경과했습니다. 인증 번호를 다시 요청하세요.");
        document.getElementById("confirmButton").disabled = true;
      }
    }, 1000); // 1초마다 업데이트
  }
});