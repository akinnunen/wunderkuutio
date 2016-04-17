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

export const sortById = (aLetter, bLetter) => {
  return sort(aLetter.id(), bLetter.id());
};
