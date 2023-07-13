import { isArray } from '../../src/index';

describe('isArray', () => {
  it('should return `true` for array', () => {
    expect(isArray([1, 2, 3])).toBeTruthy();

  });

  it('should return `false` for array', () => {
    expect(isArray(1)).toBeFalsy();
    expect(isArray(/x/)).toBeFalsy();
    expect(isArray('a')).toBeFalsy();
    expect(isArray({ '0': 1, length: 1 })).toBeFalsy();
    expect(isArray(null)).toBeFalsy();
    expect(isArray(true)).toBeFalsy();
    expect(isArray(false)).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
    expect(isArray(new Date)).toBeFalsy();
    expect(isArray(new Error)).toBeFalsy();
  });
});
