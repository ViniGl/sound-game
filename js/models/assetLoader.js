(function() {
  const audioFiles = {
    success: 'assets/sounds/success.mp3',
    skip: 'assets/sounds/skip.mp3',
    timesUp: 'assets/sounds/times_up.mp3',
  };

  const audioPool = {};
  let unlocked = false;

  // Pre-instantiate audio objects
  Object.keys(audioFiles).forEach(key => {
    audioPool[key] = new Audio(audioFiles[key]);
  });

  // Call this on the first user click/tap to bypass browser restrictions
  function unlockAudio() {
    if (unlocked) return;
    Object.values(audioPool).forEach(audio => {
      audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
      }).catch(() => {
        // Silently catch initial block before user interaction
      });
    });
    unlocked = true;
  }

  function playSound(soundName) {
    const audio = audioPool[soundName];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(err => {
        console.warn(`Audio playback blocked for ${soundName}:`, err);
      });
    }
  }

  window.AssetLoader = {
    unlockAudio,
    playSound
  };
})();