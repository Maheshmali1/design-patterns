import { IBasePizza } from '../interface';

export class FarmHousePizza implements IBasePizza {
  cost(): number {
    return 200;
  }
}
