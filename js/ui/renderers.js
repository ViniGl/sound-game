(function() {
  function renderRolledCategory(categoryName) {
    window.DOM.roll.rolledCategoryName.textContent = categoryName || 'No Category';
  }

  function renderTimer(seconds) {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    window.DOM.play.timerDisplay.textContent = `${mins}:${secs}`;
  }

  function renderWordCard(wordObj) {
    if (!wordObj) {
      window.DOM.play.currentWord.textContent = 'All Words Used!';
      window.DOM.play.currentPoints.textContent = '';
      return;
    }
    window.DOM.play.currentWord.textContent = wordObj.word;
    window.DOM.play.currentPoints.textContent = `+${wordObj.points} pt${wordObj.points > 1 ? 's' : ''}`;
  }

  function setWordMaskRevealed(isRevealed) {
    const mask = window.DOM.play.wordMask;
    if (isRevealed) {
      mask.classList.add('revealed');
    } else {
      mask.classList.remove('revealed');
    }
  }

  function renderTurnSummary(turnScore, sessionTotal, history) {
    window.DOM.summary.turnScoreValue.textContent = turnScore;
    window.DOM.summary.sessionScoreValue.textContent = sessionTotal;

    const listContainer = window.DOM.summary.turnHistoryList;
    listContainer.innerHTML = '';

    history.forEach(item => {
      const row = document.createElement('div');
      row.className = `history-item ${item.success ? 'pass' : 'skip'}`;

      const nameSpan = document.createElement('span');
      nameSpan.textContent = item.word;

      const statusSpan = document.createElement('span');
      statusSpan.className = 'status';
      statusSpan.textContent = item.success ? `+${item.points} pts` : 'Skipped';

      row.appendChild(nameSpan);
      row.appendChild(statusSpan);
      listContainer.appendChild(row);
    });
  }

  window.Renderers = {
    renderRolledCategory,
    renderTimer,
    renderWordCard,
    setWordMaskRevealed,
    renderTurnSummary
  };
})();