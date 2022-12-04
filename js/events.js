import {
  playBtn,
  pauseBtn,
  stopBtn,
  moreBtn,
  lessBtn,
  forest,
  rain,
  coffee,
  fp,
  rainSvg,
  forestSvg,
  fpSvg,
  coffeeSvg,
} from "./elements.js";

export default function ({ controls, sounds, timer }) {
  //<<<CONTROLS>>>//

  playBtn.addEventListener("click", function () {
    controls.play();
    sounds.Click();
    timer.countdown();
  });

  pauseBtn.addEventListener("click", function () {
    controls.pause();
    sounds.Click();
    timer.pauseTimer();
  });

  stopBtn.addEventListener("click", function () {
    sounds.Click();
    controls.resetControls();
    timer.reset();
  });

  moreBtn.addEventListener("click", function () {
    sounds.Click();
    timer.addMinutes();
  });

  lessBtn.addEventListener("click", function () {
    sounds.Click();
    timer.removeMinutes();
  });

  //<<<SOUND CARDS>>>//

  forest.addEventListener("click", function () {
    forest.classList.toggle("active");
    forestSvg.classList.toggle("color");
    forest.className === "forest active"
      ? sounds.forest.play()
      : sounds.forest.pause();
  });

  rain.addEventListener("click", function () {
    rain.classList.toggle("active");
    rainSvg.classList.toggle("color");
    rain.className === "rain active" ? sounds.rain.play() : sounds.rain.pause();
  });

  coffee.addEventListener("click", function () {
    coffee.classList.toggle("active");
    coffeeSvg.classList.toggle("color");
    coffee.className === "coffee active"
      ? sounds.coffee.play()
      : sounds.coffee.pause();
  });

  fp.addEventListener("click", function () {
    fp.classList.toggle("active");
    fpSvg.classList.toggle("color");
    fp.className === "fp active" ? sounds.fp.play() : sounds.fp.pause();
  });
}
