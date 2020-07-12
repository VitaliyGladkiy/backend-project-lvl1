import EvenGame from './even.game.js';
import Dialog from './dialog.js';
import CalckGame from './calck.game.js';

function GameFactory(gameName) {
  const gameLIst = {
    calk: new CalckGame(),
    even: new EvenGame(),
  };
  return gameLIst[gameName];
}

export default function main() {
  const game = GameFactory('calk');
  const dialog = new Dialog(game.gameName, game.rules);
  dialog.sayhello();
  dialog.askUserForName();
  dialog.sayRules();
  while (!game.isGameFinished()) {
    const question = game.getQuestionNumber();
    const answer = dialog.makeQuestion(question);
    const answerResult = game.checkIsAnswerRight(answer);
    dialog.sayResults(answerResult);
  }
}
