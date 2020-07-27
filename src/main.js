import EvenGame from './even.game.js';
import Dialog from './dialog.js';
import CalckGame from './calck.game.js';
import NodGame from './nod.game.js';
import ProgGame from './prog.game.js';
import PrimeGame from './prime.game.js';

function GameFactory(gameName) {
  const gameLIst = {
    calk: new CalckGame(),
    even: new EvenGame(),
    nod: new NodGame(),
    prog: new ProgGame(),
    prime: new PrimeGame(),
  };
  return gameLIst[gameName];
}

export default function main(gameName = 'prime') {
  const game = GameFactory(gameName);
  const dialog = new Dialog(game.gameName, game.rules);
  dialog.sayhello();
  dialog.askUserForName();
  dialog.sayRules();
  while (!game.isGameFinished()) {
    const question = game.getQuestionNumber();
    const answer = dialog.makeQuestion(question);
    const answerResult = game.checkIsAnswerRight(answer);
    dialog.sayResults(answerResult[0], answerResult[1], answerResult[2]);
  }
}

main();
