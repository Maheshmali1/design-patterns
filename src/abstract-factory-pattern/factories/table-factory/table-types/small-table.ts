import { TableProduct } from './concrete-table';

export class SmallTable extends TableProduct {
  constructor() {
    super();
    (this.name = 'Small Table'),
      (this.height = 10),
      (this.width = 10),
      (this.depth = 10);
  }
}
