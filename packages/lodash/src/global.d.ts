
declare interface Window {
  // 小程序 webView  IOS 环境标识符
  __wxjs_environment?: 'miniprogram';

  // 医生端 APP 提供特有方法
  TokenNativeActionProxy?: {
    getCid: () => string,
  }
}

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

