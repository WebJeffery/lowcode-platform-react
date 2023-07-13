import { isInteger } from '../../src/index';

describe('isInteger', () => {
  it('should return `true` for integer', () => {
    expect(isInteger('-1')).toBeTruthy();
    expect(isInteger('0')).toBeTruthy();
    expect(isInteger('1')).toBeTruthy();
    expect(isInteger('+1')).toBeTruthy();
    expect(isInteger(1)).toBeTruthy();
    expect(isInteger(+1)).toBeTruthy();
    expect(isInteger(-1)).toBeTruthy();
    expect(isInteger(0)).toBeTruthy();
  });

  it('should return `false` for integer', () => {
    expect(isInteger('')).toBeFalsy();
    expect(isInteger(' ')).toBeFalsy();
    expect(isInteger('+')).toBeFalsy();
    expect(isInteger('-')).toBeFalsy();
    expect(isInteger('.')).toBeFalsy();
    expect(isInteger('1.2')).toBeFalsy();
    expect(isInteger('+1.2')).toBeFalsy();
    expect(isInteger('-1.2')).toBeFalsy();
    expect(isInteger(1.2)).toBeFalsy();
    expect(isInteger(-1.2)).toBeFalsy();
    expect(isInteger(+1.2)).toBeFalsy();
  });
});
