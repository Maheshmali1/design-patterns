import { Add, Sub } from './decorators';
import { Value } from './value.component';

const A = Value(1);
const B = Value(2);
const C = Value(5);
console.log(`A: ${A.value} \nB: ${B.value} \nC: ${C.value}\n`);

console.log(`Add(A, B).value : ${Add(A, B).value}`); // OP: 3
console.log(`Add(A, 100).value : ${Add(A, 100).value}`); // OP: 101
console.log(`Sub(Add(C, B), A).value: ${Sub(Add(C, B), A).value}`); // OP: 6
console.log(`Sub(100, 101).value: ${Sub(100, 101).value}`); // OP: -1
console.log(
  `Add(Sub(Add(C, B), A), 100).value: ${Add(Sub(Add(C, B), A), 100).value}`
); // OP: 106
console.log(`A.value:  ${A.value}`); // OP: 1
