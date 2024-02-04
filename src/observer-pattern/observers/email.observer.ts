import { IObserver } from '../interface';

export class EmailObserver implements IObserver {
  constructor(private emailId: string) {}
  update(value: any): void {
    console.log(
      `Sending email to ${this.emailId} current stock count is : ${value}`
    );
  }
}
