class Chains {

  constructor() {
    this.isUnusedLetter = (letter) => !this.usedLetterIds.includes(letter.id());
    this.addUsedLetter = (letter) => this.usedLetterIds.push(letter.id());
    this.isWordFound = () => this.currentChain === this.word;
  }

  init(word, letter) {
    const wordChars = word.split('');
    return Object.assign(new Chains(), {
      word: word,
      wordChars: wordChars,
      currentChain: letter.letter,
      wordCharIndex: 0,
      nextChar: wordChars[1],
      usedLetterIds: []
    });
  }

  next(nextLetter) {
    return Object.assign(new Chains(), {
      word: this.word,
      wordChars: this.wordChars,
      currentChain: this.currentChain + nextLetter.letter,
      wordCharIndex: this.wordCharIndex + 1,
      nextChar: this.wordChars[this.wordCharIndex + 2],
      usedLetterIds: this.usedLetterIds.slice(0, this.wordCharIndex + 1)
    });
  }
}

class Words {

  constructor() {
    this.invalidParts = [];
    this.traversedChains = [];
  }

  containsInvalidParts(word) {
    return this.invalidParts.some(part => word.indexOf(part) > -1);
  }

  invalidateTraversedChains() {

    var longestInvalidChain = this.traversedChains
      .reduce((a, b) => a.length > b.length ? a : b);

    if (!this.invalidParts.includes(longestInvalidChain)) this.invalidParts.push(longestInvalidChain);

  }

  addTraversedChain(chain) {
    this.traversedChains.push(chain);
  }

  resetTraversedChains() {
    this.traversedChains = [];
  }

}

export class Contexts {

  constructor(cube) {
    this.cube = cube;
    this.chains = new Chains();
    this.words = new Words();
  }
}
