"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableFactory = void 0;
const constants_1 = require("../../constants");
const table_types_1 = require("./table-types");
class TableFactory {
    static createTable(tableType) {
        switch (tableType) {
            case constants_1.FurnitureSize.LARGE:
                return new table_types_1.LargeTable();
            case constants_1.FurnitureSize.MEDIUM:
                return new table_types_1.MediumTable();
            case constants_1.FurnitureSize.SMALL:
                return new table_types_1.SmallTable();
            default:
                return new table_types_1.TableProduct();
        }
    }
}
exports.TableFactory = TableFactory;
