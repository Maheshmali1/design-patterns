import { IDriveStrategy } from '../interface/drive-strategy.interface';
import { NormalDriveStrategy } from '../strategy/normal-drive.strategy';
import { Vehicle } from './vehicle';

export class PassagenerVehicle extends Vehicle {
  constructor() {
    super(new NormalDriveStrategy());
  }
}
