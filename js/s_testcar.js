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
});
