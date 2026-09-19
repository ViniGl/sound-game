window.GameState = {
  turnDuration: 60,
  categoryMap: {},
  selectedCategories: [],
  loadedWordPool: [],
  usedWordsSet: new Set(),
  sessionTotalScore: 0,
  currentTurnScore: 0,
  currentTurnHistory: [],
  currentCategory: null,
  currentWord: null
};