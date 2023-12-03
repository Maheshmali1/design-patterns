import { HouseBuilder } from '../builder/house-builder';
import { BuildingType, WallMaterial } from '../constants';

export class Castle {
  static contruct() {
    return new HouseBuilder()
      .setBuildingType(BuildingType.CASTLE)
      .setDoors(12)
      .setWindows(40)
      .setWallMaterial(WallMaterial.STONE)
      .getBuiltHouse();
  }
}
