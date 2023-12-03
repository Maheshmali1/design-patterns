"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallChair = void 0;
const concrete_chair_1 = require("./concrete-chair");
class SmallChair extends concrete_chair_1.ChairProduct {
    constructor() {
        super();
        this.name = 'Small Chair';
        this.height = 10;
        this.width = 10;
        this.depth = 10;
    }
}
exports.SmallChair = SmallChair;
