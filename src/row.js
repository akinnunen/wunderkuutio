import { Letter } from './letter';

export class Row extends Array {

  static build(row, index) {

    const coordinates = Object.assign(this, { columnIndex: index });

    return row.split('').map(letter => {
      return new Letter(letter, coordinates);
    });
  }

}
