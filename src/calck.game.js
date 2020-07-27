import GameBasic from './game.basic.js';

export default class CalckGame extends GameBasic {
  constructor() {
    super();
    this.rules = 'Answer "yes" if the number is even, otherwise answer "no".';
    this.gameName = 'Calck Game';
    this.question = null;
    this.answerResult = true;
  }

  getQuestionNumber() {
    const a = this.getRandomInt();
    const b = this.getRandomInt();
    this.question = a > b ? a - b : a + b;
    return a > b ? `${a} - ${b}` : `${a} + ${b}`;
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
