import { divide } from '../../src/index';

describe('divide', () => {
  it('should use default', () => {
    expect(divide('0.3', '0.1')).toBe(3);
    expect(divide(0.69, 10)).toBe(0.069);
    expect(divide(10, 10)).toBe(1);
    expect(divide('2', '10')).toBe(0.2);
    expect(divide(' ', 1)).toBe(0);
    expect(divide(1, ' ')).toBe(1);
  });
});
