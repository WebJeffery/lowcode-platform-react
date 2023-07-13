import { deepFlatten } from '../../src/index';

describe('deepFlatten', () => {
  it('should use default', () => {
    expect(deepFlatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5]);

    expect(deepFlatten([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

});
