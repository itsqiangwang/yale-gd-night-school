// Get all filter buttons
const filterButtons = document.querySelectorAll('.filter button');

// Add click event listener to each button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'selected' class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('selected'));

    // Add 'selected' class to the clicked button
    button.classList.add('selected');

    // Get the filter criteria from the clicked button (assuming it's the button's id)
    const filterCriteria = button.id;

    // Get all content items
    const contentItems = document.querySelectorAll('#reading-list__content h3');

    // Toggle visibility of content based on filter criteria
    contentItems.forEach(item => {
      const itemCategories = item.classList;

      if (filterCriteria === 'all' || itemCategories.contains(`category__${filterCriteria}`)) {
        item.parentElement.style.display = 'block'; // Show the content
      } else {
        item.parentElement.style.display = 'none'; // Hide the content
      }
    });
  });
});
