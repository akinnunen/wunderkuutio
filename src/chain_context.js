const isUnusedLetter = (context, letter) => !context.usedLetterIds.includes(letter.id());

export const chainContext = {

  // initial context for the first letter of a word
  build: (word, letter) => {

    const wordChars = word.split('');
    const currentChain = letter.letter;

    const context = {
      word: word,
      wordChars: wordChars,
      currentChain: currentChain,
      wordCharIndex: 0,
      nextChar: wordChars[1],
      usedLetterIds: [],
      isUnusedLetter: isUnusedLetter
    };

    context.isWordFound = () => currentChain === context.word;

    context.isUnusedLetter = (letter) => isUnusedLetter(context, letter);

    return context;
  },

  // context of a character chain that is being processed
  next: (prevContext, nextLetter) => {

    const currentChain = prevContext.currentChain + nextLetter.letter;

    const context = {
      word: prevContext.word,
      wordChars: prevContext.wordChars,
      currentChain: currentChain,
      wordCharIndex: prevContext.wordCharIndex + 1,
      nextChar: prevContext.wordChars[prevContext.wordCharIndex + 2],
      usedLetterIds: prevContext.usedLetterIds,
      isUnusedLetter: isUnusedLetter,
    };

    context.isWordFound = () => currentChain === prevContext.word;

    context.isUnusedLetter = (letter) => isUnusedLetter(context, letter);

    return context;
  }

};
