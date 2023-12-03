import { FurnitureSize } from '../../constants';
import { Table } from '../../interface';
import {
  LargeTable,
  MediumTable,
  SmallTable,
  TableProduct,
} from './table-types';

export class TableFactory {
  static createTable(tableType: FurnitureSize): Table {
    switch (tableType) {
      case FurnitureSize.LARGE:
        return new LargeTable();
      case FurnitureSize.MEDIUM:
        return new MediumTable();
      case FurnitureSize.SMALL:
        return new SmallTable();
      default:
        return new TableProduct();
    }
  }
}
