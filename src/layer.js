import { Row } from './row';

export class Layer extends Array {

  static build(layer, index) {
    return Row.from(layer, Row.build, Object.assign(this, { rowIndex: index }));
  }

}
