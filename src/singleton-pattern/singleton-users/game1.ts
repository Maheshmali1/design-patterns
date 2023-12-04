import { IGame } from '../interface/game.interface';
import { LeaderBoard } from '../singleton/leaderboard';

export class Game1 implements IGame {
  leaderboard: LeaderBoard;
  constructor() {
    this.leaderboard = new LeaderBoard();
  }
  addWinner(position: number, name: string): void {
    this.leaderboard.addScore(position, name);
  }
}
