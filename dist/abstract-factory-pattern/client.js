"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const furniture_factory_1 = require("./furniture.factory");
const mediumTable = furniture_factory_1.FurnitureFactory.getFurniture(constants_1.FurnitureType.TABLE, constants_1.FurnitureSize.MEDIUM);
console.log(`Requeted medium table`, mediumTable);
const smallChair = furniture_factory_1.FurnitureFactory.getFurniture(constants_1.FurnitureType.CHAIR, constants_1.FurnitureSize.SMALL);
console.log(`Requested small chair`, smallChair);
