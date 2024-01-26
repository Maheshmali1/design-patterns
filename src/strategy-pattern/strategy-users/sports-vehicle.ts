import { SpecialDriveStrategy } from '../strategy';
import { Vehicle } from './vehicle';

export class SportVehicle extends Vehicle {
  constructor() {
    super(new SpecialDriveStrategy());
  }
}
