import { CloneMode } from '../constants/clone-modes.enum';
import { Document } from '../prototype/prototype';

export interface IDocument {
  clone(cloneMode: CloneMode): Document;
}
