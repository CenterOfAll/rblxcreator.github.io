const videoInput = document.getElementById("videoInput");
const videoPlayer = document.getElementById("videoPlayer");
const playPauseButton = document.getElementById("playPauseButton");
const speedControl = document.getElementById("speedControl");

videoInput.addEventListener("change", function() {
    const file = videoInput.files[0];
    if (file) {
        const objectURL = URL.createObjectURL(file);
        videoPlayer.src = objectURL;
    }
});

playPauseButton.addEventListener("click", function() {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseButton.textContent = "Pause";
    } else {
        videoPlayer.pause();
        playPauseButton.textContent = "Play";
    }
});

speedControl.addEventListener("input", function() {
    const speed = parseFloat(speedControl.value);
    videoPlayer.playbackRate = speed;
});
