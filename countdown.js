document.addEventListener("DOMContentLoaded", function() {
  const countDown = () => {
    const countDate = new Date("June 22, 2023 16:36:00").getTime();
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

      confettiContainer.style.display = "block";
      confetti({
        particleCount: 100,
        spread: 160,
        origin: { y: 0.6 }
      });

      setTimeout(function() {
        notification.style.display = "block";
      }, 3000);
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
  };

  countDown();
});
