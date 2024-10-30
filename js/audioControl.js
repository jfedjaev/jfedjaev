// Audio control initialization
function initAudioControl() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const soundToggle = document.getElementById('soundToggle');
    const soundOnIcon = soundToggle.querySelector('.sound-on');
    const soundOffIcon = soundToggle.querySelector('.sound-off');
    
    // Try to load the last sound state from localStorage
    let isSoundOn = localStorage.getItem('gameSound') !== 'off';
    
    // Function to update sound state
    function updateSoundState(play) {
        isSoundOn = play;
        if (play) {
            backgroundMusic.play().catch(e => console.log('Audio play failed:', e));
            soundOnIcon.style.display = 'block';
            soundOffIcon.style.display = 'none';
            localStorage.setItem('gameSound', 'on');
        } else {
            backgroundMusic.pause();
            soundOnIcon.style.display = 'none';
            soundOffIcon.style.display = 'block';
            localStorage.setItem('gameSound', 'off');
        }
    }

    // Initialize sound state
    updateSoundState(isSoundOn);

    // Sound toggle button click handler
    soundToggle.addEventListener('click', () => {
        updateSoundState(!isSoundOn);
    });

    // Start playing when the page loads (if sound is on)
    document.addEventListener('DOMContentLoaded', () => {
        if (isSoundOn) {
            backgroundMusic.play().catch(e => console.log('Audio play failed:', e));
        }
    });
}

// Initialize when the script loads
document.addEventListener('DOMContentLoaded', initAudioControl); 