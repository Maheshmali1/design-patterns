import {
  OffRoadVehicle,
  PassagenerVehicle,
  SportVehicle,
} from './strategy-users';

const passangerVehcile = new PassagenerVehicle();
const offroadVehicle = new OffRoadVehicle();
const sportsVehicle = new SportVehicle();

console.log(`Driving passanger vehicle`);
passangerVehcile.drive();
console.log();

console.log(`Driving sport vehicle`);
sportsVehicle.drive();
console.log();

console.log(`Driving off-road vehicle`);
offroadVehicle.drive();
console.log();
