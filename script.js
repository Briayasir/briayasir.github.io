document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const checkbox = document.getElementById('theme-checkbox');
  const label = document.getElementById('theme-label');

  // detect system default
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem('theme');

  function applyTheme(name){
    if(name === 'dark'){
      body.classList.add('dark');
      checkbox.checked = true;
      label.textContent = 'Dark';
    } else {
      body.classList.remove('dark');
      checkbox.checked = false;
      label.textContent = 'Light';
    }
  }

  if(saved){
    applyTheme(saved);
  } else {
    applyTheme(prefersDark ? 'dark' : 'light');
  }

  // Listen to system changes (optional — updates if user changes OS theme)
  if(window.matchMedia){
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if(!localStorage.getItem('theme')){ // only auto-change if user hasn't selected
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // Toggle (user action)
  checkbox.addEventListener('change', () => {
    const chosen = body.classList.contains('dark') ? 'light' : 'dark'; // because class toggled after click
    applyTheme(chosen);
    localStorage.setItem('theme', chosen);
    // small animation hint: briefly pulse background
    body.animate([{filter:'brightness(1.02)'},{filter:'brightness(1)'}], {duration:360});
  });

  /* ---------------- Skill modal ---------------- */
  const skillModal = document.getElementById('skill-modal');
  const skillTitle = document.getElementById('skill-title');
  const skillInfo = document.getElementById('skill-info');

  document.querySelectorAll('.skill').forEach(btn => {
    btn.addEventListener('click', () => {
      skillTitle.textContent = btn.dataset.title;
      skillInfo.textContent = btn.dataset.info;
      openModal(skillModal);
    });
  });

  /* ---------------- Project modal ---------------- */
  const projectModal = document.getElementById('project-modal');
  const projectTitle = document.getElementById('project-title');
  const projectDesc = document.getElementById('project-desc');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      projectTitle.textContent = card.dataset.title;
      projectDesc.textContent = card.dataset.desc;
      openModal(projectModal);
    });
  });

  // common modal open/close helpers
  function openModal(modal){
    modal.classList.add('show');
    modal.setAttribute('aria-hidden','false');
    // trap focus simple: focus first focusable (close button)
    const closeBtn = modal.querySelector('.modal-close');
    if(closeBtn) closeBtn.focus();
  }
  function closeModal(modal){
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
  }

  // close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(btn.closest('.modal'));
    });
  });

  // click outside to close
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if(e.target === modal) closeModal(modal);
    });
  });

  // close with Esc
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
      document.querySelectorAll('.modal.show').forEach(m => closeModal(m));
    }
  });

  // LinkedIn click (placeholder) - optional: set real link
  const li = document.getElementById('linkedin-link');
  li.addEventListener('click', (e) => {
    // Replace '#' in HTML with your LinkedIn URL or uncomment next line for demo redirect
    // e.preventDefault(); window.open('https://www.linkedin.com/in/your-link','_blank');
  });
});
