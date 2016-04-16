const wordsJson = require('../assets/words.json');

export class Words extends Array {

  constructor() {
    super(wordsJson.length);
    wordsJson.forEach(each => this.push(each));
  }

}
