// Theme detection
const toggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');

// Check system preference
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark');
  toggle.checked = true;
  themeLabel.textContent = 'Dark';
} else {
  themeLabel.textContent = 'Light';
}

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', toggle.checked);
  themeLabel.textContent = toggle.checked ? 'Dark' : 'Light';
});

// Smooth scroll
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
  });
});

// Modal logic
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalClose = document.getElementById('modal-close');

// Skill modal
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => {
    modalText.textContent = card.dataset.skill;
    modal.style.display = 'block';
  });
});

// Project modal
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    modalText.textContent = card.dataset.project;
    modal.style.display = 'block';
  });
});

modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', e => {
  if (e.target === modal) modal.style.display = 'none';
});
