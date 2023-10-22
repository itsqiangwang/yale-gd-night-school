function updateBackgroundColor() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  let alpha = 0;

  if (hours >= 17 && hours < 24) {
    // Dimmest from 5 PM to 12 AM
    alpha = 1;
  } else if (hours >= 0 && hours < 9) {
    // Gradually get brighter from 12 AM to 9 AM
    alpha = 1 - (totalMinutes - 0) / (9 * 60 - 0);
  } else if (hours >= 9 && hours < 17) {
    // Gradually get dimmer from 9 AM to 5 PM
    alpha = (totalMinutes - 9 * 60) / (17 * 60 - 9 * 60);
  }

  document.body.style.backgroundColor = `rgba(25, 25, 0, ${alpha})`;
}

setInterval(updateBackgroundColor, 1000); // Update every second
updateBackgroundColor(); // Initial call