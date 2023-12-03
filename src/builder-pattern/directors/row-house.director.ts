import { HouseBuilder } from '../builder/house-builder';
import { BuildingType, WallMaterial } from '../constants';

export class RowHouse {
  static contruct() {
    return new HouseBuilder()
      .setBuildingType(BuildingType.ROW_HOUSE)
      .setDoors(3)
      .setWindows(5)
      .setWallMaterial(WallMaterial.BRICK)
      .getBuiltHouse();
  }
}
