import assert from 'assert';

import { findWords, hasValidChars } from '../src/finder';

describe('Finder', () => {

  const uniqLayerChars = ['a', 'd', 'e', 'f', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x'];

  it('should init', () => {
    assert(findWords);
  });

  it('should find words', () => {
    assert(findWords());
  });

  it("should contain valid characters for word 'aakkonen'", () => {
    assert(hasValidChars(uniqLayerChars, 'aakkonen'));
  });

  it("should contain valid characters for word 'kodifioida'", () => {
    assert(hasValidChars(uniqLayerChars, 'kodifioida'));
  });

  it("should not contain valid characters for word 'taajamametsä'", () => {
    assert(!hasValidChars(uniqLayerChars, 'taajamametsä'));
  });

});
