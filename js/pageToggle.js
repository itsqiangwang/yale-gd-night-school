// Get all list items and sections
const listItems = document.querySelectorAll('nav ul li');
const sections = document.querySelectorAll('section');
const toggleButton = document.getElementById('toggleButton');

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
        sections[index].style.backgroundColor = 'rgba(25,25,0,0.25)';

        toggleButton.style.zIndex = "0";
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

        toggleButton.style.zIndex = "1";
    });
});