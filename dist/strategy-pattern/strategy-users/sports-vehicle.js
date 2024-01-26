"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportVehicle = void 0;
const strategy_1 = require("../strategy");
const vehicle_1 = require("./vehicle");
class SportVehicle extends vehicle_1.Vehicle {
    constructor() {
        super(new strategy_1.SpecialDriveStrategy());
    }
}
exports.SportVehicle = SportVehicle;
