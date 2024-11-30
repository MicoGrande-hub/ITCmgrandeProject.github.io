// Ensure the script runs after the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');
    const audioToggleBtn = document.getElementById('audioToggle');

    // Check the initial state of the video (muted by default in the HTML)
    audioToggleBtn.textContent = video.muted ? 'Unmute Audio' : 'Mute Audio';

    // Add an event listener to the button to toggle the mute state of the video
    audioToggleBtn.addEventListener('click', function () {
        // Toggle the muted state of the video
        video.muted = !video.muted;

        // Change the button text based on the muted state
        audioToggleBtn.textContent = video.muted ? 'Unmute Audio' : 'Mute Audio';
    });
});