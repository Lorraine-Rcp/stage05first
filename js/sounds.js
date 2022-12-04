export default function Sounds() {
  const forest = new Audio("./assets/forest.wav");
  const rain = new Audio("./assets/rain.wav");
  const coffee = new Audio("/assets/coffee.wav");
  const fp = new Audio("./assets/fireplace.wav");
  const beep = new Audio("./assets/beep.wav");

  function Click() {
    beep.play();
  }

  forest.loop = true;
  rain.loop = true;
  coffee.loop = true;
  fp.loop = true;

  return {
    Click,
    forest,
    rain,
    coffee,
    fp,
  };
}

/*  


  function forestBtn() {
    forestSound.play();
  }

  function rainBtn() {
    rainSound.play();
  }

  function coffeeBtn() {
    coffeeSound.play();
  }

  function fpBtn() {
    fpSound.play();
  }


bgAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    pressButton,
    timeEnd,
    bgAudio
  }
*/
