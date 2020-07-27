import GameBasic from './game.basic.js';

const answerOption = {
  yes: true,
  no: false,
};

const isOdd = (digit) => !(digit % 2);

export default class EvenGame extends GameBasic {
  constructor() {
    super();
    this.rules = 'Answer "yes" if the number is even, otherwise answer "no".';
    this.gameName = 'Brain Even';
    this.question = null;
    this.answerResult = true;
  }

  getQuestionNumber() {
    this.question = this.getRandomInt();
    return this.question;
  }

  // eslint-disable-next-line consistent-return
  checkIsAnswerRight(answer) {
    if (answerOption[answer] === undefined || answerOption[answer] === null) {
      return false;
    }
    const convertedAnswer = answerOption[answer];
    this.answerResult = isOdd(this.question) === convertedAnswer;

    if (this.answerResult) {
      this.currentSessionRihghtUnsers += 1;
    }
    return [this.answerResult];
  }
}
