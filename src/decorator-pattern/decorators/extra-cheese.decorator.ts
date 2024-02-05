import { IBasePizza, IPizzaDecorator } from '../interface';

export class AddCheese implements IPizzaDecorator {
  constructor(private basePizza: IBasePizza) {}
  cost(): number {
    return this.basePizza.cost() + 40;
  }
}
