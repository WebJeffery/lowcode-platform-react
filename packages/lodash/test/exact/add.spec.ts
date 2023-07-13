import { add } from '../../src/index';

describe('add', () => {
  it('should use default', () => {
    expect(add(' ', '2')).toBe('2');
    expect(add('1', '')).toBe('1');
    expect(add('1', '2')).toBe('3');
    expect(add('0.1', '0.2')).toBe('0.3');
    expect(add('0.1', 0.2)).toBe('0.3');
    expect(add(0.1, '0.2')).toBe('0.3');
    expect(add(0.1, 0.2)).toBe('0.3');
    expect(add(1, 2)).toBe('3');
    expect(add(1, ' ')).toBe('1');
    expect(add('', 2)).toBe('2');
    expect(add(102, 32)).toBe('134');
    expect(add(4176.86, add(4451.86, 4885.86))).toBe('13514.58');
    expect(add('0.1', '.2')).toBe('0.3')
    expect(add('12345678912345678', '98769876987698769')).toBe('111115555900044447')
    expect(add('12345.9999887', '987698.09098')).toBe('1000044.0909687')
    expect(add('12345678912345678.999988776532', '98769876987698769.898838943896546')).toBe('111115555900044448.898827720428546')
    expect(add('12345678912345678.999988776532', '0')).toBe('12345678912345678.999988776532')
    expect(add(3384, add(3973, add(561.36, add(600.4, add(720, add(531, add(720, add(1219.2, 1219.2))))))))).toBe('12928.16')
  })
});
