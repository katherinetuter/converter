//Get a reference to the button element in the DOM & assign function
var button = document.getElementById("converter");
button.addEventListener("click", determineConverter);
document.querySelector("#text").addEventListener("keyPress", function (e) {
	var key = e.which || e.keyCode;
	if (key === 13) {
		determineConverter();
	}
});

function toCelsius (x) {
 	return (x - 32) / 5/9;
}

function toFahrenheit (x) {
  	return (x * 9/5) + 32;
 }

function determineConverter () {
 if(document.getElementById("fahrenheit").checked) {
	var farTemp = document.getElementById("text").value; //get F value from input
	document.getElementById("text").value=""; //clear F
	document.getElementById("fahrenheit").value;
	var cAnswer = toCelsius(farTemp); //call toCelsius function
	document.getElementById("answer").innerHTML = "<p>" + cAnswer + " &deg; Celsius</p>"; //write answer to html
	}
	else if (document.getElementById("celsius").checked) {
	var celTemp = document.getElementById("text").value; //get C value from input
	document.getElementById("text").value=""; //clear C
	var cToF = document.getElementById("celsius").value;
	var fAnswer = toFahrenheit(celTemp); //call toFahrenheit function
	document.getElementById("answer").innerHTML = "<p>" + fAnswer + " &deg; Fahrenheit</p>"; //write answer to html
	}
}


 




