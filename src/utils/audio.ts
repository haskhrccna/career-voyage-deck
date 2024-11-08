export const playHoverSound = () => {
  const audio = new Audio('/hover-sound.mp3');
  audio.volume = 0.2;
  audio.play().catch(() => {
    // Silently fail if audio playback is blocked
  });
};