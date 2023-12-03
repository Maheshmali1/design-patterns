"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const directors_1 = require("./directors");
const rowHouse = directors_1.RowHouse.contruct();
const treeHouse = directors_1.TreeHouse.contruct();
const castleHouse = directors_1.Castle.contruct();
console.log(`Row house using builder : ${rowHouse.construction()}`);
console.log(`tree house using builder : ${treeHouse.construction()}`);
console.log(`Castle using builder : ${castleHouse.construction()}`);
