(function() {
  function init() {
    window.GameState.categoryMap = window.CATEGORIES_REGISTRY || {};
    window.DOM.setup.btnStartSession.addEventListener('click', handleStartSession);
  }

  function enter() {
    window.GameState.selectedCategories = Object.keys(window.GameState.categoryMap);
  }

  function handleStartSession() {
    const timerValue = parseInt(window.DOM.setup.inputTimer.value, 10) || 60;

    window.GameState.turnDuration = timerValue;
    window.GameState.selectedCategories = Object.keys(window.GameState.categoryMap);
    
    window.SessionModule.loadWordPool();

    window.StateManager.switchState('roll');
  }

  function exit() {}

  window.SetupState = {
    screenElement: document.getElementById('screen-setup'),
    init,
    enter,
    exit
  };
})();