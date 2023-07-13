import { isObject } from '../../src/index';

describe('isObject', () => {
  it('should return `true` for object', () => {
    expect(isObject({ '0': 1, length: 1 })).toBeTruthy();
  });

  it('should return `false` for object', () => {
    expect(isObject(1)).toBeFalsy();
    expect(isObject(/x/)).toBeFalsy();
    expect(isObject('a')).toBeFalsy();
    expect(isObject([1, 2, 3])).toBeFalsy();
    expect(isObject(true)).toBeFalsy();
    expect(isObject(false)).toBeFalsy();
    expect(isObject(null)).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
    expect(isObject(new Date)).toBeFalsy();
    expect(isObject(new Error)).toBeFalsy();

  });
});
