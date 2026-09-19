(function() {
  window.DOM = {
    // Screens
    screens: {
      setup: document.getElementById('screen-setup'),
      roll: document.getElementById('screen-roll'),
      play: document.getElementById('screen-play'),
      summary: document.getElementById('screen-summary')
    },

    // Setup Screen Inputs & Controls
    setup: {
      inputTimer: document.getElementById('input-timer'),
      btnStartSession: document.getElementById('btn-start-session')
    },

    // Roll Screen Elements
    roll: {
      rolledCategoryName: document.getElementById('rolled-category-name'),
      btnStartTurn: document.getElementById('btn-start-turn')
    },

    // Gameplay Screen Elements
    play: {
      timerDisplay: document.getElementById('timer-display'),
      wordCard: document.getElementById('word-card'),
      wordMask: document.getElementById('word-mask'),
      currentWord: document.getElementById('current-word'),
      currentPoints: document.getElementById('current-points'),
      btnHoldReveal: document.getElementById('btn-hold-reveal'),
      btnSkip: document.getElementById('btn-skip'),
      btnSuccess: document.getElementById('btn-success')
    },

    // Summary Screen Elements
    summary: {
      turnScoreValue: document.getElementById('turn-score-value'),
      sessionScoreValue: document.getElementById('session-score-value'),
      turnHistoryList: document.getElementById('turn-history-list'),
      btnNextTurn: document.getElementById('btn-next-turn'),
      btnEndSession: document.getElementById('btn-end-session')
    }
  };
})();