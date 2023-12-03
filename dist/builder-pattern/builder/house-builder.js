"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseBuilder = void 0;
const house_product_1 = require("./house-product");
class HouseBuilder {
    constructor() {
        this.house = new house_product_1.House();
    }
    setBuildingType(buildingType) {
        this.house.buildType = buildingType;
        return this;
    }
    setDoors(doors) {
        this.house.doors = doors;
        return this;
    }
    setWindows(windows) {
        this.house.windows = windows;
        return this;
    }
    setWallMaterial(wallMaterial) {
        this.house.wallMaterial = wallMaterial;
        return this;
    }
    getBuiltHouse() {
        return this.house;
    }
}
exports.HouseBuilder = HouseBuilder;
