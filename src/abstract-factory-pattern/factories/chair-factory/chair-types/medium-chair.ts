import { ChairProduct } from './concrete-chair';

export class MediumChair extends ChairProduct {
  constructor() {
    super();
    this.name = 'Medium Chair';
    this.height = 20;
    this.width = 20;
    this.depth = 20;
  }
}
