import { isIdCard } from '../../src/index';


describe('idcardUtil', () => {

  it('test Wrong ID card entered', () => {
    expect(isIdCard('12312312')).toBeFalsy();

    expect(isIdCard('324234232rwerwe    ')).toBeFalsy();

    expect(isIdCard('030512000813136030512000813136')).toBeFalsy();

    expect(isIdCard('030512000813136')).toBeFalsy();

    expect(isIdCard('430512001813136')).toBeFalsy();

    expect(isIdCard('430512001833136')).toBeFalsy();

    expect(isIdCard('527457178001010521')).toBeFalsy();

    expect(isIdCard('527457178001010524')).toBeFalsy();

    expect(isIdCard('527457178013010524')).toBeFalsy();

    expect(isIdCard('527457178013340524')).toBeFalsy();
  })

  it('test ID card entered', () => {

    expect(isIdCard('430512890813136')).toBeTruthy();

    expect(isIdCard('432858198001015818')).toBeTruthy();

    expect(isIdCard('556731198001017149')).toBeTruthy();

    expect(isIdCard('  32 0574 1980 01 017 62 5 ')).toBeTruthy();

    expect(isIdCard('25   21351980010  11810')).toBeTruthy();

    expect(isIdCard('347858198001015300')).toBeTruthy();

    expect(isIdCard('3533 221980 010156 8 X ')).toBeTruthy();

    expect(isIdCard('5403 101 980 0101 270x')).toBeTruthy();
  })
})

