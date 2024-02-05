import { FarmHousePizza, VegDelight } from './base-classes';
import { AddCheese, AddMushroom, AddVeggie } from './decorators';

console.log(`Pizza shop................`);

console.log(`Buying farmhoue pizza........`);
const pizza = new FarmHousePizza();
console.log(`farmhoue pizza cost : ${pizza.cost()}\n`);

console.log(`Buying farmhoue pizza with extra cheese........`);
const pizzaWithExtraCheese = new AddCheese(new FarmHousePizza());
console.log(
  `farmhoue pizza with extra cheese cost: ${pizzaWithExtraCheese.cost()}\n`
);

console.log(`Buying veg-delight pizza with extra veggie and mushroom........`);
const pizzaWithExtraVegan = new AddMushroom(new AddVeggie(new VegDelight()));
console.log(
  `pizza with extra veggie and mushroom cost: ${pizzaWithExtraVegan.cost()}\n`
);
