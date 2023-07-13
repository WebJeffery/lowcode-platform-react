import { isUndefined } from '../../src/index';

describe('isUndefined', () => {
  it('should return `true` for undefined', () => {
    expect(isUndefined(undefined)).toBeTruthy();
  });

  it('should return `false` for undefined', () => {
    expect(isUndefined(1)).toBeFalsy();
    expect(isUndefined('a')).toBeFalsy();
    expect(isUndefined([1, 2, 3])).toBeFalsy();
    expect(isUndefined({ 0: 1, length: 1 })).toBeFalsy();
    expect(isUndefined(true)).toBeFalsy();
    expect(isUndefined(false)).toBeFalsy();
    expect(isUndefined(null)).toBeFalsy();
  });
});
