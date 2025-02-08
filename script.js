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
};
