
const difdaf = document.getElementById('difdaf');
let i = 0;
let scale = 1;
let multiplier = 1;
let scaler=0.01;

setInterval(() => {
	if (scale <= 0.5) {
		scaler = 0.01;
	} else if (scale >= 2) {
		scaler = -0.01
	}

  i+=1

  scale = scale + scaler;

  //difdaf.style.transform = ` scale(${scale},${scale})

	difdaf.style.transform = ` scale(${scale},${scale}) rotate(${
		i * multiplier}deg)`;
}, 10);
