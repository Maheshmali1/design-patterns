"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeA = void 0;
class CubeA {
    manufacturer(width, height, depth) {
        const now = Date.now();
        if (now > CubeA.lastTime + 1500) {
            console.log(`Company A build the cube with dimensions ${width} and ${height} and depth ${depth}`);
            CubeA.lastTime = now;
            return true;
        }
        return false;
    }
}
CubeA.lastTime = Date.now();
exports.CubeA = CubeA;
