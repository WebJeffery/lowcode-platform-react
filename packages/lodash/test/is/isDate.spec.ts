import { isDate } from '../../src/index';

describe('isDate', () => {
  it('should return `true` for date', () => {
    expect(isDate(new Date)).toBeTruthy();

  });

  it('should return `false` for date', () => {
    expect(isDate(1)).toBeFalsy();
    expect(isDate(/x/)).toBeFalsy();
    expect(isDate('a')).toBeFalsy();
    expect(isDate({ '0': 1, length: 1 })).toBeFalsy();
    expect(isDate([1, 2, 3])).toBeFalsy();
    expect(isDate(null)).toBeFalsy();
    expect(isDate(true)).toBeFalsy();
    expect(isDate(false)).toBeFalsy();
    expect(isDate(undefined)).toBeFalsy();
    expect(isDate(new Error)).toBeFalsy();
  });
});
