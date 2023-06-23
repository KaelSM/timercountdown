function startConfettiAnimation() {
    var confettiContainer = document.getElementById("confetti-container");
    var colors = [
      "#f44336",
      "#e91e63",
      "#9c27b0",
      "#673ab7",
      "#3f51b5",
      "#2196f3",
      "#03a9f4",
      "#00bcd4",
      "#009688",
      "#4caf50",
      "#8bc34a",
      "#cddc39",
      "#ffeb3b",
      "#ffc107",
      "#ff9800",
      "#ff5722",
      "#795548",
      "#607d8b"
    ];
  
    function createConfettiParticle() {
      var particle = document.createElement("div");
      particle.className = "confetti";
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.width = Math.floor(Math.random() * 20 + 5) + "px";
      particle.style.height = Math.floor(Math.random() * 20 + 5) + "px";
      particle.style.borderRadius = "50%";
      particle.style.position = "absolute";
      particle.style.top = "-20px";
      particle.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
      return particle;
    }
  
    function animateConfettiParticle(particle) {
      var duration = Math.floor(Math.random() * 3 + 1) * 1000;
      var distance = window.innerHeight + 40;
      var rotation = Math.floor(Math.random() * 360);
  
      particle.style.transform = "translate3d(0, " + distance + "px, 0) rotate(" + rotation + "deg)";
  
      setTimeout(function() {
        confettiContainer.removeChild(particle);
      }, duration);
    }
  
    function burstConfetti() {
      var particleCount = Math.floor(Math.random() * 30 + 20);
      for (var i = 0; i < particleCount; i++) {
        var particle = createConfettiParticle();
        confettiContainer.appendChild(particle);
        animateConfettiParticle(particle);
      }
    }
  
    burstConfetti();
  }
  