import { isNull } from '../../src/index';

describe('isNull', () => {

  it('should return `true` for null', () => {
    expect(isNull(null)).toBeTruthy();
  });

  it('should return `false` for null', () => {
    expect(isNull(1)).toBeFalsy();
    expect(isNull('a')).toBeFalsy();
    expect(isNull(true)).toBeFalsy();
    expect(isNull(false)).toBeFalsy();
    expect(isNull([1, 2, 3])).toBeFalsy();
    expect(isNull({ '0': 1, 'length': 1 })).toBeFalsy();
    expect(isNull(undefined)).toBeFalsy();
  });
});
