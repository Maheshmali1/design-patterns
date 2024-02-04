import { IObserver } from '.';

export interface IObservable {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  notify(): void;
  getValue(): any;
  setValue(value: any): void;
}
