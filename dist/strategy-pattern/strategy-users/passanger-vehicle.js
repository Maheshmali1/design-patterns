"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassagenerVehicle = void 0;
const normal_drive_strategy_1 = require("../strategy/normal-drive.strategy");
const vehicle_1 = require("./vehicle");
class PassagenerVehicle extends vehicle_1.Vehicle {
    constructor() {
        super(new normal_drive_strategy_1.NormalDriveStrategy());
    }
}
exports.PassagenerVehicle = PassagenerVehicle;
