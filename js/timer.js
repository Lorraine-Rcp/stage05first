export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let timerTimeOut;

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (isFinished) {
        reset();
        resetControls();
        updateDisplay();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  }

  function pauseTimer() {
    clearTimeout(timerTimeOut);
  }

  function reset() {
    updateDisplay(25, 0);
    clearTimeout(timerTimeOut);
  }

  function addMinutes() {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    updateDisplay(minutes + 5, seconds);
  }

  function removeMinutes() {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);
    let minimumTime = minutes >= 5;

    if (minimumTime) {
      updateDisplay(minutes - 5, seconds);
    }
  }

  return {
    countdown,
    pauseTimer,
    reset,
    addMinutes,
    removeMinutes,
  };
}
