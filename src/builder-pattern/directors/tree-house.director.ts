import { HouseBuilder } from '../builder/house-builder';
import { BuildingType, WallMaterial } from '../constants';

export class TreeHouse {
  static contruct() {
    return new HouseBuilder()
      .setBuildingType(BuildingType.TREE_HOUSE)
      .setDoors(2)
      .setWindows(4)
      .setWallMaterial(WallMaterial.WOOD)
      .getBuiltHouse();
  }
}
