const cubeJson = require('../assets/cube.json');

import { Layers } from './layers';
import { Layer } from './layer';
import { Row } from './row';

export class Cube {

  constructor() {
    this.layers = Layers.from(cubeJson, Layers.build, cubeJson);
  }

  lettersByChar(char) {
    return this.layers.letters()
      .filter(each => each.letter === char);
  }

  lettersAround(letter) {

    const isAdjacent = (each, axis) =>
      each[axis] == letter[axis] ||
      each[axis] + 1 == letter[axis] ||
      each[axis] - 1 == letter[axis];

    const isSelf = (each) =>
      each.x == letter.x &&
      each.y == letter.y &&
      each.z == letter.z;

    return this.layers.letters()
      .filter(each => isAdjacent(each, 'y'))
      .filter(each => isAdjacent(each, 'x'))
      .filter(each => isAdjacent(each, 'z'))
      .filter(each => !isSelf(each));
  }

  adjacentLettersByChar(sourceLetter, char) {
    return this.lettersAround(sourceLetter)
      .filter(each => each.letter == char);
  }

}
