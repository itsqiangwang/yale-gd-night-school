// Get all list items and sections
const listItems = document.querySelectorAll('li');
const sections = document.querySelectorAll('section');

// Add a click event listener to each list item
listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Remove the "active" class from all list items
        listItems.forEach(listItem => {
            listItem.classList.remove('active');
        });
        // Add the "active" class to the clicked list item
        item.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.style.display = 'none');
        // Show the corresponding section
        sections[index].style.display = 'block';

        // Check if a "Close" button already exists in the list item
        const closeButton = item.querySelector('.close-button');
        if (!closeButton) {
            // Create and append a "Close" button to the clicked list item
            const newCloseButton = document.createElement('button');
            newCloseButton.textContent = 'Close';
            newCloseButton.classList.add('close-button');
            item.appendChild(newCloseButton);

            // Add click event listener to the close button
            newCloseButton.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevent the click from propagating to the list item
                // Hide the corresponding section when the close button is clicked
                sections[index].style.display = 'none';
                // Remove the "Close" button from the list item
                item.removeChild(newCloseButton);
                // Remove the "active" class from the list item
                item.classList.remove('active');
            });
        }

        // Remove the "Close" buttons from all other list items
        listItems.forEach((otherItem, otherIndex) => {
            if (otherIndex !== index) {
                const otherCloseButton = otherItem.querySelector('.close-button');
                if (otherCloseButton) {
                    otherItem.removeChild(otherCloseButton);
                }
            }
        });
    });
});