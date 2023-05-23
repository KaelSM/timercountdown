document.addEventListener("DOMContentLoaded", function() {
    const countDown = () => {
      // This code sets the date of the next election, and selects all flip cards.

  const countDate = new Date("June 8, 2023 14:00:00").getTime(); // June 8, 2023 at 2 PM
      const flipCards = document.querySelectorAll(".flip-card");
  
      setInterval(updateCountdown, 1000);
  
      // This code updates the countdown on the screen based on the current time.
// It calculates the time left to the event by subtracting the current time from the event time.
// It then calculates the number of days, hours, minutes, and seconds left to the event.
// Finally, it updates the flip cards on the screen with the values for days, hours, minutes, and seconds.

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
      
// This function is responsible for flipping the cards. 
// It takes two arguments, the card to be flipped, and the new number to display
// It checks to see if the new number is the same as the current number, and if it is, it returns
// If the new number is different, it creates two new divs, topFlip and bottomFlip
// It then sets the text content of the top and bottom halves of the card to the current number
// and sets the text content of the topFlip and bottomFlip divs to the new number
// It then adds event listeners to the topFlip and bottomFlip divs
// The "animationstart" event listener sets the text content of the top half of the card to the new number
// The "animationend" event listeners remove the topFlip and bottomFlip divs
// Finally, the function appends the topFlip and bottomFlip divs to the flipCard

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