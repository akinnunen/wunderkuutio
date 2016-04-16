import assert from 'assert';
import { buildLetter, sortByLetter, sortByLetterCharacter } from './utils';
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

  it('should get the letter at x: 0, y: 0, z: 0', () => {
    assert.equal(cube.letterAt({ x: 0, y: 0, z: 0 }), 'j');
  });

  it('should get the letter at x: 2, y: 2, z: 3', () => {
    assert.equal(cube.letterAt({ x: 2, y: 2, z: 3 }), 's');
  });

  it('should get the letter at x: 1, y: 3, z: 1', () => {
    assert.equal(cube.letterAt({ x: 1, y: 3, z: 1 }), 'g');
  });

  it("should get the coordinates of a letter 'o'", () => {
     assert.deepEqual(cube.letterCoordinates('o'), [{ x: 2, y: 0, z: 1 }, { x: 1, y: 1, z: 0 }, { x: 1, y: 2, z: 2 }, { x: 0, y: 3, z: 1 }]);
  });

  it("should get the coordinates of a letter 'p'", () => {
     assert.deepEqual(cube.letterCoordinates('p'), [{ x: 1, y: 0, z: 1 }, { x: 2, y: 0, z: 2 }, { x: 2, y: 2, z: 0 }, { x: 1, y: 3, z: 2 }]);
  });

  it("should get the coordinates of a letter 'x'", () => {
     assert.deepEqual(cube.letterCoordinates('x'), [{ x: 2, y: 3, z: 0 }]);
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
    ].sort(sortByLetter);

    const actual = cube.lettersAround(buildLetter('j', 0, 0, 0)).sort(sortByLetter);

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
    ].sort(sortByLetter);

    const actual = cube.lettersAround(buildLetter('d', 2, 2, 2)).sort(sortByLetter);

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
    ].sort(sortByLetter);

    const actual = cube.lettersAround(buildLetter('k', 3, 3, 0)).sort(sortByLetter);

    assert.deepEqual(actual, expected);
  });

  it("should be touching letter 'q' from letter 'j' (x: 0, y: 0, z: 0)", () => {
    assert(cube.isTouchingLetter(buildLetter('j', 0, 0, 0), 'q'));
  });

  it("should be touching letter 'd' from letter 'e' (x: 1, y: 2, z: 1)", () => {
    assert(cube.isTouchingLetter(buildLetter('e', 1, 2, 1), 'd'));
  });

  it("should not be touching letter 'a' from letter 'k' (x: 1, y: 1, z: 2)", () => {
    assert(!cube.isTouchingLetter(buildLetter('k', 1, 1, 2), 'a'));
  });

  it("should get unique letter characters", () => {
    const expected = ['a', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x'];
    const actual = cube.layers.uniqueLetterCharacters().sort(sortByLetterCharacter);
    assert.deepEqual(actual, expected);
  });

});
