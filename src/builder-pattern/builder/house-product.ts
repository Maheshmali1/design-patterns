import { BuildingType, WallMaterial } from '../constants';
import { IHouse } from '../interface';

export class House implements IHouse {
  buildType: BuildingType;
  doors: number;
  windows: number;
  wallMaterial: WallMaterial;

  constructor() {
    this.buildType = BuildingType.ROW_HOUSE;
    this.doors = 2;
    this.windows = 2;
    this.wallMaterial = WallMaterial.WOOD;
  }

  construction(): string {
    return `Building ${this.buildType} with ${this.doors} doors and ${this.windows} windows and wall material ${this.wallMaterial}`;
  }
}
