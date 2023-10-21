const playlist = document.getElementById("playlist");

// Create an audio element programmatically
const audio = new Audio();

// Add a click event listener to the playlist
playlist.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "LI") {
    const audioFile = e.target.getAttribute("data-audio");

    // Set the audio source and play the selected song
    audio.src = audioFile;
    audio.play();
  }
});