// Get all filter buttons
const filterButtons = document.querySelectorAll('.filter button');

// Add click event listener to each button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Toggle 'selected' class on the clicked button
    button.classList.toggle('selected');

    // If the "All" button is clicked, remove 'selected' class from other buttons
    if (button.id === 'all') {
      filterButtons.forEach(btn => {
        if (btn !== button) {
          btn.classList.remove('selected');
        }
      });
    } else {
      // If a category button is clicked, make sure the "All" button is not selected
      document.getElementById('all').classList.remove('selected');
    }
  });
});