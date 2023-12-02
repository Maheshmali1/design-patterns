"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargeChair = void 0;
const concrete_chair_1 = require("./concrete-chair");
class LargeChair extends concrete_chair_1.ChairProduct {
    constructor() {
        super();
        this.name = "Large Chair";
        this.height = 30;
        this.width = 30;
        this.depth = 30;
    }
}
exports.LargeChair = LargeChair;
