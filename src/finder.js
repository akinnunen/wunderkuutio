import { Cube } from './cube';
import { Contexts } from './contexts';

// follow a specific character chain until the word is found (or adjacent letters cannot be found). recursively
// test all chains for each adjacent letter and their descendants. create a new chain context during each iteration
// to keep track of used letters.
const isNextInChain = (ctx, chainCtx, letter) => {

  chainCtx.addUsedLetter(letter);
  ctx.words.addTraversedChain(chainCtx.currentChain + chainCtx.nextChar);

  return ctx.cube
    .adjacentLettersByChar(letter, chainCtx.nextChar)
    .filter(chainCtx.isUnusedLetter)
    .some(nextLetter => {

      const nextChainCtx = chainCtx.next(nextLetter);

      if (nextChainCtx.isWordFound()) return true;

      return isNextInChain(ctx, nextChainCtx, nextLetter);

    });
};

// start following character chains from the first letter. do this for each matching letter in the cube until
// all chains have been traversed. if the word is found before all chains have been traversed, some() returns
// true immmediately and we'll move on to the next word. if the word cannot be found, some returns false and
// the word is filtered out from the word list.
export const isValidCharChain = (ctx, word) => {

  ctx.words.resetTraversedChains();

  const valid = ctx.cube.lettersByChar(word.charAt(0)).some(letter => {

    const chainCtx = ctx.chains.init(word, letter);

    return isNextInChain(ctx, chainCtx, letter);

  });


  if (!valid) ctx.words.invalidateTraversedChains();

  return valid;

};

// traverse all words and keep valid character chains. keep a list of invalid chain parts and ignore words
// that contain these substrings immediately (7x performance gain).
export const findWords = (words, cube) => {

  let ctx = new Contexts(cube);

  return words.filter(word => ctx.words.containsInvalidParts(word) ? false : isValidCharChain(ctx, word));
};
