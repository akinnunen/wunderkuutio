import assert from 'assert';
import { buildLetter, sortByLetter } from './utils';
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
    assert.equal(cube.letterAt({ x: 0, y: 0, z: 0 }), 'J');
  });

  it('should get the letter at x: 2, y: 2, z: 3', () => {
    assert.equal(cube.letterAt({ x: 2, y: 2, z: 3 }), 'S');
  });

  it('should get the letter at x: 1, y: 3, z: 1', () => {
    assert.equal(cube.letterAt({ x: 1, y: 3, z: 1 }), 'G');
  });

  it("should get the coordinates of a letter 'O'", () => {
     assert.deepEqual(cube.letterCoordinates('O'), [{ x: 2, y: 0, z: 1 }, { x: 1, y: 1, z: 0 }, { x: 1, y: 2, z: 2 }, { x: 0, y: 3, z: 1 }]);
  });

  it("should get the coordinates of a letter 'P'", () => {
     assert.deepEqual(cube.letterCoordinates('P'), [{ x: 1, y: 0, z: 1 }, { x: 2, y: 0, z: 2 }, { x: 2, y: 2, z: 0 }, { x: 1, y: 3, z: 2 }]);
  });

  it("should get the coordinates of a letter 'X'", () => {
     assert.deepEqual(cube.letterCoordinates('X'), [{ x: 2, y: 3, z: 0 }]);
  });

  it("should get letters around 'J' at x: 0, y: 0, z: 0", () => {

    const expected = [
      buildLetter('S', 0, 0, 1),
      buildLetter('P', 1, 0, 1),
      buildLetter('Q', 1, 0, 0),
      buildLetter('E', 0, 1, 0),
      buildLetter('D', 0, 1, 1),
      buildLetter('M', 1, 1, 1),
      buildLetter('O', 1, 1, 0)
    ].sort(sortByLetter);

    const actual = cube.lettersAround(buildLetter('J', 0, 0, 0)).sort(sortByLetter);

    assert.deepEqual(actual, expected);
  });

  it("should get letters around 'D' at x: 2, y: 2, z: 2", () => {

    const expected = [
      buildLetter('N', 1, 2, 3),
      buildLetter('S', 2, 2, 3),
      buildLetter('I', 3, 2, 3),
      buildLetter('O', 1, 2, 2),
      buildLetter('S', 3, 2, 2),
      buildLetter('E', 1, 2, 1),
      buildLetter('G', 2, 2, 1),
      buildLetter('I', 3, 2, 1),
      buildLetter('J', 1, 3, 3),
      buildLetter('F', 2, 3, 3),
      buildLetter('E', 3, 3, 3),
      buildLetter('P', 1, 3, 2),
      buildLetter('U', 2, 3, 2),
      buildLetter('W', 3, 3, 2),
      buildLetter('G', 1, 3, 1),
      buildLetter('M', 2, 3, 1),
      buildLetter('R', 3, 3, 1),
      buildLetter('Q', 1, 1, 3),
      buildLetter('M', 2, 1, 3),
      buildLetter('F', 3, 1, 3),
      buildLetter('K', 1, 1, 2),
      buildLetter('I', 2, 1, 2),
      buildLetter('D', 3, 1, 2),
      buildLetter('M', 1, 1, 1),
      buildLetter('I', 2, 1, 1),
      buildLetter('R', 3, 1, 1),
    ].sort(sortByLetter);

    const actual = cube.lettersAround(buildLetter('D', 2, 2, 2)).sort(sortByLetter);

    assert.deepEqual(actual, expected);
  });

});
