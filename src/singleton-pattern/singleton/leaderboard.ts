export class LeaderBoard {
  static instance: LeaderBoard;
  private scoreBoard: { [id: number]: string } = {};

  constructor() {
    if (LeaderBoard.instance) {
      return LeaderBoard.instance;
    }
    LeaderBoard.instance = this;
  }

  addScore(position: number, name: string) {
    this.scoreBoard[position] = name;
  }

  printLeaderboard() {
    console.log(`------------ ScoreBoard ---------------`);
    for (const [position, name] of Object.entries(this.scoreBoard)) {
      console.log(`|\t${position}\t|\t${name}\t|`);
    }
  }
}
