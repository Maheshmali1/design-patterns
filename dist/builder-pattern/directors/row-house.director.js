"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowHouse = void 0;
const house_builder_1 = require("../builder/house-builder");
const constants_1 = require("../constants");
class RowHouse {
    static contruct() {
        return new house_builder_1.HouseBuilder()
            .setBuildingType(constants_1.BuildingType.ROW_HOUSE)
            .setDoors(3)
            .setWindows(5)
            .setWallMaterial(constants_1.WallMaterial.BRICK)
            .getBuiltHouse();
    }
}
exports.RowHouse = RowHouse;
