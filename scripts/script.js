
document.addEventListener('DOMContentLoaded', function() {
	console.log("Aha");
});


function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function equal(what, a, b) {
	switch(what) {
		case "add":
		var result = add(a, b);
		display;
		break;
	}

}

function clear() {
	screen.textContent = "";
}

var screen = document.querySelector(".screen"),
	cells = document.querySelectorAll('.cell'),
	clear = document.querySelector(".clear");

for(var i = 0; i <= cells.length; i++) {
	var display = cells[i].textContent;
	if(display === "C") {
		clear.addEventListener('click', function() {
			screen.textContent = "";
		})
	} else {
	    cells[i].addEventListener('click', clickHandler);
	}
}

function clickHandler() {
	var value = this.textContent;

	if(value === "=") {
		return screen.textContent = eval(screen.textContent);
	}

	screen.textContent += value;
}



// cell.addEventListener('click', clickHandler);
// cell.onclick = function() {
// }

	// var numArray = [];
	// if(value === "1" || value === "2" || value === "3"
	// || value === "4" || value === "5" || value === "6"
	// || value === "7" || value === "8" || value === "9"
	// || value === "0") {
	// 	numArray.push(value);
	// }
