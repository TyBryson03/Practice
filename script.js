let inflationCount = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heart = document.getElementById("heart");
const valentinesContainer = document.getElementById("valentinesContainer");
const finalContainer = document.getElementById("finalContainer");
const heartBackground = document.getElementById("heartsBackground");

// Create flash overlay and append it to the body
const flashOverlay = document.createElement("div");
flashOverlay.classList.add("white-flash");
document.body.appendChild(flashOverlay);

// YES button logic
yesBtn.addEventListener("click", () => {
  inflationCount++;
  heart.style.transform = `scale(${1 + inflationCount * 0.2})`;

  // Once inflated 3 times, trigger the flash effect and transition
  if (inflationCount === 3) {
    // Add a short delay to simulate the "pop" before the flash
    setTimeout(() => {
      flashOverlay.style.opacity = "1";  // Flash to white

      // After the flash, switch to the final page
      setTimeout(() => {
        heartBackground.style.display = "none";
        finalContainer.style.display = "block";
        flashOverlay.style.opacity = "0";  // Reset flash (optional)
      }, 2000);  // Adjust this to control the length of the flash
    }, 0);  // Delay to match the "pop" effect
  }
});


  // NO button logic
  // Example: reprompt or show a silly alert
  noBtn.addEventListener("click", () => {
  random = Math.floor(Math.random() * 4);
  if (random == 0) {
    noBtn.innerText = "please...";
  }
  if (random == 1) {
    noBtn.inenerText = "click yes";
  }
  if (random == 2) {
    noBtn.innerText = "that was rude";
  }
  if (random == 3) {
  noBtn.innerText = "wrong answer";
  }
    // Could relocate the "No" button or do something else quirky
  });
  createFallingHearts(40);



function createFallingHearts(count) {
    const heartsContainer = document.getElementById("heartsBackground");
    console.log("heartsContainer is:", heartsContainer);

  if (!heartsContainer) {
    // If you see this, the ID is still not matching or the HTML isn't loaded
    console.error("Could not find heartsBackground element!");
    return;
  }
    for (let i = 0; i < count; i++) {
      // 1) Create a new div
      const heart = document.createElement("div");
      heart.classList.add("falling-heart");
  
      // 2) Random left position from 0% to 100%
      const leftPos = Math.random() * 100; 
      heart.style.left = `${leftPos}%`;
  
      // 3) Random delay from 0s to 5s (so they don't all fall at once)
      const delay = Math.random() * 10;
      heart.style.animationDelay = `${delay}s`;
  
      // 4) Append to the container
      heartsContainer.appendChild(heart);
    }
}