var duration = 15 * 1000;
var defaults = {
  startVelocity: 30,
  spread: 360,
  ticks: 60,
  zIndex: 0
};

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function createConfettiParticle() {
  var particle = document.createElement('div');
  particle.className = 'confetti';
  particle.style.backgroundColor = randomColor();
  particle.style.width = randomInRange(5, 20) + 'px';
  particle.style.height = randomInRange(5, 20) + 'px';
  particle.style.position = 'absolute';
  particle.style.top = '0';
  return particle;
}

function randomColor() {
  var colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722', '#795548', '#607d8b'];
  var index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function startConfettiAnimation() {
  var container = document.getElementById('confetti-container');
  var particles = [];

  function animateParticle(particle) {
    var angle = randomInRange(0, Math.PI * 2);
    var velocity = randomInRange(0.1, 1) * defaults.startVelocity;
    var xVelocity = Math.sin(angle) * velocity;
    var yVelocity = Math.cos(angle) * velocity;

    function update() {
      particle.style.transform = 'translate3d(' + particle.xPos + 'px, ' + particle.yPos + 'px, 0) rotate(' + particle.rotation + 'deg)';
      particle.yPos += yVelocity;
      particle.xPos += xVelocity;
      particle.rotation += randomInRange(-0.5, 0.5);

      if (particle.yPos > window.innerHeight) {
        particle.yPos = -20;
      }
    }

    particle.xPos = Math.random() * window.innerWidth;
    particle.yPos = -20;
    particle.rotation = randomInRange(0, 360);

    setInterval(update, 1000 / defaults.ticks);
  }

  function burstConfetti() {
    var particleCount = 50;
    for (var i = 0; i < particleCount; i++) {
      var particle = createConfettiParticle();
      particles.push(particle);
      container.appendChild(particle);
    }

    particles.forEach(function (particle) {
      animateParticle(particle);
    });
  }

  function clearConfetti() {
    particles.forEach(function (particle) {
      container.removeChild(particle);
    });
    particles = [];
  }

  var interval = setInterval(function () {
    burstConfetti();
    setTimeout(clearConfetti, duration);
  }, duration * 2); // Double the duration to allow time for clearing before the next burst
}

// Start the confetti animation
startConfettiAnimation();
