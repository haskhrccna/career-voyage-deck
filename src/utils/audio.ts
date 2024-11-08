export const playHoverSound = () => {
  try {
    const audio = new Audio('/hover-sound.mp3');
    audio.volume = 0.1; // Reduced volume for better user experience
    audio.currentTime = 0; // Reset audio to start
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }
  } catch (error) {
    console.log("Error creating audio:", error);
  }
};