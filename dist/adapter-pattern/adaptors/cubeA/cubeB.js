"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeB = void 0;
class CubeB {
    create(topLeftFront, bottomRightBack) {
        const now = Date.now();
        if (now > CubeB.lastTime + 3000) {
            console.log(`Company B build the cube with cords topLeftFront: ${topLeftFront} and bottomRight ${bottomRightBack}`);
            CubeB.lastTime = now;
            return true;
        }
        return false;
    }
}
CubeB.lastTime = Date.now();
exports.CubeB = CubeB;
