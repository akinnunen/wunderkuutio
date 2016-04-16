import assert from 'assert';

import { findWords } from '../src/finder';

describe('Finder', () => {

  it('should init', () => {
    assert(findWords);
  });

  it('should find words', () => {
    assert(findWords());
  });

});
