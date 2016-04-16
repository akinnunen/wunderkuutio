import _ from 'lodash';

import { Cube } from './cube';
import { Words } from './words';

export const hasValidChars = (uniqLayerChars, word) => {
  return word
    .split('')
    .every(char => uniqLayerChars.indexOf(char) > -1);
};

export const findWords = () => {

  const words = new Words();
  const cube = new Cube();

  const uniqLayerChars = cube.layers.uniqChars();

  console.log(words.length);

  const remaining = words.filter(word => hasValidChars(uniqLayerChars, word));

  console.log(remaining.length);

  return true;

  // console.log(remaining.length);

};
