"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sub = void 0;
class _Sub {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
        const trasformedValue1 = Object.prototype.hasOwnProperty.call(value1, 'value')
            ? value1.value
            : value1;
        const trasformedValue2 = Object.prototype.hasOwnProperty.call(value2, 'value')
            ? value2.value
            : value2;
        this.value = trasformedValue1 - trasformedValue2;
    }
}
function Sub(value1, value2) {
    return new _Sub(value1, value2);
}
exports.Sub = Sub;
