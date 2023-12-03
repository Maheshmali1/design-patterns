"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LargeTable = void 0;
const concrete_table_1 = require("./concrete-table");
class LargeTable extends concrete_table_1.TableProduct {
    constructor() {
        super();
        (this.name = 'Large Table'),
            (this.height = 30),
            (this.width = 30),
            (this.depth = 30);
    }
}
exports.LargeTable = LargeTable;
