export type cordinates = [number, number, number];
export interface ICubeB {
  create: (topLeftFront: cordinates, bottomRightBack: cordinates) => boolean;
}
