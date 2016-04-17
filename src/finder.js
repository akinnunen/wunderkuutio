import { Cube } from './cube';
import { chainContext } from './chain_context';


const hasNextInChain = (cube, letter, context) => {

  context.usedLetterIds.push(letter.id());

  const adjacent = cube.adjacentLettersByChar(letter, context.nextChar)
    .filter(letter => !context.usedLetterIds.includes(letter.id()));

  console.log('found adjacent:', adjacent);

  return adjacent.some(nextLetter => {

    const nextContext = chainContext.next(context, nextLetter);

    if (nextContext.isCompleteWord()) {
      console.log('word found: ', nextLetter, 'new context', nextContext);
      return true;
    }

    console.log('recursing to letter: ', nextLetter, 'with context', nextContext);
    return hasNextInChain(cube, nextLetter, nextContext);

  });


};


export const isValidCharChain = (cube, word) => {

  // follow words until the chain is invalid or an actual word
  const wordChars = word.split('');

  // at least one of the chains has to be a complete word - follow the chains for each found character coordinate
  return cube.lettersByChar(wordChars[0]).some(letter => {

    const context = chainContext.build(word, wordChars, letter);

    console.log('starting to inspect a chain:', letter, 'context: ', context);

    // see if the current chain contains the next character
    return hasNextInChain(cube, letter, context);

  });

};

export const findWords = (words, cube) => {

  console.log('finding words', words);

  return words.filter(word => isValidCharChain(cube, word));
};

