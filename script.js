// Detect System Theme
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const body = document.body;
const checkbox = document.getElementById("theme-checkbox");
const themeLabel = document.getElementById("theme-label");

if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        checkbox.checked = true;
        themeLabel.textContent = "Dark";
    } else {
        body.classList.remove("dark");
        checkbox.checked = false;
        themeLabel.textContent = "Light";
    }
} else {
    if (prefersDark) {
        body.classList.add("dark");
        checkbox.checked = true;
        themeLabel.textContent = "Dark";
    }
}

// Toggle Theme
checkbox.addEventListener("change", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        themeLabel.textContent = "Dark";
        localStorage.setItem("theme", "dark");
    } else {
        themeLabel.textContent = "Light";
        localStorage.setItem("theme", "light");
    }
});

// Project Modal
const projectCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close-btn");

projectCards.forEach(card => {
    card.addEventListener("click", () => {
        modalTitle.textContent = card.dataset.title;
        modalDesc.textContent = card.dataset.desc;
        modal.style.display = "block";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
