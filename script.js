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
