document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');
    const audioToggleBtn = document.getElementById('audioToggle');

  
    audioToggleBtn.textContent = video.muted ? 'Unmute Audio' : 'Mute Audio';

    
    audioToggleBtn.addEventListener('click', function () {
        
        video.muted = !video.muted;

        
        audioToggleBtn.textContent = video.muted ? 'Unmute Audio' : 'Mute Audio';
    });
});