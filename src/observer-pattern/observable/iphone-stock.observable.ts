import { IObservable, IObserver } from '../interface';

export class IphoneStockObservable implements IObservable {
  private _observers: Array<IObserver> = [];
  private _value = 0;

  public subscribe(observer: IObserver): void {
    this._observers.push(observer);
  }

  public unsubscribe(observer: IObserver): void {
    this._observers = this._observers.filter((o) => o !== observer);
  }

  public notify(): void {
    this._observers.forEach((o) => o.update(this.getValue()));
  }

  public getValue(): any {
    return this._value;
  }

  public setValue(value: any): void {
    const prevValue = this._value;
    this._value = value;
    if (prevValue === 0) {
      this.notify();
    }
  }
}
