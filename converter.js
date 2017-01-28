convertedTemp.onclick();

//convert temperature from F to C
function toCelsius () {
	var toC = [t] - 32
/ 1.8;
convertedTemp.onclick();
}
//convert temperature from C to F
function toFahrenheit () {
	var toF = [t] * 1.8 + 32;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);