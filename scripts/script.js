
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
	result = 0;
	a = 0;
	b = 0;
}

var result, a, b;

var cell = document.querySelector('.one');
var num;
cell.addEventListener('click', clickHandler);
console.log(num);

// cell.onclick = function() {
// }

var cells = document.getElementsByClassName('cell');
for(var i = 0; i <= cells.length; i++) {
	   cells[i].addEventListener('click', clickHandler);
}

function clickHandler() {
	var value = this.textContent;
    console.log(value);
    num = "I'm num";
    return num;
}

	// var numArray = [];
	// if(value === "1" || value === "2" || value === "3"
	// || value === "4" || value === "5" || value === "6"
	// || value === "7" || value === "8" || value === "9"
	// || value === "0" ||) {
	// 	numArray.push(value);
	// }
