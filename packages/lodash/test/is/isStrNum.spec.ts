import { isStrNum } from '../../src/index';

describe('isStrNum', () => {
  it('should return `true` for strnum', () => {
    expect(isStrNum('-1')).toBeTruthy();
    expect(isStrNum('0')).toBeTruthy();
    expect(isStrNum('1.2')).toBeTruthy();
    expect(isStrNum('+1.3')).toBeTruthy();
    expect(isStrNum('+.1')).toBeTruthy();
    expect(isStrNum('+1.')).toBeTruthy();
    expect(isStrNum('1.')).toBeTruthy();
    expect(isStrNum('.1')).toBeTruthy();
  });

  it('should return `false` for strnum', () => {
    expect(isStrNum('')).toBeFalsy();
    expect(isStrNum(' ')).toBeFalsy();
    expect(isStrNum('+')).toBeFalsy();
    expect(isStrNum('-')).toBeFalsy();
    expect(isStrNum('.')).toBeFalsy();
    expect(isStrNum('..1')).toBeFalsy();
    expect(isStrNum('1..')).toBeFalsy();
  });
});
