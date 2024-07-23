const projectsSectionButton = document.getElementById('projects-section-button');
const projectsSection = document.getElementById('projects-section');
const goBackButton = document.getElementById('go-back-button');

projectsSectionButton.addEventListener('click', () => {
	projectsSection.classList.remove('hidden');
});

goBackButton.addEventListener('click', () => {
	projectsSection.classList.add('hidden');
});
