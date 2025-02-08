let inflationCount = 0;

window.onload = function() {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const heart = document.getElementById("heart");
  const valentinesContainer = document.getElementById("valentinesContainer");
  const finalContainer = document.getElementById("finalContainer");

  // YES button logic
  yesBtn.addEventListener("click", () => {
    inflationCount++;
    // Increase heart size
    heart.style.transform = `scale(${1 + inflationCount * 0.2})`;

    // Once inflated 3 times, pop and go to final page
    if (inflationCount === 3) {
      // "Pop" effect - you can do a quick class toggle or an animation
      setTimeout(() => {
        valentinesContainer.style.display = "none";
        finalContainer.style.display = "block";
      }, 500); // short delay after final click
    }
  });

  // NO button logic
  // Example: reprompt or show a silly alert
  noBtn.addEventListener("click", () => {
    alert("Aww, come on! Give it a second thought...");
    // Could relocate the "No" button or do something else quirky
  });
  createFallingHearts(40);

};

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