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
        newDiv.className = "textMessage";

        let text = input.value;

        const urlTextFunc = (text) => {
            if (text.split(" ").length === 1) {
                return text;
            } else {
                textArr = text.split(" ");
                urlCode = textArr.join("%20");
                return urlCode;
            }
        }
        
      newDiv.innerHTML = textToFish(text);

      //Appends the newDiv with input values to a fixed div
      divId.appendChild(newDiv);

      //Sets the div to the bottom after every input
      var boxDiv = document.getElementById("divId")
      boxDiv.scrollTop = boxDiv.scrollHeight;

      //Blanks out the input value after you enter
        inputId.value = "";
      
        fetch(`http://34.210.215.17:9878/get?msg=${urlTextFunc(text)}`)
            .then(response => {
                return response.body;
            })
            .then(word => {
                return word.getReader().read();
            })
            .then(reply => {              
                var botReply = new TextDecoder().decode(reply.value)
                // console.log(string, "FUCKING CMON");
                var newReply = document.createElement('div');
                newReply.className = "botReply";
                divId.append(newReply);

                var reply = document.createElement('p');
                reply.className = "reply"
                reply.innerHTML = `(untranslated): ${textToFish(botReply)} <br>\n(translated): ${botReply}`;
        
                newReply.appendChild(reply);
                
                //Sets the div to the bottom after every input
                var boxDiv = document.getElementById("divId")
                boxDiv.scrollTop = boxDiv.scrollHeight;

            })
            .catch(err => {
                console.log("IM ERRORING OUT", err);
        })
    }
});