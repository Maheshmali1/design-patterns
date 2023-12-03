"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Castle = void 0;
const house_builder_1 = require("../builder/house-builder");
const constants_1 = require("../constants");
class Castle {
    static contruct() {
        return new house_builder_1.HouseBuilder()
            .setBuildingType(constants_1.BuildingType.CASTLE)
            .setDoors(12)
            .setWindows(40)
            .setWallMaterial(constants_1.WallMaterial.STONE)
            .getBuiltHouse();
    }
}
exports.Castle = Castle;
