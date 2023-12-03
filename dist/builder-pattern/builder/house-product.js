"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
const constants_1 = require("../constants");
class House {
    constructor() {
        this.buildType = constants_1.BuildingType.ROW_HOUSE;
        this.doors = 2;
        this.windows = 2;
        this.wallMaterial = constants_1.WallMaterial.WOOD;
    }
    construction() {
        return `Building ${this.buildType} with ${this.doors} doors and ${this.windows} windows and wall material ${this.wallMaterial}`;
    }
}
exports.House = House;
