// Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');
const themeIcon = document.getElementById('theme-icon');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    themeText.textContent = 'Dark';
    themeIcon.className = 'fas fa-sun';
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    let theme = 'light';
    if (document.body.classList.contains('dark')) {
        theme = 'dark';
        themeText.textContent = 'Dark';
        themeIcon.className = 'fas fa-sun';
    } else {
        themeText.textContent = 'Light';
        themeIcon.className = 'fas fa-moon';
    }
    localStorage.setItem('theme', theme);
});

// Project Modal
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close-btn');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

