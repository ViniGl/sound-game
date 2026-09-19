(function() {
  function init() {
    window.DOM.roll.btnStartTurn.addEventListener('click', () => {
      window.StateManager.switchState('play');
    });
  }

  function enter() {
    const category = window.SessionModule.rollCategory();
    window.Renderers.renderRolledCategory(category);
  }

  function exit() {}

  window.RollState = {
    screenElement: document.getElementById('screen-roll'),
    init,
    enter,
    exit
  };
})();