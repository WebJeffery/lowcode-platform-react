import { clear, mockUserAgent } from 'jest-useragent-mock'
import { thousands, getUrlParam, urlOpen, getSafeCid, buildUUID, buildShortUUID, cookie } from '../../src/index';


describe('test tool methods', () => {

  afterEach(() => {
    clear()
  })

  it('thousands test', () => {
    expect(thousands(12)).toEqual('12');

    expect(thousands(12312)).toEqual('12,312');

    expect(thousands('1234567')).toEqual('1,234,567');

    expect(thousands('abcd')).toEqual('');
  });

  it('getCurUrlParam test', () => {
    const search = '?id=13&from_function_id=G0_B01&from_function_name=%E9%A6%96%E9%A1%B5-%E4%B8%93%E7%A7%91ICON'

    Object.defineProperty(window, 'location', { value: { search }, writable: true })

    expect(getUrlParam('id')).toEqual('13');

    expect(getUrlParam('from_function_ids')).toEqual('');

    expect(getUrlParam('from_function_name')).toEqual('首页-专科ICON');

  });

  it('urlOpen test', () => {
    expect(urlOpen('')).toBeUndefined();
  });

  it('buildUUID test', () => {
    const expected = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab]{1}[0-9a-f]{3}-[0-9a-f]{12}$/

    expect(buildUUID()).toEqual(expect.stringMatching(expected))
  })

  it('buildShortUUID test', () => {
    const expected = /^.*_[0-9]{14,24}$/

    expect(buildShortUUID()).toEqual(expect.stringMatching(expected))

    expect(buildShortUUID('pid')).toEqual(expect.stringMatching(expected))
  })

  it('getSafeCid test', () => {
    const search = '?id=13&from_function_id=G0_B01&cid=35'

    cookie.setItem('channel_id', 887)

    expect(getSafeCid()).toBe('887')

    cookie.removeItem('channel_id')

    Object.defineProperty(window, 'location', { value: { search }, writable: true })

    expect(getSafeCid()).toBe('35')

    Object.defineProperty(window, 'location', { value: { search: '' }, writable: true })

    expect(getSafeCid()).toBe('16')

    mockUserAgent('Mozilla/5.0 (Linux; Android 7.1.1; MI 6 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN')

    expect(getSafeCid()).toBe('23')
  })
});
