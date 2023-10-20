// Get the sundial element
const sundial = document.getElementById("night-school-silhouette");
const paragraphs = document.querySelectorAll("section");

function updateSundialShadow() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Calculate the angle for the shadow (0 degrees at noon, 180 degrees at midnight)
  const angle = (hours - 6) * 30 + minutes / 2;

  // Calculate the X and Y offsets based on the angle
  const xOffset = Math.sin(angle * (Math.PI / 180)) * 10;
  const yOffset = Math.cos(angle * (Math.PI / 180)) * 10;

  // Set the drop shadow based on the calculated offsets
  sundial.style.filter = `drop-shadow(${xOffset}px ${yOffset}px 5px rgba(25, 25, 0, 0.75)`;
  for(i=0;i<paragraphs.length;i++){
    paragraphs[i].style.filter = `drop-shadow(${xOffset}px ${yOffset}px 5px rgba(25, 25, 0, 0.75)`;
  }
}

// Update the sundial shadow every minute
setInterval(updateSundialShadow, 1000);

// Call the function once to set the initial shadow
updateSundialShadow();