import { IBasePizza, IPizzaDecorator } from '../interface';

export class AddVeggie implements IPizzaDecorator {
  constructor(private basePizza: IBasePizza) {}
  cost(): number {
    return this.basePizza.cost() + 20;
  }
}
