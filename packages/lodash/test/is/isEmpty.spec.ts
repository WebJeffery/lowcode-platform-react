import { isEmpty } from '../../src/index';

describe('isEmpty', () => {
  it('should return `true` for values', () => {
    expect(isEmpty(1)).toBeTruthy();
    expect(isEmpty([ ])).toBeTruthy();
    expect(isEmpty({ })).toBeTruthy();
    expect(isEmpty(true)).toBeTruthy();
    expect(isEmpty(false)).toBeTruthy();
    expect(isEmpty(null)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
  });

  it('should return `false` for values', () => {
    expect(isEmpty('a')).toBeFalsy();
    expect(isEmpty([1, 2, 3])).toBeFalsy();
    expect(isEmpty({ '0': 1, length: 1 })).toBeFalsy();
  });

  it('should work with an object that has a `length` property', function () {
    expect(isEmpty({ length: 0 })).toBeFalsy();
  });

  it('should work with maps', function () {
    const map = new Map();
    expect(isEmpty(map)).toBeTruthy();
    map.set('a', 1);
    expect(isEmpty(map)).toBeFalsy();
  });

  it('should work with sets', function () {
    const set = new Set();
    expect(isEmpty(set)).toBeTruthy();
    set.add(1);
    expect(isEmpty(set)).toBeFalsy();
  });
});
