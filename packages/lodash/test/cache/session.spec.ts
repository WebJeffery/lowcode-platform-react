import { session } from '../../src/index';

describe('session', () => {

  it('Should set and retrieve a Session with given value', () => {

    session.setItem('key', 'value')

    expect(session.getItem('key')).toBe('value');

  });

  it('Should delete existing session and get null when fetching deleted session', () => {

    session.removeItem('key')

    expect(session.getItem('key')).toBe(null);

  });


  it('Should set and retrieve a Session with given value from a domain', function () {

    session.setItem('key', 'value', { expires: 1, });

    expect(session.getItem('key')).toBe('value');

  });

  it('Should set and retrieve a Session with given value from a domain', function () {

    const expires = new Date('Thu Nov 04 2021 20:20:06 GMT+0800 (中国标准时间)')

    session.setItem('key', 'value', { expires, });

    expect(session.getItem('key')).toBe(null);

  });

  it('Should delete existing session with a domain and get null when fetching deleted session', function () {

    session.removeItem('key')

    expect(session.getItem('key')).toBe(null);
  });

});
