"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeBAdaptor = void 0;
const cubeB_1 = require("./cubeB");
class CubeBAdaptor {
    constructor() {
        this.cube = new cubeB_1.CubeB();
    }
    manufacturer(width, height, depth) {
        return this.cube.create([0 - width / 2, 0 - height / 2, 0 - depth / 2], [width / 2, height / 2, depth / 2]);
    }
}
exports.CubeBAdaptor = CubeBAdaptor;
