(function() {
  const registeredStates = {};
  let currentState = null;

  function registerState(name, stateObject) {
    registeredStates[name] = stateObject;
  }

  function switchState(name, data = {}) {
    if (currentState && typeof currentState.exit === 'function') {
      currentState.exit();
    }

    currentState = registeredStates[name];
    if (!currentState) return;

    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });

    if (currentState.screenElement) {
      currentState.screenElement.classList.add('active');
    }

    if (typeof currentState.enter === 'function') {
      currentState.enter(data);
    }
  }

  window.StateManager = {
    register: registerState,
    switchState: switchState
  };
})();