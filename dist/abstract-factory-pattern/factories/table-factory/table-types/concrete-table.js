"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableProduct = void 0;
class TableProduct {
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
exports.TableProduct = TableProduct;
