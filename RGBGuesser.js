var numSquares = 6;
var colors = [];
var pickedColor; 

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

resetButton.addEventListener("click", function(){
	reset();
});

setUpModeButtons();
setUpSquares();
reset();


function setUpModeButtons(){
	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			//ternary conditional: 
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		  reset();
		});
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function generateRandomColors(num){
	//make array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i ++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
 	var red = Math.floor(Math.random() * 256);
 	var green = Math.floor(Math.random() * 256);
 	var blue = Math.floor(Math.random() * 256);
 	return "rgb(" + red + ", " + green + ", " + blue + ")"; 
}



