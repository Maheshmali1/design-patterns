"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strategy_users_1 = require("./strategy-users");
const passangerVehcile = new strategy_users_1.PassagenerVehicle();
const offroadVehicle = new strategy_users_1.OffRoadVehicle();
const sportsVehicle = new strategy_users_1.SportVehicle();
console.log(`Driving passanger vehicle`);
passangerVehcile.drive();
console.log();
console.log(`Driving sport vehicle`);
sportsVehicle.drive();
console.log();
console.log(`Driving off-road vehicle`);
offroadVehicle.drive();
console.log();
