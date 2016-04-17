import { Layer } from './layer';

export class Layers extends Array {

  static build(layer, index) {
    return Layer.from(layer, Layer.build, { layerIndex: index });
  }

  letters() {

    const flatten = list => list.reduce(
      (a, b) => a.concat(b instanceof Array ? flatten(b) : b), []
    );

    return flatten(this);
  }

}
