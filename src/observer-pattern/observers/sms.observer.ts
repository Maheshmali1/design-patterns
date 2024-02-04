import { IObserver } from '../interface';

export class SMSObserver implements IObserver {
  constructor(private phoneNumber: string) {}
  update(value: any): void {
    console.log(
      `Sending SMS to ${this.phoneNumber} current stock count is : ${value}`
    );
  }
}
