const heart = document.querySelector('.heart');

function animateHeart() {
  heart.classList.add('beat');
  setTimeout(function() {
    heart.classList.remove('beat');
  }, 1000);
}

setInterval(animateHeart, 2000);