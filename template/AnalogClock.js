const AnalogClock = ($container) => {
  // do something!
  let hour = document.createElement("div");
  hour.setAttribute("class", "hand hour");
  $container.appendChild(hour);

  let minute = document.createElement("div");
  minute.setAttribute("class", "hand minute");
  $container.appendChild(minute);

  let second = document.createElement("div");
  second.setAttribute("class", "hand second");
  $container.appendChild(second);

  let time1 = document.createElement("div");
  time1.setAttribute("class", "time time1");
  time1.innerHTML = "|";
  $container.appendChild(time1);

  let time2 = document.createElement("div");
  time2.setAttribute("class", "time time2");
  time2.innerHTML = "|";
  $container.appendChild(time2);

  let time3 = document.createElement("div");
  time3.setAttribute("class", "time time3");
  time3.innerHTML = "|";
  $container.appendChild(time3);

  let time4 = document.createElement("div");
  time4.setAttribute("class", "time time4");
  time4.innerHTML = "|";
  $container.appendChild(time4);

  let time5 = document.createElement("div");
  time5.setAttribute("class", "time time5");
  time5.innerHTML = "|";
  $container.appendChild(time5);

  let time6 = document.createElement("div");
  time6.setAttribute("class", "time time6");
  time6.innerHTML = "|";
  $container.appendChild(time6);

  let time7 = document.createElement("div");
  time7.setAttribute("class", "time time7");
  time7.innerHTML = "|";
  $container.appendChild(time7);

  let time8 = document.createElement("div");
  time8.setAttribute("class", "time time8");
  time8.innerHTML = "|";
  $container.appendChild(time8);

  let time9 = document.createElement("div");
  time9.setAttribute("class", "time time9");
  time9.innerHTML = "|";
  $container.appendChild(time9);

  let time10 = document.createElement("div");
  time10.setAttribute("class", "time time10");
  time10.innerHTML = "|";
  $container.appendChild(time10);

  let time11 = document.createElement("div");
  time11.setAttribute("class", "time time11");
  time11.innerHTML = "|";
  $container.appendChild(time11);

  let time12 = document.createElement("div");
  time12.setAttribute("class", "time time12");
  time12.innerHTML = "|";
  $container.appendChild(time12);
};

export default AnalogClock;
