import assert from 'assert';

import { findWords } from '../src/finder';
import { Cube } from '../src/cube';
import { Words } from '../src/words';

describe('Finder', () => {

  it('should init', () => {
    assert(findWords);
  });

  it("should not find word 'aakkonen'", function() {
    const cube = new Cube();
    assert.equal(findWords(['aakkonen'], cube).length, 0);
  });

  it("should find word 'koi'", function() {
    const cube = new Cube();
    assert.equal(findWords(['koi'], cube).length, 1);
  });

  it("should find word 'tiili'", function() {
    const cube = new Cube();
    assert.equal(findWords(['tiili'], cube).length, 1);
  });

  it("should find word 'wunderdog'", function() {
    const cube = new Cube();
    assert.equal(findWords(['wunderdog'], cube).length, 1);
  });

  it("should find word all words", function() {
    this.timeout(0);
    const cube = new Cube();
    const words = new Words();
    const found = findWords(words, cube);
    console.log(found.length);
    assert(found.length > 3);
  });

});

