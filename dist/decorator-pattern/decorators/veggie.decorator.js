"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddVeggie = void 0;
class AddVeggie {
    constructor(basePizza) {
        this.basePizza = basePizza;
    }
    cost() {
        return this.basePizza.cost() + 20;
    }
}
exports.AddVeggie = AddVeggie;
