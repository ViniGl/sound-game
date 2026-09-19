(function() {
  function loadWordPool() {
    const state = window.GameState;
    state.loadedWordPool = [];
    state.usedWordsSet.clear();
    state.sessionTotalScore = 0;

    for (const categoryName of state.selectedCategories) {
      const categoryWords = window.CATEGORIES_DATA[categoryName];
      if (!categoryWords) continue;

      for (const [word, points] of Object.entries(categoryWords)) {
        state.loadedWordPool.push({
          word,
          points,
          category: categoryName
        });
      }
    }
  }

  function rollCategory() {
    const state = window.GameState;
    if (state.selectedCategories.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * state.selectedCategories.length);
    state.currentCategory = state.selectedCategories[randomIndex];
    return state.currentCategory;
  }

  function startTurn() {
    const state = window.GameState;
    state.currentTurnScore = 0;
    state.currentTurnHistory = [];
    state.currentWord = null;
    return drawNextWord();
  }

  function drawNextWord() {
    const state = window.GameState;
    const availableWords = state.loadedWordPool.filter(
      item => item.category === state.currentCategory && !state.usedWordsSet.has(item.word)
    );

    const poolToDraw = availableWords.length > 0
      ? availableWords
      : state.loadedWordPool.filter(item => !state.usedWordsSet.has(item.word));

    if (poolToDraw.length === 0) {
      state.currentWord = null;
      return null;
    }

    const randomIndex = Math.floor(Math.random() * poolToDraw.length);
    state.currentWord = poolToDraw[randomIndex];
    return state.currentWord;
  }

  function recordWordResult(success) {
    const state = window.GameState;
    if (!state.currentWord) return null;

    const wordData = state.currentWord;
    state.usedWordsSet.add(wordData.word);

    if (success) {
      state.currentTurnScore += wordData.points;
      state.sessionTotalScore += wordData.points;
    }

    state.currentTurnHistory.push({
      word: wordData.word,
      points: wordData.points,
      success
    });

    return drawNextWord();
  }

  function handleTimerExpired() {
    const state = window.GameState;
    if (state.currentWord) {
      state.usedWordsSet.add(state.currentWord.word);
    }
  }

  window.SessionModule = {
    loadWordPool,
    rollCategory,
    startTurn,
    drawNextWord,
    recordWordResult,
    handleTimerExpired
  };
})();