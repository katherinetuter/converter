// Determine which radio button is selected--wrap in a fucntion so this doesn't happen till i call it
function determineConverter () {
 	if(document.getElementById("fahrenheit").checked) {
	document.getElementById("fahrenheit").value;
	console.log("event", clickEvent);
	else {return false};

 function grabValue() {
	if(document.getElementById("temperature")) {
	document.getElementById("temperature").value;
	else {return false};
};


//Capture value from input
var fahrenheitValue = document.getElementById("fahrenheit").checked;
var celsiusValue = document.getElementById("celsius").checked;


//Checks to see if enter was pressed--if so convert
function pressEnter () {
	var enterPressed = event.keyCode; 
	if(enterPressed == 13 && document.getElementById("fahrenheit").checked) {
	function toCelsius () {
 	(fahrenheitValue - 32) / 1.8;
	}
}
else {return false};


if(enterPressed == 13 && document.getElementById("celsius") == true) {
 function() {}unction toFahrenheit () {
  	(celsiusValue - 32) / 1.8;
 	}
}
else {return false};

//clear the text box after converting
function clearText() {
	document.getElementById("text").value="";
};


//convertedTemp.onclick();




convertedTemp.onclick();
 }


// // // Get a reference to the button element in the DOM
var button = document.getElementById("converter");



// // // Assign a function to be executed when the button is clicked
// // button.addEventListener("click", determineConverter);