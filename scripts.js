function drumDisplay(str) {
  let display = "";

  if (str === "Q") {
    display = "Heater1";
  } else if (str === "W") {
    display = "Heater2";
  } else if (str === "E") {
    display = "Heater3";
  } else if (str === "A") {
    display = "Heater4";
  } else if (str === "S") {
    display = "Clap";
  } else if (str === "D") {
    display = "Open HH";
  } else if (str === "Z") {
    display = "Kick n' Hat";
  } else if (str === "X") {
    display = "Kick";
  } else if (str === "C") {
    display = "Closed HH";
  }
  let elem = document.querySelector("#display");
  elem.innerHTML = display;
}

function playAudio(e) {
  let drumPad = e.innerText;
  document.getElementById(drumPad).play();
  drumDisplay(drumPad);
}

function handleKeyDown(e) {
  let keyValue = e.key.toUpperCase();
  document.getElementById(keyValue).play();
  drumDisplay(keyValue);
}

document.addEventListener("keydown", handleKeyDown);
