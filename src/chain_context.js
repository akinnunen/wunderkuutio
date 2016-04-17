export const chainContext = {

  build: (word, wordChars, letter) => {
    return {
      word: word,
      wordChars: wordChars,
      currentChain: letter.letter,
      wordCharIndex: 0,
      nextChar: wordChars[1],
      usedLetterIds: []
    };
  },

  next: (prevContext, nextLetter) => {

    const currentChain = prevContext.currentChain + nextLetter.letter;

    return {
      word: prevContext.word,
      wordChars: prevContext.wordChars,
      currentChain: currentChain,
      wordCharIndex: prevContext.wordCharIndex + 1,
      nextChar: prevContext.wordChars[prevContext.wordCharIndex + 2],
      usedLetterIds: prevContext.usedLetterIds,
      isCompleteWord: () => currentChain === prevContext.word
    };
  }

};
