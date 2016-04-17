export class Letter {

  constructor(letter, coordinates) {
    this.letter = letter;
    this.x = coordinates.columnIndex;
    this.y = coordinates.layerIndex;
    this.z = coordinates.rowIndex;
  }

  id() {
    return parseInt('' + this.letter.charCodeAt(0) + this.x + this.y + this.z);
  }

}
