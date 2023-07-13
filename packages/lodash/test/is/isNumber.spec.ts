import { isNumber } from '../../src/index';

describe('isNumber', () => {
  it('should return `true` for number', () => {
    expect(isNumber(1)).toBeTruthy();
  });

  it('should return `false` for number', () => {
    expect(isNumber('a')).toBeFalsy();
    expect(isNumber([1, 2, 3])).toBeFalsy();
    expect(isNumber({ 0: 1, length: 1 })).toBeFalsy();
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber(true)).toBeFalsy();
    expect(isNumber(false)).toBeFalsy();
    expect(isNumber(undefined)).toBeFalsy();
  });
});
