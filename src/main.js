const {
  getUserNameFromStream, getQuestionNumber, getUserAnswer, checkIsAnswerRight,
} = require('./game');
const { say } = require('./communication');
const { convertAlias } = require('./util');

const numberOfSuccessUnswers = 3;
let currentSessionRihghtUnsers = 0;

function main() {
  say.greeting();
  const userName = getUserNameFromStream();
  say.hello(userName);

  say.rules();
  while (currentSessionRihghtUnsers !== numberOfSuccessUnswers) {
    const question = getQuestionNumber();
    say.question(question);
    const answer = getUserAnswer('Your answer: ');
    const answerResult = checkIsAnswerRight(convertAlias(answer), question);
    if (answerResult) {
      say.cucces();
      currentSessionRihghtUnsers += 1;
    } else {
      say.answer(answer);
    }
  }
}

module.exports = { main };
