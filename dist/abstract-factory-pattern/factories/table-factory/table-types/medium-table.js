"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediumTable = void 0;
const concrete_table_1 = require("./concrete-table");
class MediumTable extends concrete_table_1.TableProduct {
    constructor() {
        super();
        this.name = 'Medium Table',
            this.height = 20,
            this.width = 20,
            this.depth = 20;
    }
}
exports.MediumTable = MediumTable;
