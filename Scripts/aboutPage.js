const shortText =
	"Hi there, my name is Arthur! I am currently studying Electrical and Electronic Engineering at University College London. I like cycling, playing the piano and Korean food. I made this website for the following reasons:<ul><li>It's a fun challenge</li><li>To learn some HTML, CSS, PHP and JavaScript</li><li>A place to keep my projects</li></ul>";
const longText =
	"Hi there, my name is Arthur! I am currently studying Electrical and Electronic Engineering at University College London. I like cycling, playing the piano and Korean food. At the moment I am undertaking / planning the following projects:<ul><li>Atmospheric measurement expansion card for a <a href='https://frame.work/gb/en' >Framework</a> computer</li><li> LED light automation </li><li> Sleep movement sensor</li><li> Amplifier design / loud portable speaker</li><li> Web controlled LEDs</li><li> Continuing to build this website</li></ul>Academically I have been enjoying the following topics:<ul><li>FPGA programming and design</li><li>Control theory</li><li>Digital signal communications</li></ul>";

const shortButtonElement = document.querySelector('.js-short-button');
const longButtonElement = document.querySelector('.js-long-button');
const bioTextElement = document.querySelector('.js-bio-text');

changeLength('short');

function changeLength(length) {
	console.log('clicked');

	if (length === 'long') {
		//change long button spec
		longButtonElement.classList.add('about-me-clicked');
		//remove short button spec
		shortButtonElement.classList.remove('about-me-clicked');
		//change bio text
		bioTextElement.innerHTML = longText;
	} else if (length === 'short') {
		//change long button spec
		longButtonElement.classList.remove('about-me-clicked');
		//remove short button spec
		shortButtonElement.classList.add('about-me-clicked');
		//change bio text
		bioTextElement.innerHTML = shortText;
	}
}
