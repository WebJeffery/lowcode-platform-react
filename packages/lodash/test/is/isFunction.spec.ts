import { isFunction } from '../../src/index';

describe('isFunction', () => {
  it('should return `true` for function', () => {
    function Foo() {}
    expect(isFunction(Foo)).toBeTruthy();
  });

  it('should return `false` for function', () => {
    expect(isFunction(1)).toBeFalsy();
    expect(isFunction('a')).toBeFalsy();
    expect(isFunction([1, 2, 3])).toBeFalsy();
    expect(isFunction({ '0': 1, length: 1 })).toBeFalsy();
    expect(isFunction(null)).toBeFalsy();
    expect(isFunction(true)).toBeFalsy();
    expect(isFunction(false)).toBeFalsy();
    expect(isFunction(undefined)).toBeFalsy();
  });
});
