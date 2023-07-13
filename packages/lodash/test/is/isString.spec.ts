import { isString } from '../../src/index';

describe('isString', () => {
  it('should return `true` for string', () => {
    expect(isString('a')).toBeTruthy();
  });

  it('should return `false` for string', () => {
    expect(isString(1)).toBeFalsy();
    expect(isString([1, 2, 3])).toBeFalsy();
    expect(isString({ '0': 1, length: 1 })).toBeFalsy();
    expect(isString(null)).toBeFalsy();
    expect(isString(true)).toBeFalsy();
    expect(isString(false)).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
  });
});
