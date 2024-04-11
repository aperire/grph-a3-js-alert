const countDownEle = document.getElementById("countdown-timer");
const restCountDown = document.getElementById("countdown-rest");
const finalModelCheckBoxs = document.querySelectorAll(".checkbox");
const finalResumeBtn = document.getElementById("final-resume");
const finalModel = document.getElementById("finalModel");
const restModel = document.getElementById("restModel");
const checkBox1 = document.getElementById("checkbox1");
const checkBox2 = document.getElementById("checkbox2");
const checkBox3 = document.getElementById("checkbox3");

// Time Settings
let timeLimitInMinutes = 0.1;
let timeLimitInSeconds = timeLimitInMinutes * 60;
let resTimeLimitInSeconds = 20;

// Checking Interval Variable
let timerInterval;
let resTimerInterval;

// Change Btn after actived
function changeBtnCss(referance) {
  referance.style.backgroundColor = "green";
  referance.style.color = "white";
}
// Change Btn after actived
function removeBtnCss(referance) {
  referance.style.backgroundColor = "white";
  referance.style.color = "black";
}

// Count Down Timer Runner
function RestCountDownTimer() {
  resTimeLimitInSeconds--;
  let minutes = Math.floor(resTimeLimitInSeconds / 60);
  let seconds = resTimeLimitInSeconds % 60;

  seconds = seconds < timeLimitInMinutes ? "0" + seconds : seconds;

  restCountDown.innerHTML = `${minutes}:${seconds}`;

  if (resTimeLimitInSeconds === 0) {
    removeBtnCss(finalResumeBtn);
    restCountDown.textContent = "00:00";
    clearInterval(resTimerInterval);
    checkBox1.checked = false;
    checkBox2.checked = false;
    checkBox3.checked = false;
    restModel.style.display = "none";
    finalModel.style.display = "flex";
    return;
  }
}

// Count Down Timer Runner
function CountDownTimer() {
  timeLimitInSeconds--;
  let minutes = Math.floor(timeLimitInSeconds / 60);
  let seconds = timeLimitInSeconds % 60;

  seconds = seconds < timeLimitInMinutes ? "0" + seconds : seconds;

  countDownEle.innerHTML = `Timeout - ${minutes}:${seconds}`;

  if (timeLimitInSeconds === 0) {
    restModel.style.display = "flex";
    countDownEle.textContent = "00:00";
    clearInterval(timerInterval);
    resTimeLimitInSeconds = 20;
    resTimerInterval = setInterval(RestCountDownTimer, 1000);
  }
}

// Stop Count Down Process
function CountDownStop() {
  timeLimitInSeconds = timeLimitInMinutes * 60;
  clearInterval(timerInterval);
  removeBtnCss(countDownEle);
  countDownEle.textContent = "Eye saving mode";
  localStorage.setItem("timer", false);
}

// Start Count Down Process
function CountDownStart() {
  if (timerInterval) {
    timeLimitInSeconds = timeLimitInMinutes * 60;
    clearInterval(timerInterval);
    timerInterval = setInterval(CountDownTimer, 1000);
    changeBtnCss(countDownEle);
    localStorage.setItem("timer", true);
  } else {
    localStorage.setItem("timer", true);
    timerInterval = setInterval(CountDownTimer, 1000);
    changeBtnCss(countDownEle);
  }
}

function isCheckedAll() {
  if (checkBox1.checked && checkBox2.checked && checkBox3.checked) {
    return true;
  } else {
    return false;
  }
}

// validate checkboxs
function validateCheckbox() {
  let check = isCheckedAll();
  if (check) {
    changeBtnCss(finalResumeBtn);
    finalResumeBtn.removeAttribute("disabled");
    finalResumeBtn.style.cursor = "pointer";
  } else {
    removeBtnCss(finalResumeBtn);
    finalResumeBtn.setAttribute("disabled");
    finalResumeBtn.style.cursor = "not-allowed";
  }
}

// checking checkbox is checked or not?
finalModelCheckBoxs.forEach((input) => {
  input.addEventListener("click", validateCheckbox);
});

finalResumeBtn.addEventListener("click", function (event) {
  if (!event.target.disabled) {
    let check = isCheckedAll();
    if (check) {
      finalModel.style.display = "none";
      removeBtnCss(countDownEle);
      countDownEle.textContent = "Eye saving mode";
      localStorage.removeItem("timer");
    }
  }
});

// Start Eye Saving Mode
countDownEle.addEventListener("click", () => {
  let isTimer = localStorage.getItem("timer");
  if (isTimer === "true") {
    CountDownStop();
  } else {
    CountDownStart();
  }
});

window.addEventListener("DOMContentLoaded", function () {
  localStorage.removeItem("timer");
});
