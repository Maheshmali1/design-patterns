import { IBasePizza } from '../interface';

export class VegDelight implements IBasePizza {
  cost(): number {
    return 100;
  }
}
