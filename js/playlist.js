const audioPlayer = document.getElementById("audio-player");
const audioSource = document.getElementById("audio-source");
const currentSongName = document.getElementById("current-song-name");
const songList = document.getElementById("song-list");
const audioPlayerContainer = document.getElementById("audio-player-container");
const playPauseButton = document.getElementById("play-pause-button");
let currentSongIndex = -1; // Variable to track the index of the current song

// Function to play a specific song
function playSong(songLink) {
  const songSrc = songLink.getAttribute("data-src");
  const currentSongNameText = songLink.getAttribute("data-title");

  if (songSrc) {
    audioSource.src = songSrc;
    audioPlayer.load();
    audioPlayer.play();
    currentSongName.textContent = currentSongNameText;
    audioPlayerContainer.style.display = "flex";
    playPauseButton.textContent = "Pause"; // Update button text to "Pause"

    // Remove the "active" class from all songs and current song name
    const songs = songList.getElementsByTagName("a");
    for (const song of songs) {
      song.classList.remove("active");
    }
    currentSongName.classList.remove("active");

    // Add the "active" class to the currently playing song and current song name
    songLink.classList.add("active");
    currentSongName.classList.add("active");

    currentSongIndex = Array.from(songLink.parentElement.children).indexOf(songLink); // Update the current song index
  }
}

// Function to play the next song
function playNextSong() {
  const songs = songList.getElementsByTagName("a");
  currentSongIndex = (currentSongIndex + 1) % songs.length; // Calculate the index of the next song
  const nextSong = songs[currentSongIndex];
  playSong(nextSong);
}

// Function to toggle play/pause
function togglePlayPause() {
  if (audioPlayer.paused) {
    if (currentSongIndex >= 0) {
      audioPlayer.play();
      playPauseButton.textContent = "Pause"; // Update button text to "Pause"
    } else {
      // If the audio player is paused and there's no current song, play the first song
      const firstSong = songList.querySelector("a");
      playSong(firstSong);
    }
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = "Play"; // Update button text to "Play"
  }
}

playPauseButton.addEventListener("click", togglePlayPause);

songList.addEventListener("click", (e) => {
  e.preventDefault();
  const songLink = e.target;
  playSong(songLink);
});

audioPlayer.addEventListener("ended", playNextSong);
