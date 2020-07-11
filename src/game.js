const readlineSync = require('readline-sync');

const maxRandomInt = 100;
function getUserNameFromStream() {
  return readlineSync.question('May I have your name? ');
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getQuestionNumber() {
  return getRandomInt(maxRandomInt);
}

function getUserAnswer(questionString) {
  return readlineSync.question(questionString);
}

const isOdd = (digit) => !(digit % 2);

function checkIsAnswerRight(answer, question) {
  return isOdd(question) === answer;
}

module.exports = {
  getUserNameFromStream,
  getQuestionNumber,
  getUserAnswer,
  checkIsAnswerRight,
};
