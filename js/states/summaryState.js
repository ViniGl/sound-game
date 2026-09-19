(function() {
  function init() {
    window.DOM.summary.btnNextTurn.addEventListener('click', () => {
      window.StateManager.switchState('roll');
    });

    window.DOM.summary.btnEndSession.addEventListener('click', () => {
      window.StateManager.switchState('setup');
    });
  }

  function enter() {
    const state = window.GameState;
    window.Renderers.renderTurnSummary(
      state.currentTurnScore,
      state.sessionTotalScore,
      state.currentTurnHistory
    );
  }

  function exit() {}

  window.SummaryState = {
    screenElement: document.getElementById('screen-summary'),
    init,
    enter,
    exit
  };
})();