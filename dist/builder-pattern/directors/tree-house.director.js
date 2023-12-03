"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeHouse = void 0;
const house_builder_1 = require("../builder/house-builder");
const constants_1 = require("../constants");
class TreeHouse {
    static contruct() {
        return new house_builder_1.HouseBuilder()
            .setBuildingType(constants_1.BuildingType.TREE_HOUSE)
            .setDoors(2)
            .setWindows(4)
            .setWallMaterial(constants_1.WallMaterial.WOOD)
            .getBuiltHouse();
    }
}
exports.TreeHouse = TreeHouse;
