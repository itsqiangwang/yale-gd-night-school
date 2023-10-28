const menuCarousel = document.querySelector(".menu-container");
const dishContainers = menuCarousel.querySelectorAll(".dish-container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0;

// Hide all dish containers except the first one
dishContainers.forEach((item, index) => {
  if (index !== 0) {
    item.style.display = "none";
  }
});

// Move to the previous dish container
function goToPreviousItem() {
  dishContainers[currentIndex].style.display = "none";
  currentIndex = (currentIndex - 1 + dishContainers.length) % dishContainers.length;
  dishContainers[currentIndex].style.display = "flex";
}

// Move to the next dish container
function goToNextItem() {
  dishContainers[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % dishContainers.length;
  dishContainers[currentIndex].style.display = "flex";
}

prevButton.addEventListener("click", goToPreviousItem);
nextButton.addEventListener("click", goToNextItem);
