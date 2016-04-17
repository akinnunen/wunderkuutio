import assert from 'assert';

import { Contexts } from '../src/contexts';
import { buildLetter } from './utils';

describe('Contexts', () => {

  let ctx;

  beforeEach(function() {
    ctx = new Contexts();
  });

  describe('Words', () => {

    it('should have invalidParts and traversedChains arrays', () => {
      assert.deepEqual([], ctx.words.invalidParts);
      assert.deepEqual([], ctx.words.traversedChains);
    });

    it('should contain invalid parts', () => {
      ctx.words.invalidParts.push('inv');
      assert(ctx.words.containsInvalidParts('invisible'));
    });

    it('should invalidate traversed chain', () => {
      ctx.words.traversedChains.push('a');
      ctx.words.traversedChains.push('aa');
      ctx.words.traversedChains.push('aak');
      ctx.words.invalidateTraversedChains();
      assert.deepEqual(ctx.words.invalidParts, ['aak']);
    });

    it('should reset traversed chains', () => {
      ctx.words.traversedChains.push('a');
      assert(ctx.words.traversedChains.length === 1);
      ctx.words.resetTraversedChains();
      assert(ctx.words.traversedChains.length === 0);
    });

  });

  describe('Chains', () => {

    it('should always have isUnusedLetter, addUsedLetter and isWordFound functions', () => {

      const instances = [
        ctx.chains,
        ctx.chains.init('a', 'a'),
        ctx.chains.init('a', 'a').next('a')
      ];

      instances.forEach(instance => {
        assert(instance.isUnusedLetter instanceof Function);
        assert(instance.addUsedLetter instanceof Function);
        assert(instance.isWordFound instanceof Function);
      });

    });

    it('should init all fieds', () => {
      const chain = ctx.chains.init('car', buildLetter('c', 0, 0, 0));
      assert.equal(chain.word, 'car');
      assert.deepEqual(chain.wordChars, ['c', 'a', 'r']);
      assert.equal(chain.currentChain, 'c');
      assert.equal(chain.wordCharIndex, 0);
      assert.equal(chain.nextChar, 'a');
      assert.deepEqual(chain.usedLetterIds, []);
    });

    it('should init all fieds based on previous the context on', () => {

      const next = ctx.chains
        .init('car', buildLetter('c', 0, 0, 0))
        .next(buildLetter('a', 0, 0, 0));

      assert.equal(next.word, 'car');
      assert.deepEqual(next.wordChars, ['c', 'a', 'r']);
      assert.equal(next.currentChain, 'ca');
      assert.equal(next.wordCharIndex, 1);
      assert.equal(next.nextChar, 'r');
      assert.deepEqual(next.usedLetterIds, []);
    });

  });

});

