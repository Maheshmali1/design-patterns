import { Dimension } from './dimension.interface';

export interface Table extends Dimension {
  name: string;
  getDimensions(): Dimension;
}
