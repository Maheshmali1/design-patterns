"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IphoneStockObservable = void 0;
class IphoneStockObservable {
    constructor() {
        this._observers = [];
        this._value = 0;
    }
    subscribe(observer) {
        this._observers.push(observer);
    }
    unsubscribe(observer) {
        this._observers = this._observers.filter((o) => o !== observer);
    }
    notify() {
        this._observers.forEach((o) => o.update(this._value));
    }
    setValue(value) {
        const prevValue = this._value;
        this._value = value;
        if (prevValue === 0) {
            this.notify();
        }
    }
}
exports.IphoneStockObservable = IphoneStockObservable;
