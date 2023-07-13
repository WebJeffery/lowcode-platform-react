import { isFile } from '../../src/index';

describe('isFile', () => {
  it('should return `true` for file', () => {
    expect(isFile(new File([new Blob()], "xxx.png"))).toBeTruthy();
  });

  it('should return `false` for file', () => {
    expect(isFile(1)).toBeFalsy();
    expect(isFile('a')).toBeFalsy();
    expect(isFile([1, 2, 3])).toBeFalsy();
    expect(isFile({ '0': 1, length: 1 })).toBeFalsy();
    expect(isFile(null)).toBeFalsy();
    expect(isFile(true)).toBeFalsy();
    expect(isFile(false)).toBeFalsy();
    expect(isFile(undefined)).toBeFalsy();
  });
});
