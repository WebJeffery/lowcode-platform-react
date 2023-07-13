import { multiply } from '../../src/index';

describe('multiply', () => {
  it('should use default', () => {
    expect(multiply(19.9, 100 )).toBe(1990);
    expect(multiply('0.8', 3 )).toBe(2.4);
    expect(multiply('35.41', '100' )).toBe(3541);
    expect(multiply('100', '35.41' )).toBe(3541);
    expect(multiply('100', '12' )).toBe(1200);
    expect(multiply(' ', ' ' )).toBe(0);
  });
});
