import readlineSync from 'readline-sync';

export default class Dialog {
  constructor(gameName, rules) {
    this.gameName = gameName;
    this.rules = rules;
    this.userName = undefined;
  }

  sayhello() {
    console.log(`Welcome to the ${this.gameName}`);
  }

  sayRules() {
    console.log(`${this.rules}`);
  }

  // eslint-disable-next-line class-methods-use-this
  makeQuestion(question) {
    console.log(`Question: ${question}`);
    return readlineSync.question('Your answer: ');
  }

  sayResults(result, answer = null, correct = null) {
    if (result) {
      console.log('Correct!');
    } else {
      console.log(`${answer || result} is wrong answer. Correct answer was ${correct || result ? 'yes' : 'no'}. Let's try again, ${this.userName}!`);
    }
  }

  askUserForName() {
    const name = readlineSync.question('May I have your name? ');
    this.userName = name;
    return name;
  }
}
