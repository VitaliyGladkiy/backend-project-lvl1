import GameBasic from './game.basic.js';

export default class PrimeGame extends GameBasic {
  constructor() {
    super();
    this.rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
    this.gameName = 'Prime Game';
    this.question = null;
    this.answerResult = true;
  }

  getQuestionNumber() {
    const number = this.getRandomInt(3000);
    this.question = this.isPrime(number);
    return number;
  }

  // eslint-disable-next-line consistent-return
  checkIsAnswerRight(question) {
    this.answerResult = !(question === this.question);

    if (this.answerResult) {
      this.currentSessionRihghtUnsers += 1;
    }
    return [this.answerResult];
  }

  // eslint-disable-next-line class-methods-use-this
  isPrime(num) {
    // eslint-disable-next-line no-plusplus
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
