"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailObserver = void 0;
class EmailObserver {
    constructor(emailId) {
        this.emailId = emailId;
    }
    update(value) {
        console.log(`Sending email to ${this.emailId} current stock count is : ${value}`);
    }
}
exports.EmailObserver = EmailObserver;
