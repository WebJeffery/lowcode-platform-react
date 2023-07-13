import { cookie } from '../../src/index';

describe('cookie', () => {

  it('Should set and retrieve a Cookie with given value', () => {

    cookie.setItem('key', 'value')

    cookie.setItem('key-1', 'value')

    expect(cookie.getItem('key-1')).toBe('value')

    expect(cookie.getItem('key-1', { isBase64: false })).toBe('dmFsdWU=')

    expect(cookie.getItem('key')).toBe('value');

    expect(cookie.getItem('cookie-key')).toBe('');
  });

  it('Should delete existing cookie and get null when fetching deleted cookie', () => {

    cookie.removeItem('key')

    expect(cookie.getItem('key')).toBe('');

  });

  it('Should set and retrieve a Cookie with given value from a domain', function () {

    cookie.setItem('key', 'value', { expires: 1, domain: 'localhost', path: '/index' });

    expect(cookie.getItem('key')).toBe('');

  });

  it('Should set and retrieve a Cookie with given Date from a domain', function () {

    const expires = new Date('Thu Nov 04 2021 20:20:06 GMT+0800 (中国标准时间)')

    cookie.setItem('key', 'value', { expires, domain: 'localhost' });

    expect(cookie.getItem('key')).toBe('');

  });

  it('Should delete existing cookie with a domain and get null when fetching deleted cookie', function () {

    cookie.removeItem('key')

    expect(cookie.getItem('key')).toBe('');
  });
});
