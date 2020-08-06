//method 1 basic code 
//var numSquares = 6;
//var colors = generateRandomcolors(numSquares);
//var h12 = document.querySelector("h1");   
//var squares = document.querySelectorAll(".square");
//var pickedColor = pickcolor();
//   
//var colorDisplay = document.getElementById("colorDisplay");
//var messageDisplay = document.querySelector("#message");
//var resetButton = document.querySelector("#reset");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
//
//easyBtn.addEventListener("click",function(){
//	easyBtn.classList.add("selected");
//	hardBtn.classList.remove("selected");
//	numSquares = 3;
//	colors = generateRandomcolors(numSquares);
//	pickedColor = pickcolor();
//	colorDisplay.textContent = pickedColor;
//	for(var i = 0 ; i < squares.length ; i++){
//		if(colors[i]){
//			squares[i].style.background = colors[i];
//		}else{
//			squares[i].style.display = "none";
//		}
//	}
//});
//hardBtn.addEventListener("click",function(){
//	hardBtn.classList.add("selected");
//	easyBtn.classList.remove("selected");
//	numSquares = 6;
//	colors = generateRandomcolors(numSquares);
//	pickedColor = pickcolor();
//	colorDisplay.textContent = pickedColor;
//	for(var i = 0 ; i < squares.length ; i++){
//			squares[i].style.background = colors[i];
//            squares[i].style.display = "block";
//        }
//});
//resetButton.addEventListener("click",function(){
// //generate all new colors
//  colors = generateRandomcolors(numSquares);
//  //pick a new random color from array
//  pickedColor = pickcolor();
//  //chnage colorDisplay to match picked color
//  colorDisplay.textContent = pickedColor;
//  resetButton.textContent = "New Colors";
//  messageDisplay.textContent ="";
//  for(var i = 0 ; i < squares.length ;i++){
//  	squares[i].style.background = colors[i];
//  } 	
//  h12.style.background = "steelblue";
//})  
//   colorDisplay.textContent = pickedColor;
//for(var i = 0 ; i < squares.length;i++){
//	//use backgroundColor below to work on more browser.
//	squares[i].style.background = colors[i];
//	squares[i].addEventListener("click",function(){
//	var clickedColor = this.style.background;
//	if(clickedColor===pickedColor){
//		messageDisplay.textContent = "correct!";
//		changeColors(clickedColor);
//		h12.style.background = clickedColor;
//		resetButton.textContent = "PLAY AGAIN?";
//	}else{
//		messageDisplay.textContent = "Try Again";
//		this.style.background = "#232323";
//	}
//   });
//}
//function changeColors(color){
//  	for(var i = 0 ; i < squares.length ; i++){
//  		squares[i].style.background = color;
//  	}
//  }
//function pickcolor(){
//	var random = Math.floor(Math.random()*colors.length);
//	return colors[random];
//}  
//function generateRandomcolors(num){
//	var arr = [];
//	for (var i = 0; i < num; i++) {
//		arr.push(randomColors());
//	}
//	return arr;
//}
//function randomColors(){
//	var r = Math.floor(Math.random()*256);
//	var g = Math.floor(Math.random()*256);
//	var b = Math.floor(Math.random()*256);
//	return "rgb(" + r + ", " + g +", " + b + ")";
//}


//method 2 by smalling some codes.
//
//
//
//
//
//
//method 2 by smalling some codes.
//
//
//
//
//
//
//method 2 by reducing some codes.


var numSquares = 6;
var colors = generateRandomcolors(numSquares);
var h12 = document.querySelector("h1");   
var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
   
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");

for(var i = 0 ; i < modebuttons.length ; i++){
	modebuttons[i].addEventListener("click",function(){
     modebuttons[0].classList.remove("selected");
     modebuttons[1].classList.remove("selected"); 
      this.classList.add("selected");
      if(this.textContent==="Easy"){
      	numSquares = 3;
      }else{
      	numSquares = 6;
      }
      reset();
      //how many squares to show
      //pick new colors
      //pick a new pickedcolor
      //update page to reflect chnages
	});
}
function reset(){
	//generate all new colors
  colors = generateRandomcolors(numSquares);
//  //pick a new random color from array
  pickedColor = pickcolor();
//  //chnage colorDisplay to match picked color
 colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent ="";
  for(var i = 0 ; i < squares.length ;i++){
  	if(colors[i]){
  	squares[i].style.display = "block";	
  	squares[i].style.background = colors[i];
  } else{
    squares[i].style.display = "none";
  }	
}
  h12.style.background = "steelblue";
}
resetButton.addEventListener("click",function(){
    reset();
})
   colorDisplay.textContent = pickedColor;
for(var i = 0 ; i < squares.length;i++){
	//use backgroundColor below to work on more browser.
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
	var clickedColor = this.style.background;
	if(clickedColor===pickedColor){
		messageDisplay.textContent = "correct!";
		changeColors(clickedColor);
		h12.style.background = clickedColor;
		resetButton.textContent = "PLAY AGAIN?";
	}else{
		messageDisplay.textContent = "Try Again";
		this.style.background = "#232323";
	}
   });
}
function changeColors(color){
  	for(var i = 0 ; i < squares.length ; i++){
  		squares[i].style.background = color;
  	}
  }
function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}  
function generateRandomcolors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColors());
	}
	return arr;
}
function randomColors(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g +", " + b + ")";
}