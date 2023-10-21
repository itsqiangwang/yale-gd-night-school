const datePicker = document.getElementById("datePicker");
const carouselmenus = document.querySelectorAll(".menu-container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0;
const currentIndexMap = {}; // Map to store the current index for each option

// Hide all carousel menus except the selected one
function hideAllCarouselmenus() {
  carouselmenus.forEach((menu) => {
    menu.style.display = "none";
  });
}

// Handle option selection
datePicker.addEventListener("change", () => {
  hideAllCarouselmenus();

  const selectedValue = datePicker.value;

  // Show the selected carousel menu
  document.querySelector(`.menu-container.${selectedValue}`).style.display =
    "flex";

  // Check if there's a stored index for this option and use it
  currentIndex = currentIndexMap[selectedValue] || 0;
  showSlide(currentIndex);
});

// Display the current slide
function showSlide(index) {
  const currentmenu = document.querySelector(
    '.menu-container:not([style*="display: none;"])'
  );
  const carouselItems = currentmenu.querySelectorAll(".dish-container");

  const numSlides = parseInt(currentmenu.getAttribute("number-of-slides"));

  carouselItems.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });

  // Update the stored index for the current option
  currentIndexMap[datePicker.value] = index;
  currentIndexMap[`${datePicker.value}_slides`] = numSlides;
}

// Move to the previous slide
function goToPreviousSlide() {
  const numSlides = currentIndexMap[`${datePicker.value}_slides`];
  currentIndex = (currentIndex - 1 + numSlides) % numSlides;
  showSlide(currentIndex);
}

// Move to the next slide
function goToNextSlide() {
  const numSlides = currentIndexMap[`${datePicker.value}_slides`];
  currentIndex = (currentIndex + 1) % numSlides;
  showSlide(currentIndex);
}

// Initialize the carousel with the first slide displayed
hideAllCarouselmenus();
document.querySelector(`.menu-container.${datePicker.value}`).style.display =
  "flex";

// Initialize the number of slides for the current option
currentIndexMap[`${datePicker.value}_slides`] = parseInt(
  document
    .querySelector(`.menu-container.${datePicker.value}`)
    .getAttribute("number-of-slides")
);

showSlide(currentIndex);

prevButton.addEventListener("click", goToPreviousSlide);
nextButton.addEventListener("click", goToNextSlide);
