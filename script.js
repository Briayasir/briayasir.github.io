// Theme handling
const themeSwitch = document.getElementById('theme-switch');
const themeLabel = document.getElementById('theme-label');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  document.body.className = theme;
  themeLabel.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
  themeSwitch.checked = theme === 'dark';
}

applyTheme(prefersDarkScheme.matches ? 'dark' : 'light');

themeSwitch.addEventListener('change', () => {
  applyTheme(themeSwitch.checked ? 'dark' : 'light');
});

// Typewriter effect
const typewriterEl = document.getElementById('typewriter');
const typewriterText = "Data Engineer | Cloud Enthusiast | Problem Solver";
let i = 0;
function typeWriter() {
  if (i < typewriterText.length) {
    typewriterEl.textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
setTimeout(typeWriter, 800);

// Skill modal
const skillModal = document.getElementById('skill-modal');
const skillInfo = document.getElementById('skill-info');
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => {
    skillInfo.textContent = card.dataset.skill;
    skillModal.style.display = 'block';
  });
});
document.querySelectorAll('.modal .close').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    skillModal.style.display = 'none';
    projectModal.style.display = 'none';
  });
});

// Project modal
const projectModal = document.getElementById('project-modal');
const projectTitle = document.getElementById('project-title');
const projectDesc = document.getElementById('project-desc');
const projectImg = document.getElementById('project-img');

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    projectTitle.textContent = card.dataset.title;
    projectDesc.textContent = card.dataset.desc;
    projectImg.src = card.dataset.img;
    projectModal.style.display = 'block';
  });
});
