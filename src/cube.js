
var util = require('util');

const cubeJson = require('../assets/cube.json');

import { Layers } from './layers';
import { Layer } from './layer';
import { Row } from './row';

/*
[ [ 'JQDT', 'SPOI', 'DKPI', 'RTSL' ],   --- BOTTOM
  [ 'EOSD', 'DMIR', 'RKID', 'EQMF' ],
  [ 'WKPR', 'JEGI', 'FODS', 'DNSI' ],
  [ 'MNXK', 'OGMR', 'APUW', 'AJFE' ] ]  --- TOP
  */
export class Cube {

  constructor() {
    this.layers = Layers.from(cubeJson, Layers.build, cubeJson);
    // console.log(util.inspect(this.layers, { showHidden: false, depth: null }));
  }

  letterAt(coordinates) {
    return this.layers
      .layerAt(coordinates.y)
      .rowAt(coordinates.z)
      .letterAt(coordinates.x);
  }

  letterCoordinates(letter) {
    return this.layers.letters()
      .filter(each => each.letter === letter)
      .map(each => each.coordinates());
  }



  lettersAround(letter) {

    const isAdjacent = (each, axis) => each[axis] == letter[axis] || each[axis] + 1 == letter[axis] || each[axis] - 1 == letter[axis]; // jshint -W069

    const isSelf = (each) => each.x == letter.x && each.y == letter.y && each.z == letter.z;

    return this.layers.letters()
      .filter(each => isAdjacent(each, 'y'))
      .filter(each => isAdjacent(each, 'x'))
      .filter(each => isAdjacent(each, 'z'))
      .filter(each => !isSelf(each));
  }

  isTouchingLetter() {

  }

}
