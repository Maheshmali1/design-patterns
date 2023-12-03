import { FurnitureSize, FurnitureType } from './constants';
import { FurnitureFactory } from './furniture.factory';

const mediumTable = FurnitureFactory.getFurniture(
  FurnitureType.TABLE,
  FurnitureSize.MEDIUM
);
console.log(`Requeted medium table`, mediumTable);

const smallChair = FurnitureFactory.getFurniture(
  FurnitureType.CHAIR,
  FurnitureSize.SMALL
);
console.log(`Requested small chair`, smallChair);
