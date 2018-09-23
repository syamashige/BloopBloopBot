//adds event listener to input text when enter is pressed
let img = document.getElementsByTagName('img');
for (let i = 0; i < img.lenght; i++) {
    img[i].addEventListener('click', changeImg);
}

function changeImg() {
    this.href = '';
    this.src="/assets/fish.png"
}

inputId.addEventListener('keydown', function myFunction(event) {
    if (event.key === "Enter") {
      //Grabs input element
      var input = document.getElementById('inputId');
      
      //Creates a new div to have the input value
        var newDiv = document.createElement('div');
        
      newDiv.innerHTML = textToFish(input.value);

      //Appends the newDiv with input values to a fixed div
      divId.appendChild(newDiv);

      //Sets the div to the bottom after every input
      var boxDiv = document.getElementById("divId")
      boxDiv.scrollTop = boxDiv.scrollHeight;

      //Blanks out the input value after you enter
      inputId.value = "";
    }
});