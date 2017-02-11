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
 	return (x - 32) / 1.8;
}

function toFahrenheit (x) {
  	return (x * 1.8) + 32;
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
	if(fAnswer > 90 || cAnswer > 32) {
    answer.className = "red-font";
	}
  else if (fAnswer < 32 || cAnswer < 0) {
		answer.className = "blue-font";
	}
	else {
		answer.className = "green-font";
	}
	

}


 




