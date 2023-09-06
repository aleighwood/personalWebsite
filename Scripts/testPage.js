console.log('working7');

//const body = document.querySelector('body');
const box = document.querySelector('.js-playground');
const label = document.querySelector('#shape');

/*
let rect = label.getBoundingClientRect();

let left = rect.x;
console.log(`item left: ${left}`);

let left2 = label.style.left;
console.log(`item left2: ${left2}`)

let top1 = rect.y;
console.log(`item top: ${top1}`);
console.log(`item width: ${rect.width}`);
console.log(`item height: ${rect.height}`);

let width = box.getBoundingClientRect().width;
let height = box.getBoundingClientRect().height;
console.log(`container width: ${width}`);
console.log(`container height: ${height}`);



let top2 = rect.y;
let top3 = label.style.top;
console.log(`using .style: ${top2}`);
console.log(`using  .rect: ${top3}`);
*/

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
	velocityX = 2,
	velocityY = 2,
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
	//let container = box.getBoundingClientRect();

	//let leftWall = container.x;
	//let rightWall = container.right;
	//let topWall = container.y;
	//let bottomWall = container.bottom;

	//let left = rect.x;
	//let left = label.style.left;
	//console.log(left);

	/*
	//horizontal:
	let left2 = rect.x;
	let left = label.style.left;
	left = left.slice(0, -2);
	//Number(left);
	
	console.log(typeof(left));
	console.log(`using .style: ${left}`);
	//console.log(typeof(left2));
	console.log(`using  .rect: ${left2}`);

	//vertical:
	let top2 = rect.y;
	let top = label.style.top;
	console.log(`using .style: ${top}`);
	console.log(`using  .rect: ${top2}`);
*/

// Horizontal position:
let left = label.style.left;
left = Number(left.slice(0, -2));

//Vertical position: 
let top = label.style.top;
top = Number(top.slice(0, -2));

//Type testing

console.log(left+rect.width);
console.log(width);

if (left + rect.width >= width || left<=0){
	console.log('boundary passed');
	velocityX = -velocityX;
	let randomColor = getRandomColor();
	label.style.fill = randomColor;
}

if (top + rect.height >= height || top<=0){
	console.log('boundary passed');
	velocityY = -velocityY;
	let randomColor = getRandomColor();
	label.style.fill = randomColor;
}




/*
	if (left + rect.width >= width || left <= 0) {
		velocityX = -velocityX;
		//let randomColor = getRandomColor();
		//label.style.fill = randomColor;
		console.log('horizontal boundary passed');
		//console.log(velocityX);
		//label.style.left = '0px';
	}

	if (top + rect.height >= height|| top <= 0) {
		velocityY = -velocityY;
		console.log('vertical boundary passed');

		//let randomColor = getRandomColor();
		//label.style.fill = randomColor;
	}
	*/


	label.style.left = left + velocityX + 'px';
	label.style.top = top + velocityY + 'px';
	//velocityX += 1;

	
	//velocityY += 1;

	//label.style.left = left + velocityX + 'px';
	//label.style.top = top + velocityY + 'px';
}, 1000/FPS);
