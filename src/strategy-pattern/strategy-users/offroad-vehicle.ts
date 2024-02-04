import { SpecialDriveStrategy } from '../strategy';
import { Vehicle } from './vehicle';

export class OffRoadVehicle extends Vehicle {
  constructor() {
    super(new SpecialDriveStrategy());
  }
}
