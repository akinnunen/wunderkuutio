export const wordContext = {

  invalidChainParts: [],
  traversedChains: [],

  resetTraversedChains: () => wordContext.traversedChains = [],

  hasInvalidChainParts: (word) => wordContext.invalidChainParts.some(part => word.indexOf(part) > -1),

  invalidateTraversedChains: () => {

    var longesInvalidChain = wordContext.traversedChains.reduce((a, b) => a.length > b.length ? a : b);

    if (!wordContext.invalidChainParts.includes(longesInvalidChain)) {
      wordContext.invalidChainParts.push(longesInvalidChain);
    }
  }

};
