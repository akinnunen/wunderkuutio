import { Letter } from '../src/letter';

export const buildLetter = (letter, x, y, z) => new Letter(letter, { columnIndex: x, layerIndex: y, rowIndex: z });

const sort = (a, b) => {

  if (a < b) {
    return -1;
  } else {
    return 1;
  }

  return 0;
};

export const sortByLetter = (a, b) => {

  const asInt = (l) => parseInt('' + l.letter.charCodeAt(0) + l.x + l.y + l.z);

  return sort(asInt(a), asInt(b));
};

export const sortByLetterCharacter = (a, b) => {
  return sort(a, b);
};

