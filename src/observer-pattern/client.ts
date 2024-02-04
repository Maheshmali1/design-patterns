import { IphoneStockObservable } from './observable';
import { EmailObserver, SMSObserver } from './observers';

const iphoneObservable = new IphoneStockObservable();

console.log(`subscribing to iphoneObservable....`);
const SMSObserver1 = new SMSObserver('1234567890');
const SMSObserver2 = new SMSObserver('4234567890');
const emailObserver = new EmailObserver('abc@gmail.com');
iphoneObservable.subscribe(SMSObserver1);
iphoneObservable.subscribe(SMSObserver2);
iphoneObservable.subscribe(emailObserver);

console.log(`updating iphone stock....`);
iphoneObservable.setValue(100);
console.log();

console.log(`unsubscribing from iphoneObservable...`);
iphoneObservable.unsubscribe(SMSObserver1);
console.log();
console.log(`updating iphone stock....`);
iphoneObservable.setValue(0);
iphoneObservable.setValue(10);
