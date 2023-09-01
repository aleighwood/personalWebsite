import { projects } from '../Data/projects.js';

const rotate = (projectId) => {
	console.log('rotate');

	let projectEmoji = document.querySelector(`.js-project-emoji-${projectId}`);
	projectEmoji.style.transform = 'rotate(360deg) scale(1.5,1.5)';
};

const unrotate = (projectId) => {
	console.log('unrotate');
	let projectEmoji = document.querySelector(`.js-project-emoji-${projectId}`);
	projectEmoji.style.transform = 'initial';
};

let projectsHTML = '';

console.log('test1');

projects.forEach((project) => {
	projectsHTML += `
  <div class="project-title-container">
  <a href="${project.url}" class="nostyle project-title js-project-title" data-project-Id="${project.id}">${project.name}</a>
  <div class="project-emoji js-project-emoji-${project.id}"> ${project.emoji}</div>
</div>
  `;
});

document.querySelector('.js-projects-container').innerHTML = projectsHTML;

document.querySelectorAll('.js-project-title').forEach((title) => {
	//console.log('event listener added');
	title.addEventListener('mouseenter', () => {
		rotate(title.dataset.projectId);
	});

	title.addEventListener('mouseleave', () => {
		unrotate(title.dataset.projectId);
	});

	//title.addEventListener('mouseenter', rotate(title.dataset.projectId));

	//title.addEventListener('mouseenter', rotate(title));
	//title.addEventListener('mouseleave', unrotate(title));
});

/*
console.log('test3');
console.log('is this working?');

const titleElement = document.querySelector('.js-project-title');

const projectEmoji = document.querySelector('.js-project-emoji');

const rotate = () => {
	console.log('rotate');
	//projectEmoji.style.transform = 'translateY(-100px) ';
	projectEmoji.style.transform = 'rotate(360deg) scale(1.5,1.5)';

	//projectEmoji.translate(0,50);
};

const unrotate = () => {
	console.log('unrotate');
	projectEmoji.style.transform = 'initial';
};

titleElement.addEventListener('mouseenter', rotate);
titleElement.addEventListener('mouseleave', unrotate);
*/
