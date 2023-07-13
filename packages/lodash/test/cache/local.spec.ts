import { local } from '../../src/index';

describe('local', () => {

  it('Should set and retrieve a Local with given value', () => {

    local.setItem('key', 'value')

    expect(local.getItem('key')).toBe('value');

    expect(local.getItem('local-value')).toBe(null);

  });

  it('Should delete existing local and get null when fetching deleted local', () => {

    local.removeItem('key')

    expect(local.getItem('key')).toBe(null);

  });

  it('Should set and retrieve a Local with given value', function () {
    jest.useFakeTimers();

    local.setItem('key', 'value', { expires: 1 });

    jest.advanceTimersByTime(3000);

    expect(local.getItem('key')).toBe(null);

  });


  it('Should delete existing local with get null when fetching deleted local', function () {

    local.removeItem('key')

    expect(local.getItem('key')).toBe(null);
  });

  it('Should get null when fetching set error local', function () {

    window.localStorage.setItem('key', '{"a":1')

    expect(local.getItem('key')).toBe(null);

    local.removeItem('key')

  });

});
