import GameBasic from './game.basic.js';

const nextDigit = (a1, d, n) => {
  const f = n - 1;
  return a1 + d * f;
};

export default class ProgGame extends GameBasic {
  constructor() {
    super();
    this.rules = 'What number is missing in the progression?';
    this.gameName = 'Progression Game';

    this.answerResult = true;
  }

  getQuestionNumber() {
    const base = this.getRandomInt(10);
    const firstElement = this.getRandomInt(10);
    const lenth = 10;

    const progression = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= lenth; i++) {
      const d = nextDigit(firstElement, base, i);
      progression.push(d);
    }

    const hidenDigit1 = this.getRandomInt(9);
    const hidenDigit2 = this.getRandomInt(9);
    console.log(progression);
    console.log(hidenDigit1, hidenDigit2);

    // eslint-disable-next-line max-len
    this.question1 = progression[hidenDigit2] > progression[hidenDigit1] ? progression[hidenDigit1] : progression[hidenDigit2];
    // eslint-disable-next-line max-len
    this.question2 = progression[hidenDigit2] > progression[hidenDigit1] ? progression[hidenDigit2] : progression[hidenDigit1];

    progression[hidenDigit1] = 'x';
    progression[hidenDigit2] = 'x';

    return progression.join(' ');
  }

  checkIsAnswerRight(question) {
    // eslint-disable-next-line max-len
    this.answerResult = !!(question.split(' ')[0] === this.question1.toString() && question.split(' ')[1] === this.question2.toString());
    if (this.answerResult) {
      this.currentSessionRihghtUnsers += 1;
    }
    return [this.answerResult, question, `${this.question1} ${this.question2}`];
  }
}
