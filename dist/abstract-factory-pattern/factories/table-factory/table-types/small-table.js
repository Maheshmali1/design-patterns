"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallTable = void 0;
const concrete_table_1 = require("./concrete-table");
class SmallTable extends concrete_table_1.TableProduct {
    constructor() {
        super();
        this.name = 'Small Table',
            this.height = 10,
            this.width = 10,
            this.depth = 10;
    }
}
exports.SmallTable = SmallTable;
