// Audio control initialization
function initAudioControl() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const soundToggle = document.getElementById('soundToggle');
    const soundOnIcon = soundToggle.querySelector('.sound-on');
    const soundOffIcon = soundToggle.querySelector('.sound-off');
    
    // Try to load the last sound state from localStorage
    let isSoundOn = localStorage.getItem('gameSound') !== 'off';
    
    // Function to safely play audio with error handling and user interaction check
    async function playAudio() {
        try {
            // Check if browser requires user interaction
            const playPromise = backgroundMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log('Autoplay prevented. Waiting for user interaction:', error);
                    // Set up one-time click handler to start audio
                    const startAudio = () => {
                        backgroundMusic.play();
                        document.removeEventListener('click', startAudio);
                    };
                    document.addEventListener('click', startAudio);
                });
            }
        } catch (e) {
            console.log('Audio play failed:', e);
        }
    }

    // Function to update sound state
    function updateSoundState(play) {
        isSoundOn = play;
        if (play) {
            playAudio();
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

    // Try to start playing when the page loads (if sound is on)
    if (isSoundOn) {
        // Try immediate playback
        playAudio();
        
        // Fallback: Try again after a short delay
        setTimeout(() => {
            if (backgroundMusic.paused && isSoundOn) {
                playAudio();
            }
        }, 1000);
    }

    // Additional event listeners for various user interactions
    const userInteractions = ['click', 'touchstart', 'keydown'];
    const startAudioOnInteraction = () => {
        if (isSoundOn && backgroundMusic.paused) {
            playAudio();
        }
        userInteractions.forEach(event => {
            document.removeEventListener(event, startAudioOnInteraction);
        });
    };

    userInteractions.forEach(event => {
        document.addEventListener(event, startAudioOnInteraction);
    });
}

// Initialize when the script loads
document.addEventListener('DOMContentLoaded', initAudioControl); 