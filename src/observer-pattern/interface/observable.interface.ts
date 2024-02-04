import { IObserver } from '.';

export interface IObservable {
  subscribe(observer: IObserver): void;
  unsubscribe(observer: IObserver): void;
  notify(): void;
  setValue(value: any): void;
}
