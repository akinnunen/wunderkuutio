import { Cube } from './cube';
import { Words } from './words';

export const findWords = () => {

  const words = new Words();
  const cube = new Cube();

  const uniqueLetterCharacters = cube.layers.uniqueLetterCharacters().map(each => each.toLowerCase());

  return true;

  /*const remaining = words.reduce(word => {

  });*/

  // console.log(remaining.length);

};
