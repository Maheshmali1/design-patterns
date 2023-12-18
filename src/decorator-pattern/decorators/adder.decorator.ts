import { IValue } from '../interface/value.interface';

class _Add implements IValue {
  value: number;
  constructor(public value1: number | IValue, public value2: number | IValue) {
    const trasformedValue1 = Object.prototype.hasOwnProperty.call(
      value1,
      'value'
    )
      ? (value1 as IValue).value
      : (value1 as number);

    const trasformedValue2 = Object.prototype.hasOwnProperty.call(
      value2,
      'value'
    )
      ? (value2 as IValue).value
      : (value2 as number);

    this.value = trasformedValue1 + trasformedValue2;
  }
}

export function Add(value1: number | IValue, value2: number | IValue) {
  return new _Add(value1, value2);
}
