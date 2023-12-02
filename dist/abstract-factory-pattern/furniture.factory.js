"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FurnitureFactory = void 0;
const constants_1 = require("./constants");
const chair_factory_1 = require("./factories/chair-factory/chair.factory");
const table_factory_1 = require("./factories/table-factory/table.factory");
class FurnitureFactory {
    static getFurniture(furnitureType, furnitureSize) {
        switch (furnitureType) {
            case constants_1.FurnitureType.TABLE:
                return table_factory_1.TableFactory.createTable(furnitureSize);
            case constants_1.FurnitureType.CHAIR:
                return chair_factory_1.ChairFactory.createChair(furnitureSize);
            default:
                return null;
        }
    }
}
exports.FurnitureFactory = FurnitureFactory;
