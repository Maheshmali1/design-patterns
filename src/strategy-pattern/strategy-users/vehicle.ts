import { IDriveStrategy } from '../interface/drive-strategy.interface';

export class Vehicle implements IDriveStrategy {
  constructor(private strategy: IDriveStrategy) {}
  drive(): void {
    this.strategy.drive();
  }
}
