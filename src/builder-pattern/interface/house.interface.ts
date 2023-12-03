import { BuildingType, WallMaterial } from '../constants';

export interface IHouse {
  buildType: BuildingType;
  doors: number;
  windows: number;
  wallMaterial: WallMaterial;

  construction(): string;
}
