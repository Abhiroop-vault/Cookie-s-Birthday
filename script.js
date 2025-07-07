function nextPage(nextId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  const nextPageElement = document.getElementById(nextId);
  nextPageElement.classList.add('active');

  // Trigger confetti and sprinkles on Happy Birthday page
  if (nextId === 'page6') {
    confettiEffect();
    triggerSprinkles();
  }
}

function confettiEffect() {
  confetti({
    particleCount: 180,
    spread: 100,
    origin: { y: 0.6 },
  });
}

function triggerSprinkles() {
  const container = document.getElementById('sprinkle-container');
  container.innerHTML = '';

  for (let i = 0; i < 30; i++) {
    const sprinkle = document.createElement('div');
    sprinkle.classList.add('sprinkle');
    sprinkle.style.left = Math.random() * 100 + '%';
    sprinkle.style.top = Math.random() * 100 + '%';
    sprinkle.style.animationDuration = `${1 + Math.random()}s`;
    container.appendChild(sprinkle);
  }
}
