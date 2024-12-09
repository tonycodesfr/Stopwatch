let displayHour = document.querySelector(".hour");
let displayMin = document.querySelector(".minute");
let displaySec = document.querySelector(".second");
const startBtn = document.querySelector(".start-counting");
const stopBtn = document.querySelector(".stop-counting");

let number = 0;
let time = number * 60;
let hour = 0;
let timerInterval = null;

function startTimer() {
  if (timerInterval !== null) return;
  timerInterval = setInterval(action, 1000);
}

// function startTimer() {
//   if (timerInterval !== null) {
//     timerInterval = setInterval(action, 1000);
//   }
// }

startBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  time = number * 60;
  hour = 0;
  startTimer();
});

function action() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  displaySec.innerHTML = `${seconds}`;
  displayMin.innerHTML = `${minutes}`;
  displayHour.innerHTML = `${hour}`;

  if (time >= (hour + 1) * 3600) {
    hour++;
  }

  time++;
}

stopBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});
