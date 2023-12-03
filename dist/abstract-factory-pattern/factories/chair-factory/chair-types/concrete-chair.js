"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChairProduct = void 0;
class ChairProduct {
    constructor() {
        (this.name = ''), (this.height = 0), (this.width = 0), (this.depth = 0);
    }
    getDimensions() {
        return {
            height: this.height,
            width: this.width,
            depth: this.depth,
        };
    }
}
exports.ChairProduct = ChairProduct;
