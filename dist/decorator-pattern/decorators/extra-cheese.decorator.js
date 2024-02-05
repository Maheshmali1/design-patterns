"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddCheese = void 0;
class AddCheese {
    constructor(basePizza) {
        this.basePizza = basePizza;
    }
    cost() {
        return this.basePizza.cost() + 40;
    }
}
exports.AddCheese = AddCheese;
