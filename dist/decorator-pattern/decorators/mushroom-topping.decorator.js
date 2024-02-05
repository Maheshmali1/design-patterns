"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMushroom = void 0;
class AddMushroom {
    constructor(basePizza) {
        this.basePizza = basePizza;
    }
    cost() {
        return this.basePizza.cost() + 10;
    }
}
exports.AddMushroom = AddMushroom;
