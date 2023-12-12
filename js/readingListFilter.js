// Get all filter buttons
const filterButtons = document.querySelectorAll('.filter button');

// Add click event listener to each button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'selected' class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('selected'));

    // Add 'selected' class to the clicked button
    button.classList.add('selected');
  });
});