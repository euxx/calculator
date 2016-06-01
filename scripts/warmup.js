
function my_max(numArray) {
	numArray.sort(function (a, b) {return a - b} ).reverse();
	console.log(numArray[0]);
	return numArray[0];
}

var aArray = [140, 4, 99];
//my_max(aArray);


function vowel_count(someText) {
	someText = someText.toUpperCase();
	var count = 0;
	for (var i = 0; i < someText.length; i++) {
		if (someText[i] === "A" || someText[i] === "E" ||
			someText[i] === "I" || someText[i] === "O" ||
			someText[i] === "U") {
			count += 1;
		}
	}
	// console.log(someText);
	console.log(count);
	return count;
}

var aString = "Project: Building An On Screen Calculator Using Javascript";
//vowel_count(aString);


function reverse(someText) {
	var strArray = [];
	strArray = someText.split("").reverse();
	var revString = strArray.join("");
	console.log(revString);
}

// reverse(aString);
