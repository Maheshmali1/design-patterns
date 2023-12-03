import { CloneMode } from './constants/clone-modes.enum';
import { Document } from './prototype/prototype';

const document = new Document('document 1', [
  [1, 2, 3],
  [4, 5, 6],
]);
console.log(`original document: `, document);
console.log(`--------------------------------`);

const deepClonedDocument = document.clone(CloneMode.DEEP);
deepClonedDocument.document[0][0] = 40;
console.log(`Deep cloned document: `, deepClonedDocument);
console.log(`original document after deep cloning: `, document);
console.log(`--------------------------------`);

const shallowClonedDocument = document.clone(CloneMode.SHALLOW);
document.document[0][2] = 60;
console.log(`Shallow cloned document: `, shallowClonedDocument);
console.log(`original document after shallow cloning: `, document);
