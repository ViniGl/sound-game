(function() {
  let intervalId = null;
  let remaining = 60;

  function configureTimer(durationInSeconds) {
    window.GameState.turnDuration = durationInSeconds;
    remaining = durationInSeconds;
  }

  function startTimer(onTick, onExpire) {
    stopTimer();
    remaining = window.GameState.turnDuration;

    if (onTick) onTick(remaining);

    intervalId = setInterval(() => {
      remaining--;
      if (onTick) onTick(remaining);

      if (remaining <= 0) {
        stopTimer();
        if (onExpire) onExpire();
      }
    }, 1000);
  }

  function stopTimer() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  window.TimerModule = {
    configure: configureTimer,
    start: startTimer,
    stop: stopTimer
  };
})();