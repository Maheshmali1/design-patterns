import { Game1, Game2, Game3 } from './singleton-users';

const game1 = new Game1();
game1.addWinner(1, 'ABC');
console.log(`Printing scoreboard after adding winner from game1`);
game1.leaderboard.printLeaderboard();
console.log();

const game2 = new Game2();
game2.addWinner(2, 'DEF');
console.log(`Printing scoreboard after adding winner from game2`);
game2.leaderboard.printLeaderboard();
console.log();

const game3 = new Game3();
game3.addWinner(3, 'GHI');
console.log(`Printing scoreboard after adding winner from game3`);
game3.leaderboard.printLeaderboard();
