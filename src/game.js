const readlineSync = require('readline-sync');
const util = require('./util');

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
  if (util.answerOption[answer] === undefined || util.answerOption[answer] === null) {
    return false;
  }
  const convertedAnswer = util.answerOption[answer];
  return isOdd(question) === convertedAnswer;
}

module.exports = {
  getUserNameFromStream,
  getQuestionNumber,
  getUserAnswer,
  checkIsAnswerRight,
};
