"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("./decorators");
const value_component_1 = require("./value.component");
const A = (0, value_component_1.Value)(1);
const B = (0, value_component_1.Value)(2);
const C = (0, value_component_1.Value)(5);
console.log(`A: ${A.value} \nB: ${B.value} \nC: ${C.value}\n`);
console.log(`Add(A, B).value : ${(0, decorators_1.Add)(A, B).value}`); // OP: 3
console.log(`Add(A, 100).value : ${(0, decorators_1.Add)(A, 100).value}`); // OP: 101
console.log(`Sub(Add(C, B), A).value: ${(0, decorators_1.Sub)((0, decorators_1.Add)(C, B), A).value}`); // OP: 6
console.log(`Sub(100, 101).value: ${(0, decorators_1.Sub)(100, 101).value}`); // OP: -1
console.log(`Add(Sub(Add(C, B), A), 100).value: ${(0, decorators_1.Add)((0, decorators_1.Sub)((0, decorators_1.Add)(C, B), A), 100).value}`); // OP: 106
console.log(`A.value:  ${A.value}`); // OP: 1
