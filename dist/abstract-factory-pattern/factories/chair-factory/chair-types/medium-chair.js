"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediumChair = void 0;
const concrete_chair_1 = require("./concrete-chair");
class MediumChair extends concrete_chair_1.ChairProduct {
    constructor() {
        super();
        this.name = "Medium Chair";
        this.height = 20;
        this.width = 20;
        this.depth = 20;
    }
}
exports.MediumChair = MediumChair;
