console.log('hello');

let colours = ['#f35e0e', '#7934e0', '#34deed', '#17e85d'];
let shuffledArray = [];

function shuffleColourArray() {
	shuffledArray = colours.sort((a, b) => 0.5 - Math.random());
}

function colourStyling() {
	shuffleColourArray();
	document
		.querySelectorAll('.js-word')
		.forEach(function assignColour(word, index) {
			word.style.color = shuffledArray[index];

			console.log('colour assigned2');
		});
}

colourStyling();

document.querySelectorAll('.js-word').forEach((word) => {
	console.log('word found');
  word.addEventListener('mouseenter',colourStyling);

});
