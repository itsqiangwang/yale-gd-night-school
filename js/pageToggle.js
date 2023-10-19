// Get all list items and sections
const listItems = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');

// Add a click event listener to each list item
listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Remove the "active" class from all list items
        listItems.forEach(item => item.classList.remove('active'));
        // Add the "active" class to the clicked list item
        item.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.style.display = 'none');
        // Show the corresponding section
        sections[index].style.display = 'block';
    });
});

// Add click event listeners to close buttons
const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove the "active" class from the corresponding list item
        listItems[index].classList.remove('active');
        // Hide the corresponding section when the close button is clicked
        sections[index].style.display = 'none';
    });
});