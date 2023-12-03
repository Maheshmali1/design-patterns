"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clone_modes_enum_1 = require("./constants/clone-modes.enum");
const prototype_1 = require("./prototype/prototype");
const document = new prototype_1.Document('document 1', [
    [1, 2, 3],
    [4, 5, 6],
]);
console.log(`Original document: `, document);
console.log(`--------------------------------`);
const deepClonedDocument = document.clone(clone_modes_enum_1.CloneMode.DEEP);
deepClonedDocument.document[0][0] = 40;
console.log(`Deep cloned document: `, deepClonedDocument);
console.log(`Original document after deep cloning: `, document);
console.log(`--------------------------------`);
const shallowClonedDocument = document.clone(clone_modes_enum_1.CloneMode.SHALLOW);
document.document[0][2] = 60;
console.log(`Shallow cloned document: `, shallowClonedDocument);
console.log(`Original document after shallow cloning: `, document);
