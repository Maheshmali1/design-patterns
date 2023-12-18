import { IValue } from './interface/value.interface';

class _Value implements IValue {
  constructor(public value: number) {}
}

export function Value(value: number) {
  return new _Value(value);
}
