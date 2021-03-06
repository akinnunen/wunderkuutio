import assert from 'assert';
import { buildLetter, sortById } from './utils';
import { Cube } from '../src/cube';
import { Letter } from '../src/letter';

describe('Cube', () => {

  let cube;

  beforeEach(function() {
    cube = new Cube();
  });

  it('should init', () => {
    assert(cube);
  });

  it("should find all 'o' letters", () => {
    assert.deepEqual(cube.lettersByChar('o'), [buildLetter('o', 2, 0, 1), buildLetter('o', 1, 1, 0), buildLetter('o', 1, 2, 2), buildLetter('o', 0, 3, 1)]);
  });

  it("should find all 'p' letters", () => {
     assert.deepEqual(cube.lettersByChar('p'), [buildLetter('p', 1, 0, 1), buildLetter('p', 2, 0, 2), buildLetter('p', 2, 2, 0), buildLetter('p', 1, 3, 2)]);
  });

  it("should find all 'x' letters", () => {

     assert.deepEqual(cube.lettersByChar('x'), [buildLetter('x', 2, 3, 0)]);
  });

  it("should get letters around 'j' at x: 0, y: 0, z: 0", () => {

    const expected = [
      buildLetter('s', 0, 0, 1),
      buildLetter('p', 1, 0, 1),
      buildLetter('q', 1, 0, 0),
      buildLetter('e', 0, 1, 0),
      buildLetter('d', 0, 1, 1),
      buildLetter('m', 1, 1, 1),
      buildLetter('o', 1, 1, 0)
    ].sort(sortById);

    const actual = cube.lettersAround(buildLetter('j', 0, 0, 0)).sort(sortById);

    assert.deepEqual(actual, expected);
  });

  it("should get letters around 'd' at x: 2, y: 2, z: 2", () => {

    const expected = [
      buildLetter('n', 1, 2, 3),
      buildLetter('s', 2, 2, 3),
      buildLetter('i', 3, 2, 3),
      buildLetter('o', 1, 2, 2),
      buildLetter('s', 3, 2, 2),
      buildLetter('e', 1, 2, 1),
      buildLetter('g', 2, 2, 1),
      buildLetter('i', 3, 2, 1),
      buildLetter('j', 1, 3, 3),
      buildLetter('f', 2, 3, 3),
      buildLetter('e', 3, 3, 3),
      buildLetter('p', 1, 3, 2),
      buildLetter('u', 2, 3, 2),
      buildLetter('w', 3, 3, 2),
      buildLetter('g', 1, 3, 1),
      buildLetter('m', 2, 3, 1),
      buildLetter('r', 3, 3, 1),
      buildLetter('q', 1, 1, 3),
      buildLetter('m', 2, 1, 3),
      buildLetter('f', 3, 1, 3),
      buildLetter('k', 1, 1, 2),
      buildLetter('i', 2, 1, 2),
      buildLetter('d', 3, 1, 2),
      buildLetter('m', 1, 1, 1),
      buildLetter('i', 2, 1, 1),
      buildLetter('r', 3, 1, 1),
    ].sort(sortById);

    const actual = cube.lettersAround(buildLetter('d', 2, 2, 2)).sort(sortById);

    assert.deepEqual(actual, expected);
  });

  it("should get letters around 'k' at x: 3, y: 3, z: 0", () => {

    const expected = [
      buildLetter('m', 2, 3, 1),
      buildLetter('r', 3, 3, 1),
      buildLetter('x', 2, 3, 0),
      buildLetter('g', 2, 2, 1),
      buildLetter('i', 3, 2, 1),
      buildLetter('p', 2, 2, 0),
      buildLetter('r', 3, 2, 0)
    ].sort(sortById);

    const actual = cube.lettersAround(buildLetter('k', 3, 3, 0)).sort(sortById);

    assert.deepEqual(actual, expected);
  });

  it("should have adjacent letter 'q' for letter 'j' (x: 0, y: 0, z: 0)", () => {
    const letters = cube.adjacentLettersByChar(buildLetter('j', 0, 0, 0), 'q');
    assert.deepEqual(letters[0], buildLetter('q', 1, 0, 0));
  });

  it("should have adjacent letter 'd' for letter 'e' (x: 1, y: 2, z: 1)", () => {
    const letters = cube.adjacentLettersByChar(buildLetter('e', 1, 2, 1), 'd');
    assert.deepEqual(letters[0], buildLetter('d', 0, 1, 1));
  });

  it("should not have adjacent letter 'a' for letter 'k' (x: 1, y: 1, z: 2)", () => {
    const letters = cube.adjacentLettersByChar(buildLetter('k', 1, 1, 2), 'a');
    assert(letters.length === 0);
  });

});
