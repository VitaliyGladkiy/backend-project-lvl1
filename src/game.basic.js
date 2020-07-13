export default class GameBasic {
  constructor() {
    this.maxRandomInt = 100;
    this.answerResult = true;
    this.numberOfSuccessUnswers = 3;
    this.currentSessionRihghtUnsers = 0;
    this.question = null;
  }

  getRandomInt(base = this.maxRandomInt) {
    return Math.floor(Math.random() * Math.floor(base));
  }

  isGameFinished() {
    // eslint-disable-next-line max-len
    return !!(this.numberOfSuccessUnswers === this.currentSessionRihghtUnsers || !this.answerResult);
  }
}
