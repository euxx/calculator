
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

function clear() {

}


var cell = document.querySelector('.one');
cell.onclick = function() {
	var value = cell.textContent
	return value;
}
	console.log(value);

// var cell = document.getElementsByClassName('cell');
// for(var i = 0; i <= cell.length; i++) {
// 	cell[i].addEventListener('click', clickHandler);
// }


// function clickHandler() {
// 	var value = this.textContent;
//     console.log(value);
//     return value;
// }

	// var numArray = [];
	// if(value === "1" || value === "2" || value === "3"
	// || value === "4" || value === "5" || value === "6"
	// || value === "7" || value === "8" || value === "9"
	// || value === "0" ||) {
	// 	numArray.push(value);
	// }

