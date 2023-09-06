console.log('working7');

//const body = document.querySelector('body');
const box = document.querySelector('.js-playground');
const label = document.querySelector('#shape');

let colors = [
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

let FPS = 60;

let width,
	height,
	velocityX = 5,
	velocityY = 5,
	pause = true,
	previousColor = 0;

const reset = () => {
	width = box.getBoundingClientRect().width;
	height = box.getBoundingClientRect().height;

	pause =
		width <= label.getBoundingClientRect().width ||
		height <= label.getBoundingClientRect().height;

	label.style.left = '1px';
	label.style.top = '1px';

	label.style.stroke = colors[0];

	console.log('reset triggered');
	console.log(`container width: ${width}`);
	console.log(`container height:${height}`);
};

reset();

window.addEventListener('resize', reset, true);

const getRandomColor = () => {
	let currentColor = -1;

	do {
		currentColor = Math.floor(Math.random() * colors.length);
	} while (previousColor == currentColor);

	previousColor = currentColor;

	return colors[currentColor];
};

setInterval(() => {
	if (pause) return;

	console.log('frame');

	let rect = label.getBoundingClientRect();

	// Horizontal position:
	let left = label.style.left;
	left = Number(left.slice(0, -2));

	//Vertical position:
	let top = label.style.top;
	top = Number(top.slice(0, -2));



	if (left + rect.width >= width || left <= 0) {
		console.log('boundary passed');
		velocityX = -velocityX;
		let randomColor = getRandomColor();
		label.style.fill = randomColor;
		
	}

	if (top + rect.height >= height || top <= 0) {
		console.log('boundary passed');
		velocityY = -velocityY;
		let randomColor = getRandomColor();
		label.style.fill = randomColor;
	}

	label.style.left = left + velocityX + 'px';
	label.style.top = top + velocityY + 'px';
	//label.style.transform = 'rotate(45deg)rotate(-45deg)';

}, 1000 / FPS);
