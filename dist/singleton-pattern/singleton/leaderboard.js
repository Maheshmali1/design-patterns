"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderBoard = void 0;
class LeaderBoard {
    constructor() {
        this.scoreBoard = {};
        if (LeaderBoard.instance) {
            return LeaderBoard.instance;
        }
        LeaderBoard.instance = this;
    }
    addScore(position, name) {
        this.scoreBoard[position] = name;
    }
    printLeaderboard() {
        console.log(`------------ ScoreBoard ---------------`);
        for (const [position, name] of Object.entries(this.scoreBoard)) {
            console.log(`|\t${position}\t|\t${name}\t|`);
        }
    }
}
exports.LeaderBoard = LeaderBoard;
