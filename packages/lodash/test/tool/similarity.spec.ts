import { similarity } from '../../src/index';

describe('similarity', () => {
  it('should use default', () => {
    expect(similarity([1, 2, 3], [3, 3, 4])).toEqual([3]);

    expect(similarity([1, 2, 3], [4])).toEqual([]);
  });
});
