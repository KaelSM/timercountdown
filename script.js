document.addEventListener("DOMContentLoaded", function() {
    const countDown = () => {
      const countDate = new Date("June 8, 2023 14:00:00").getTime(); // June 8, 2023 at 2 PM
      const flipCards = document.querySelectorAll(".flip-card");
  
      setInterval(updateCountdown, 1000);
  
      function updateCountdown() {
        const now = new Date().getTime();
        const gap = countDate - now;
  
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
      
      updateCountdown();
    };
    
    countDown();
    });