import { isBoolean } from '../../src/index';

describe('isBoolean', () => {

  it('should return `true` for boolean', () => {
    expect(isBoolean(true)).toBeTruthy();
    expect(isBoolean(false)).toBeTruthy();
  });

  it('should return `false` for boolean', () => {
    expect(isBoolean(1)).toBeFalsy();
    expect(isBoolean('a')).toBeFalsy();
    expect(isBoolean([1, 2, 3])).toBeFalsy();
    expect(isBoolean({ '0': 1, 'length': 1 })).toBeFalsy();
    expect(isBoolean(null)).toBeFalsy();
    expect(isBoolean(undefined)).toBeFalsy();
  });
});
