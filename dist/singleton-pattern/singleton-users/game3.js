"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game3 = void 0;
const leaderboard_1 = require("../singleton/leaderboard");
class Game3 {
    constructor() {
        this.leaderboard = new leaderboard_1.LeaderBoard();
    }
    addWinner(position, name) {
        this.leaderboard.addScore(position, name);
    }
}
exports.Game3 = Game3;
