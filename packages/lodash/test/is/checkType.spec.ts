import { checkType } from '../../src/index';

describe('checkType', () => {
  it('return the type of value', () => {
    expect(checkType(123)).toBe('Number');
    expect(checkType(true)).toBe('Boolean');
    expect(checkType('123')).toBe('String');
    expect(checkType(['123','asdw'])).toBe('Array');
    expect(checkType(() => {})).toBe('Function');
    expect(checkType(new Error)).toBe('Error');
    expect(checkType(new Date)).toBe('Date');
    expect(checkType(null)).toBe('Null');
    expect(checkType(undefined)).toBe('Undefined');
    expect(checkType({})).toBe('Object');
    expect(checkType(/[A-C]$/)).toBe('RegExp');
    expect(checkType(new File([new Blob()], "xxx.png"))).toBe('File');
    expect(checkType(new Map)).toBe('Map');
    expect(checkType(new Set)).toBe('Set');
  })
})
