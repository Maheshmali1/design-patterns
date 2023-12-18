import { ICubeA } from '../../interface';
import { CubeB } from './cubeB';

export class CubeBAdaptor implements ICubeA {
  private cube: CubeB;
  constructor() {
    this.cube = new CubeB();
  }
  manufacturer(width: number, height: number, depth: number) {
    return this.cube.create(
      [0 - width / 2, 0 - height / 2, 0 - depth / 2],
      [width / 2, height / 2, depth / 2]
    );
  }
}
