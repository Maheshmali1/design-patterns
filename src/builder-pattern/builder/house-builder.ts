import { BuildingType, WallMaterial } from '../constants';
import { IHouse, IHouseBuilder } from '../interface';
import { House } from './house-product';

export class HouseBuilder implements IHouseBuilder {
  house: IHouse;
  constructor() {
    this.house = new House();
  }
  setBuildingType(buildingType: BuildingType) {
    this.house.buildType = buildingType;
    return this;
  }

  setDoors(doors: number) {
    this.house.doors = doors;
    return this;
  }

  setWindows(windows: number) {
    this.house.windows = windows;
    return this;
  }

  setWallMaterial(wallMaterial: WallMaterial) {
    this.house.wallMaterial = wallMaterial;
    return this;
  }

  getBuiltHouse(): IHouse {
    return this.house;
  }
}
