import { subtract } from '../../src/index';

describe('subtract', () => {
  it('should use default', () => {
    expect(subtract('1.1', '1')).toBe(0.1);
    expect(subtract('1.1', '')).toBe(1.1);
    expect(subtract(' ', '1')).toBe(-1);
    expect(subtract(1.5, '1.2')).toBe(0.3);
    expect(subtract(0.3, 0.2)).toBe(0.1);
    expect(subtract(0, ' ')).toBe(0);
  });
});
