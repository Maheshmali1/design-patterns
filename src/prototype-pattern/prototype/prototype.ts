import { CloneMode } from '../constants/clone-modes.enum';
import { IDocument } from '../interface/document.interface';

export class Document implements IDocument {
  constructor(public name: string, public document: number[][]) {}

  clone(cloneMode: CloneMode): Document {
    switch (cloneMode) {
      case CloneMode.DEEP:
        return new Document(
          this.name,
          JSON.parse(JSON.stringify(this.document))
        );
      case CloneMode.SHALLOW:
        return new Document(this.name, Object.assign({}, this.document));
      default:
        return new Document(this.name, Object.assign({}, this.document));
    }
  }
}
