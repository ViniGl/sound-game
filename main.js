function bootstrap() {
  window.SetupState.init();
  window.RollState.init();
  window.PlayState.init();
  window.SummaryState.init();

  window.StateManager.register('setup', window.SetupState);
  window.StateManager.register('roll', window.RollState);
  window.StateManager.register('play', window.PlayState);
  window.StateManager.register('summary', window.SummaryState);

  window.StateManager.switchState('setup');
}

document.addEventListener('DOMContentLoaded', bootstrap);