import { clear, mockUserAgent } from 'jest-useragent-mock'
import { isIos, isAndroid, isWeiXin, isWeiXinMP, isPatientApp, isDoctorApp, isMerchantApp } from '../../src/index';


describe('system equipment valid', () => {

  afterEach(() => {
    clear()
  })

  it('Set the current environment as IOS', () => {
    mockUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1')

    expect(isIos()).toBeTruthy();

    expect(isAndroid()).toBeFalsy();

    expect(isWeiXin()).toBeFalsy();
  })

  it('Set the current environment as android', () => {
    mockUserAgent('Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36')

    expect(isIos()).toBeFalsy();

    expect(isAndroid()).toBeTruthy();

    expect(isWeiXin()).toBeFalsy();
  })

  it('Set the current environment to wechat and IOS', () => {
    mockUserAgent('Mozilla/5.0 (Linux; Android 7.1.1; MI 6 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN')

    expect(isIos()).toBeFalsy();

    expect(isAndroid()).toBeTruthy();

    expect(isWeiXin()).toBeTruthy();
  })

  it('Set the current environment to WechatMP and android', () => {
    mockUserAgent('Mozilla/5.0 (Linux; Android 7.1.1; MI 6 Build/NMF26X; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/043807 Mobile Safari/537.36 MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN MicroMessenger/6.6.1.1220(0x26060135) NetType/4G Language/zh_CN miniProgram')

    expect(isIos()).toBeFalsy();

    expect(isAndroid()).toBeTruthy();

    expect(isWeiXin()).toBeTruthy();

    expect(isWeiXinMP()).toBeTruthy();
  })

  it('Set the current environment to WechatMP and IOS', () => {
    window.__wxjs_environment = 'miniprogram'

    expect(isWeiXinMP()).toBeTruthy();

    delete window.__wxjs_environment
  })

  it('Set the current environment as android patient app', () => {
    mockUserAgent('cid=20 device_id=34f2562a-51d5-360f-9699-ab6482f7e8c9device_id Mozilla/5.0 (Linux; Android 10; ELS-AN00 Build/HUAWEIELS-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045714 Mobile Safari/537.36')

    expect(isPatientApp()).toBeTruthy();

    expect(isAndroid()).toBeTruthy();

    expect(isWeiXinMP()).toBeFalsy();

    expect(isIos()).toBeFalsy();
  })

  it('Set the current environment as ios patient app', () => {
    mockUserAgent('wk=1 cid=24 Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148')

    expect(isPatientApp()).toBeTruthy();

    expect(isIos()).toBeTruthy();

    expect(isAndroid()).toBeFalsy();

    expect(isWeiXinMP()).toBeFalsy();
  })

  it('Set the current environment as android doctor app', () => {

    mockUserAgent('Mozilla/5.0 (Linux; Android 10; ELS-AN00 Build/HUAWEIELS-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/88.0.4324.93 Mobile Safari/537.36')

    window.TokenNativeActionProxy = { getCid: () => '100000001' }

    expect(isDoctorApp()).toBeTruthy();

    expect(isAndroid()).toBeTruthy();

    expect(isWeiXinMP()).toBeFalsy();

    expect(isIos()).toBeFalsy();

    delete window.TokenNativeActionProxy
  })

  it('Set the current environment as ios doctor app', () => {

    mockUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 15_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148')

    window.TokenNativeActionProxy = { getCid: () => '100000002' }

    expect(isDoctorApp()).toBeTruthy();

    expect(isIos()).toBeTruthy();

    expect(isAndroid()).toBeFalsy();

    expect(isWeiXinMP()).toBeFalsy();

    delete window.TokenNativeActionProxy
  })

  it('Set the current environment as Android merchant app', () => {
    mockUserAgent('cid=100012789 device_id=34f2562a-51d5-360f-9699-ab6482f7e8c9device_id Mozilla/5.0 (Linux; Android 10; ELS-AN00 Build/HUAWEIELS-AN00; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.120 MQQBrowser/6.2 TBS/045714 Mobile Safari/537.36')

    expect(isMerchantApp()).toBeTruthy();

    expect(isAndroid()).toBeTruthy();

    expect(isWeiXinMP()).toBeFalsy();

    expect(isIos()).toBeFalsy();
  })

  it('Set the current environment as ios merchant app', () => {
    mockUserAgent('wk=1 cid=100012797 Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148')

    expect(isMerchantApp()).toBeTruthy();

    expect(isIos()).toBeTruthy();

    expect(isAndroid()).toBeFalsy();

    expect(isWeiXinMP()).toBeFalsy();
  })




});
