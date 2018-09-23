let bleeps = [
  "bleep bloooop bleeps bleeps",
  "bloops bloops bloooop bloopity bloop",
  "bloppity bippity bloop",
  "dippity dopity"
]

let randomResponse = Math.floor(Math.random() * (bleeps.length));


let botRespond = (key) => {
  console.log('press')

  // let dakine = key.which || key.keyCode;
  // if (dakine == 13) {
  document.createElement('div').innerHTML = bleeps[randomResponse];
  // }
}

let onEnter = document.getElementById('inputId');
onEnter.addEventListener("keypress", botRespond);