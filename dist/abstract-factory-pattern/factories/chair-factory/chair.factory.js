"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChairFactory = void 0;
const chair_types_1 = require("./chair-types");
const constants_1 = require("../../constants");
class ChairFactory {
    static createChair(chairType) {
        switch (chairType) {
            case constants_1.FurnitureSize.LARGE:
                return new chair_types_1.LargeChair();
            case constants_1.FurnitureSize.MEDIUM:
                return new chair_types_1.MediumChair();
            case constants_1.FurnitureSize.SMALL:
                return new chair_types_1.SmallChair();
            default:
                return new chair_types_1.ChairProduct();
        }
    }
}
exports.ChairFactory = ChairFactory;
