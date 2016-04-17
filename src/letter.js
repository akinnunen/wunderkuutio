export class Letter {

  constructor(letter, coordinates) {
    this.letter = letter;
    this.x = coordinates.columnIndex;
    this.y = coordinates.layerIndex;
    this.z = coordinates.rowIndex;
  }

  coordinates() {
    return { x: this.x, y: this.y, z: this.z };
  }

  id() {
    return parseInt('' + this.letter.charCodeAt(0) + this.x + this.y + this.z);
  }

}
