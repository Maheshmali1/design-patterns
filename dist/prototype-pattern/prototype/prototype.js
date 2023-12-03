"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
const clone_modes_enum_1 = require("../constants/clone-modes.enum");
class Document {
    constructor(name, document) {
        this.name = name;
        this.document = document;
    }
    clone(cloneMode) {
        switch (cloneMode) {
            case clone_modes_enum_1.CloneMode.DEEP:
                return new Document(this.name, JSON.parse(JSON.stringify(this.document)));
            case clone_modes_enum_1.CloneMode.SHALLOW:
                return new Document(this.name, Object.assign({}, this.document));
            default:
                return new Document(this.name, Object.assign({}, this.document));
        }
    }
}
exports.Document = Document;
