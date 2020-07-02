const readlineSync = require('readline-sync');

function getUserNameFromStream() {
  return readlineSync.question('May I have your name? ');
}

module.exports.getUserNameFromStream = getUserNameFromStream;
