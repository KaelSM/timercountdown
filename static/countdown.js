document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const subject = urlParams.get('subject');
  const datetime = urlParams.get('datetime');

  const countDown = () => {
    const countDate = new Date(datetime).getTime();
    const flipCards = document.querySelectorAll(".flip-card");
    let isCountdownFinished = false;

    function updateCountdown() {
      const now = new Date().getTime();
      const gap = countDate - now;

      if (gap <= 0 && !isCountdownFinished) {
        clearInterval(interval);
        isCountdownFinished = true;
        displayConfettiAndNotification();
        return;
      }

      const seconds = Math.floor((gap / 1000) % 60);
      const minutes = Math.floor((gap / 1000 / 60) % 60);
      const hours = Math.floor((gap / 1000 / 60 / 60) % 24);
      const days = Math.floor(gap / 1000 / 60 / 60 / 24);

      flip(flipCards[0], Math.floor(days / 10));
      flip(flipCards[1], days % 10);
      flip(flipCards[2], Math.floor(hours / 10));
      flip(flipCards[3], hours % 10);
      flip(flipCards[4], Math.floor(minutes / 10));
      flip(flipCards[5], minutes % 10);
      flip(flipCards[6], Math.floor(seconds / 10));
      flip(flipCards[7], seconds % 10);
    }

    function flip(flipCard, newNumber) {
      const topHalf = flipCard.querySelector(".top");
      const startNumber = parseInt(topHalf.textContent);
      if (newNumber === startNumber) return;

      const bottomHalf = flipCard.querySelector(".bottom");
      const topFlip = document.createElement("div");
      topFlip.classList.add("top-flip");
      const bottomFlip = document.createElement("div");
      bottomFlip.classList.add("bottom-flip");

      topHalf.textContent = startNumber;
      bottomHalf.textContent = startNumber;
      topFlip.textContent = startNumber;
      bottomFlip.textContent = newNumber;

      topFlip.addEventListener("animationstart", () => {
        topHalf.textContent = newNumber;
      });
      topFlip.addEventListener("animationend", () => {
        topFlip.remove();
      });
      bottomFlip.addEventListener("animationend", () => {
        bottomHalf.textContent = newNumber;
        bottomFlip.remove();
      });
      flipCard.append(topFlip, bottomFlip);
    }

    
    function displayConfettiAndNotification() {
      const confettiContainer = document.getElementById("confetti-container");
      const notification = document.getElementById("notification");
      const closeButton = document.getElementById("close-button");
      const homeButton = document.getElementById("home-button");

    
      confettiContainer.style.display = "block";
      notification.style.display = "block";
    
      const duration = 15 * 1000; // Duration of the confetti animation in milliseconds
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      closeButton.addEventListener("click", function() {
        // Close the notification and close the tab
        notification.style.display = "none";
        window.close();
      });
      
      homeButton.addEventListener("click", function() {
        // Go back to the home page
        window.location.href = "home.html"; // Replace "home.html" with the actual URL of your home page
      });


      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }
    
      function startConfettiAnimation() {
        const animationEnd = Date.now() + duration;
    
        const interval = setInterval(function() {
          const timeLeft = animationEnd - Date.now();
    
          if (timeLeft <= 0) {
            clearInterval(interval);
            startConfettiAnimation(); // Restart the confetti animation
            return;
          }
    
          const particleCount = 50 * (timeLeft / duration);
    
          // since particles fall down, start a bit higher than random
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
          );
          confetti(
            Object.assign({}, defaults, {
              particleCount,
              origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
          );
        }, 250);
      }
    
      startConfettiAnimation(); // Start the initial confetti animation
    }
    

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
  };

  countDown();
});