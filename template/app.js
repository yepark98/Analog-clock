import AnalogClock from "./AnalogClock.js";

document.querySelectorAll(".analog-clock").forEach(AnalogClock);

// 전체 페이지가 로드되면 이벤트가 시작
window.addEventListener("load", function () {
  clockRun();
});

function clockRun() {
  let date = new Date(); // 현재 날짜 및 시간

  let second = date.getSeconds(); // Date 객체의 초 값을 현지 시간에 맞춰 반환
  let secondAngle = second * 6; // 1초가 6도(360 / 60)
  let secondValue = "rotate(" + secondAngle + "deg)"; // rotate(calc(var(--deg) * 1deg))
  document.querySelectorAll(".second").forEach((node) => {
    node.style.transform = secondValue;
  });

  let minute = date.getMinutes(); // Date 객체의 분 값을 현지 시간에 맞춰 반환
  let minuteAngle = minute * 6;
  let minuteValue = "rotate(" + minuteAngle + "deg)";
  document.querySelectorAll(".minute").forEach((node) => {
    node.style.transform = minuteValue;
  });

  let hour = date.getHours(); // Date 객체의 시간 값을 현지 시간에 맞춰 반환
  if (hour < 12) {
    hour = hour; // 11시 => 11시
  } else {
    hour -= 12; // 13시 => 1시
  }

  // 시간 <-> 시간 = 5회
  // 5회 * 1분 * 6도 = 30도(시간당 30도)
  // ex) 4시 30분일 경우 120(4*30) + 15도(30도/60분 * 30분)
  // ex) 4시 45분일 경우 120(4*30) + 22.5도(30도/60분 * 45분)
  let hourAngle = hour * 30 + (30 / 60) * minute;
  let hourValue = "rotate(" + hourAngle + "deg)";
  document.querySelectorAll(".hour").forEach((node) => {
    node.style.transform = hourValue;
  });

  setTimeout(clockRun, 1000); // 지연시간 1초(1000) 뒤에 실행될 코드 설정
}
