"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(strategy) {
        this.strategy = strategy;
    }
    drive() {
        this.strategy.drive();
    }
}
exports.Vehicle = Vehicle;
