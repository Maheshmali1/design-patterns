import { ICubeB, cordinates } from '../../interface';

export class CubeB implements ICubeB {
  static lastTime = Date.now();
  create(topLeftFront: cordinates, bottomRightBack: cordinates) {
    const now = Date.now();
    if (now > CubeB.lastTime + 3000) {
      console.log(
        `Company B build the cube with cords topLeftFront: ${topLeftFront} and bottomRight ${bottomRightBack}`
      );
      CubeB.lastTime = now;
      return true;
    }
    return false;
  }
}
