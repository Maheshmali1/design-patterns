import { Castle, RowHouse, TreeHouse } from './directors';

const rowHouse = RowHouse.contruct();
const treeHouse = TreeHouse.contruct();
const castleHouse = Castle.contruct();

console.log(`Row house using builder : ${rowHouse.construction()}`);

console.log(`tree house using builder : ${treeHouse.construction()}`);

console.log(`Castle using builder : ${castleHouse.construction()}`);
