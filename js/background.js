function updateBackgroundColor() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const maxSeconds = 24 * 3600; // 24 hours in seconds

  // Check if it's between 5 PM (17:00) and 12 AM (24:00)
  const isDarkPeriod = hours >= 17 && hours < 24;

  // Calculate the alpha value for the background color (0 to 1)
  let alpha = 0;

  if (isDarkPeriod) {
    // Set a dark background color from 5 PM to 12 AM
    alpha = 1.0;
  } else if (hours >= 9 && hours < 17) {
    // Gradually dim from 9 AM to 5 PM
    alpha = (hours - 8.5) / 8;
  } else {
    // Calculate the alpha based on the time of day
    alpha = 1.0 - totalSeconds / maxSeconds;
  }

  // Set the background color using rgba
  document.body.style.backgroundColor = `rgba(25, 25, 0, ${alpha})`;
}

// Update the background color every second
setInterval(updateBackgroundColor, 1000);

// Call the function once to set the initial background color
updateBackgroundColor();
