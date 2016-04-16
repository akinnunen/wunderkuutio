import { Letter } from '../src/letter';

export const buildLetter = (letter, x, y, z) => new Letter(letter, { columnIndex: x, layerIndex: y, rowIndex: z });

export const sortByLetter = (a, b) => {

  const asInt = (l) => parseInt('' + l.letter.charCodeAt(0) + l.x + l.y + l.z);

  if (asInt(a) < asInt(b)) {
    return -1;
  } else {
    return 1;
  }

  return 0;

};
