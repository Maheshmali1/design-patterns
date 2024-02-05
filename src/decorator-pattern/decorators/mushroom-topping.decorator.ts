import { IBasePizza, IPizzaDecorator } from '../interface';

export class AddMushroom implements IPizzaDecorator {
  constructor(private basePizza: IBasePizza) {}
  cost(): number {
    return this.basePizza.cost() + 10;
  }
}
