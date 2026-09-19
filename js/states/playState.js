(function () {
  let isHolding = false;

  function init() {
    bindHoldEvents();
    window.DOM.play.btnSuccess.addEventListener('click', () => handleWordAction(true));
    window.DOM.play.btnSkip.addEventListener('click', () => handleWordAction(false));
  }

  function enter() {
    const firstWord = window.SessionModule.startTurn();
    window.Renderers.renderWordCard(firstWord);
    window.Renderers.setWordMaskRevealed(false);

    window.TimerModule.configure(window.GameState.turnDuration);
    window.TimerModule.start(
      (seconds) => window.Renderers.renderTimer(seconds),
      handleTimerExpired
    );
  }

  function bindHoldEvents() {
    const btn = window.DOM.play.btnHoldReveal;

    const startReveal = (e) => {
      e.preventDefault();
      isHolding = true;
      window.Renderers.setWordMaskRevealed(true);
    };

    const stopReveal = (e) => {
      if (!isHolding) return;
      e.preventDefault();
      isHolding = false;
      window.Renderers.setWordMaskRevealed(false);
    };

    btn.addEventListener('touchstart', startReveal, { passive: false });
    btn.addEventListener('touchend', stopReveal, { passive: false });
    btn.addEventListener('touchcancel', stopReveal, { passive: false });
    btn.addEventListener('mousedown', startReveal);
    btn.addEventListener('mouseup', stopReveal);
    btn.addEventListener('mouseleave', stopReveal);
  }

  function handleWordAction(success) {
    window.Renderers.setWordMaskRevealed(false);

    // Play sound effect
    if (success) {
      window.AssetLoader.playSound('success');
    } else {
      window.AssetLoader.playSound('skip');
    }

    const nextWord = window.SessionModule.recordWordResult(success);
    window.Renderers.renderWordCard(nextWord);
  }

  function handleTimerExpired() {
    // Play time's up sound
    window.AssetLoader.playSound('timesUp');

    window.SessionModule.handleTimerExpired();
    window.StateManager.switchState('summary');
  }

  function exit() {
    window.TimerModule.stop();
    window.Renderers.setWordMaskRevealed(false);
  }

  window.PlayState = {
    screenElement: document.getElementById('screen-play'),
    init,
    enter,
    exit
  };
})();