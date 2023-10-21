const rotatingCircle = document.getElementById('playlist-container');
let rotationAngle = 0;

function rotateCircle() {
    rotationAngle += 0.1; // Adjust the rotation speed by changing this value
    rotatingCircle.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
    requestAnimationFrame(rotateCircle);
}

rotateCircle(); // Start the rotation
