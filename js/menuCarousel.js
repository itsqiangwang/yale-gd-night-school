const menuCarousel = document.querySelector(".menu-container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0;

// Move to the previous dish container
function goToPreviousItem() {
  const dishContainers = menuCarousel.querySelectorAll(".dish-container");
  dishContainers[currentIndex].style.display = "none";
  currentIndex = (currentIndex - 1 + dishContainers.length) % dishContainers.length;
  dishContainers[currentIndex].style.display = "flex";
}

// Move to the next dish container
function goToNextItem() {
  const dishContainers = menuCarousel.querySelectorAll(".dish-container");
  dishContainers[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % dishContainers.length;
  dishContainers[currentIndex].style.display = "flex";
}

prevButton.addEventListener("click", goToPreviousItem);
nextButton.addEventListener("click", goToNextItem);
