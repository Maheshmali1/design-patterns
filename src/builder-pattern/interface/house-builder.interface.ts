import { BuildingType, WallMaterial } from '../constants';
import { IHouse } from './house.interface';

export interface IHouseBuilder {
  house: IHouse;
  setBuildingType(buildingType: BuildingType): this;
  setDoors(doors: number): this;
  setWindows(windows: number): this;
  setWallMaterial(wallMaterial: WallMaterial): this;

  getBuiltHouse(): IHouse;
}
