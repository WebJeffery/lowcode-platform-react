import { isDefined } from '../../src/index';

describe('isDefined', () => {

  it('should return `true` for defined', () => {
    expect(isDefined(1)).toBeTruthy();
    expect(isDefined('a')).toBeTruthy();
    expect(isDefined(true)).toBeTruthy();
    expect(isDefined(false)).toBeTruthy();
    expect(isDefined([1, 2, 3])).toBeTruthy();
    expect(isDefined({ '0': 1, 'length': 1 })).toBeTruthy();
    expect(isDefined(null)).toBeTruthy();
  });

  it('should return `false` for defined', () => {
    expect(isDefined(undefined)).toBeFalsy();
  });
});
