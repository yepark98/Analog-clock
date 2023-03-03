import AnalogClock from "./AnalogClock.js";

document.querySelectorAll(".analog-clock").forEach(AnalogClock);

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

  setTimeout(clockRun, 1000); // 지연시간 1초(1000) 뒤에 실행될 코드 설정
}
