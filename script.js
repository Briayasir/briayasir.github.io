// Theme toggle
const themeSwitch = document.getElementById('theme-switch');
const themeLabel = document.getElementById('theme-label');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

function setTheme(theme) {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(theme);
  themeLabel.textContent = theme.charAt(0).toUpperCase() + theme.slice(1);
  themeSwitch.checked = theme === 'dark';
}

// Set initial theme from system preference
setTheme(prefersDarkScheme.matches ? 'dark' : 'light');

themeSwitch.addEventListener('change', () => {
  setTheme(themeSwitch.checked ? 'dark' : 'light');
});

// Typewriter effect
const typewriterEl = document.getElementById('typewriter');
const typewriterText = 'Data Engineer | Cloud Enthusiast | Problem Solver';
let i = 0;

function typeWriter() {
  if (i < typewriterText.length) {
    typewriterEl.textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
  if (i === typewriterText.length) {
    // Hide the caret once typing is complete
    typewriterEl.style.borderRight = 'none';
  }
}

setTimeout(typeWriter, 800);

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.style.animationPlayState = 'running';
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.animationPlayState = 'paused';
  appearOnScroll.observe(fader);
});
