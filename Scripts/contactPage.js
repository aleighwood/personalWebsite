console.log('hello');

//let colours = ['#f35e0e', '#7934e0', '#34deed', '#17e85d'];


//top 4 are my choice!
let colours = [
  '#f5840d',
  '#7934e0',
  '#34deed', 
  '#17e85d',
	'#26de81',
	'#fc5c65',
	'#fd9644',
	'#fed330',
	'#2bcbba',
	'#45aaf2',
	'#4b7bec',
	'#a55eea',
	'#ffc1f3',
	'#76ead7',
	'#ff9c71',
	'#32e0c4',
	'#d291bc',
	'#fa744f',
];
let shuffledArray = [];

// shuffle color array
function shuffleColourArray() {
	shuffledArray = colours.sort((a, b) => 0.5 - Math.random());
}

// changes colours of words
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

// sense hovering over word, then change colour
document.querySelectorAll('.js-word').forEach((word) => {
	console.log('word found');
  word.addEventListener('mouseenter',colourStyling);

});
