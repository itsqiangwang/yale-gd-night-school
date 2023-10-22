function updateSundialShadow() {
  const image = document.getElementById("night-school-silhouette");
  const paragraphs = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll("nav ul li");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const angle = (hours % 12) * 30 + (minutes / 60) * 30 + (seconds / 60) * 0.5; // Calculate the angle based on the current time

  const shadowX = Math.sin((angle * Math.PI) / 180) * 100; // Shadow X position
  const shadowY = -Math.cos((angle * Math.PI) / 180) * 100; // Shadow Y position

  image.style.filter = `drop-shadow(${shadowX}px ${shadowY}px 10px rgb(25, 25, 0)`;
  for (i = 0; i < paragraphs.length; i++) {
    paragraphs[
      i
    ].style.filter = `drop-shadow(${shadowX}px ${shadowY}px 10px rgb(25, 25, 0)`;
  }
  for (i = 0; i < menuLinks.length; i++) {
    menuLinks[
      i
    ].style.filter = `drop-shadow(${shadowX}px ${shadowY}px 10px rgb(25, 25, 0)`;
  }
}

// Update the shadow initially and then every second
updateSundialShadow();
setInterval(updateSundialShadow, 1000);