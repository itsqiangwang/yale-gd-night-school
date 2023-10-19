var objectSilhouette = document.getElementById("night-school-silhouette");

function shadow() {
  let d = new Date();
  let hour = d.getHours();
  // if (hour >= 6 && hour < 20){
  objectSilhouette.style.filter =
    "drop-shadow(" +
    hour +
    "px " +
    Math.abs(10 * (12 - hour)) +
    "px " +
    "4px rgba(0,0,0,0.5)";
  // }
}
setInterval(shadow, 1);

function bouncingMenu() {}

function backgroundColor() {}
