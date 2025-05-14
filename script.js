
for (let i = 1; i <= 15; i++) {
  images.push(assets/mem${i}.jpg);
}

let current = 0;

function startShow() {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('slideshow').style.display = 'block';
  document.getElementById('bg-music').play();
  document.getElementById('slide-img').src = images[current];
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
