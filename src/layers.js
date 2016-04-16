import { Layer } from './layer';

export class Layers extends Array {

  static build(layer, index) {
    return Layer.from(layer, Layer.build, { layerIndex: index });
  }

  layerAt(y) {
    return this[y];
  }

  letters() {

    const flatten = list => list.reduce(
      (a, b) => a.concat(b instanceof Array ? flatten(b) : b), []
    );

    return flatten(this);
  }

  uniqueLetterCharacters() {
    return [ ...new Set(this.letters().map(each => each.letter)) ];
  }

}
