let bleeps = [
  "bleep bloooop bleeps bleeps",
  "bloops bloops bloooop bloopity bloop",
  "bloppity bippity bloop",
  "dippity dopity"
]

let randomResponse = () => {
  return bleeps[Math.floor(Math.random() * (bleeps.length))];
};



let onEnter = document.getElementById('inputId');
onEnter.addEventListener("keypress", function (event) {
  // setTimeout(myFunction = (event) => {
  if (event.key === "Enter") {

    //Creates a new div to have the input value
    var newDiv = document.createElement('div');

    newDiv.innerHTML = randomResponse();

    //Appends the newDiv with input values to a fixed div
    document.body.appendChild(newDiv);


  }


  // });
});