import { ICubeA } from '../../interface';

export class CubeA implements ICubeA {
  static lastTime = Date.now();

  manufacturer(width: number, height: number, depth: number) {
    const now = Date.now();
    if (now > CubeA.lastTime + 1500) {
      console.log(
        `Company A build the cube with dimensions ${width} and ${height} and depth ${depth}`
      );
      CubeA.lastTime = now;
      return true;
    }
    return false;
  }
}
