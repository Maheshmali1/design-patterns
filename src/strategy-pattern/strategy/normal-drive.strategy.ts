import { IDriveStrategy } from '../interface/drive-strategy.interface';

export class NormalDriveStrategy implements IDriveStrategy {
  drive(): void {
    console.log(`driving with normal drive strategy`);
  }
}
