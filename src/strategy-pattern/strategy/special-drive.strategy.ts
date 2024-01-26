import { IDriveStrategy } from '../interface/drive-strategy.interface';

export class SpecialDriveStrategy implements IDriveStrategy {
  drive(): void {
    console.log(`driving with special drive strategy`);
  }
}
