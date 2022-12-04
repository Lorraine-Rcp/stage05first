import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";
import Events from "./events.js";
import {
  playBtn,
  pauseBtn,
  minutesDisplay,
  secondsDisplay,
  forest,
  rain,
  coffee,
  fp,
} from "./elements.js";

let controls = Controls({
  playBtn,
  pauseBtn,
  forest,
  rain,
  coffee,
  fp,
});

const sounds = Sounds();

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.stop,
});



Events({ controls, sounds, timer });
