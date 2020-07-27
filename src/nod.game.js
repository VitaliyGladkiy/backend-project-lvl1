import GameBasic from './game.basic.js';

export default class NodGame extends GameBasic {
  constructor() {
    super();
    this.rules = 'Find the greatest common divisor of given numbers.';
    this.question = null;
    this.answerResult = true;
  }

  getQuestionNumber() {
    const commonDevider = this.getRandomInt(5);
    const a = this.getRandomInt(5);
    const b = this.getRandomInt(5);

    this.question = commonDevider;
    return `${a} ${b}`;
  }

  // eslint-disable-next-line consistent-return
  checkIsAnswerRight(question) {
    this.answerResult = !(question === this.question);

    if (this.answerResult) {
      this.currentSessionRihghtUnsers += 1;
    }
    return [this.answerResult, null, null];
  }
}
