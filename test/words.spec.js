import assert from 'assert';

import { Words } from '../src/words';

describe('Words', () => {

  let words;

  beforeEach(function() {
    words = new Words();
  });

  it('should init', () => {
    assert(words);
  });

  it('should contain more than 90 000 words', () => {
    assert(words.length > 90000);
  });

});
