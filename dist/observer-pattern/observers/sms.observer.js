"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSObserver = void 0;
class SMSObserver {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    update(value) {
        console.log(`Sending SMS to ${this.phoneNumber} current stock count is : ${value}`);
    }
}
exports.SMSObserver = SMSObserver;
