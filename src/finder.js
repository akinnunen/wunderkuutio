import { Cube } from './cube';
import { chainContext } from './chain_context';

const isNextInChain = (cube, letter, context) => {

  context.usedLetterIds.push(letter.id());

  return cube
    .adjacentLettersByChar(letter, context.nextChar)
    .filter(context.isUnusedLetter)
    .some(nextLetter => {

      const nextContext = chainContext.next(context, nextLetter);

      if (nextContext.isWordFound()) {
        return true;
      }

      return isNextInChain(cube, nextLetter, nextContext);

    });

};

// start following character chains from the first letter. do this for each matching letter in the cube until
// all chains have been traversed. if the word is found before all chains have been traversed, some() returns
// true immmediately and we'll move on to the next word. if the word cannot be found, some returns false and
// the word is filtered out from the word list.
export const isValidCharChain = (cube, word) => {

  return cube.lettersByChar(word.charAt(0)).some(letter => {

    const context = chainContext.build(word, letter);

    return isNextInChain(cube, letter, context);
  });

};

// traverse all words and keep valid character chains
export const findWords = (words, cube) => words.filter(word => isValidCharChain(cube, word));

