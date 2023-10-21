function loadRandomImage() {
    const imageTag = document.getElementById('silhouette');
    // Set the source of the image tag
    imageTag.src = `media/silhouettes/silhouette-${Math.floor(Math.random() * 4)}.svg`
    console.log(imageTag);
}

// Load a random image when the page loads
window.addEventListener('load', loadRandomImage);