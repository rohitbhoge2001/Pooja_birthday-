const images = [];
for (let i = 1; i <= 15; i++) {
  images.push(assets/mem${i}.jpg);
}

let current = 0;

function startShow() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('slideshow').style.display = 'block';
  document.getElementById('bg-music').play();
  document.getElementById('slide-img').src = images[current];
  generateHearts();
  generatePetals();
  generateConfetti();
}

function nextImage() {
  if (current < images.length - 1) {
    current++;
    document.getElementById('slide-img').src = images[current];
  } else {
    document.getElementById('slideshow').style.display = 'none';
    document.getElementById('videos').style.display = 'block';
  }
}

function prevImage() {
  if (current > 0) {
    current--;
    document.getElementById('slide-img').src = images[current];
  }
}

function showFinal() {
  document.getElementById('videos').style.display = 'none';
  document.getElementById('final-message').style.display = 'block';
}

function generateHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

function generatePetals() {
  setInterval(() => {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    document.getElementById('petals-container').appendChild(petal);
    setTimeout(() => petal.remove(), 5000);
  }, 400);
}

function generateConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = ${Math.random() * 3}s;
    document.getElementById('confetti-container').appendChild(confetti);
  }
}
