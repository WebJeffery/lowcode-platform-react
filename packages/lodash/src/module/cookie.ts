/* eslint-disable class-methods-use-this */
import { isString, isDate, isNumber } from './is';
import converter, { ConverterOptions } from './converter';

// 'cookie' 配置
interface CookieOptions extends ConverterOptions {
  // 指定了一个域 (例如 'example.com'， 'subdomain.example.com')
  domain?: string | undefined;
  // 指定一个路径 (例如 '/', '/mydir')
  path?: string;
  // 过期时间
  expires?: Date | number;
}

export default class WebCookie {
  /**
   * 从 cookie 获取数据
   * @param {string} name
   * @param {Deserialization} options
   * @returns {null | T | string}
   */
  getItem<T>(name: string, options: ConverterOptions = {}): null | T {
    const cookies = document.cookie;

    const key = name.replace(/[-.+*]/g, '\\$&');

    const regexp = new RegExp(`(?:(?:^|.*;)\\s*${key}\\s*\\=\\s*([^;]*).*$)|^.*$`);

    const value = cookies.replace(regexp, '$1');

    const configs = { isEscape: true, isBase64: true, isSerialize: false, ...options };

    return converter.deserialization<T>(value, configs);
  }

  /**
   * 保存数据到 cookie
   * @param {string} key 键值
   * @param {unknown} value 待保存的数据
   * @param {CookieOptions} options 配置
   */
  setItem(key: string, value: unknown, options: CookieOptions = {}): void {
    const configs = { isEscape: true, isBase64: true, isSerialize: false, ...options };

    let cookie = `${key}=${converter.serializeValue(value, configs)};`;

    if (isString(options.domain)) {
      cookie += `domain=${options.domain};`;
    }

    cookie += `path=${isString(options.path) ? options.path : '/'};`;

    if (isDate(options.expires)) {
      cookie += `expires=${options.expires.toUTCString()};`;
    } else if (isNumber(options.expires)) {
      cookie += `expires=${new Date(Date.now() + options.expires * 1000).toUTCString()};`;
    }

    document.cookie = cookie;
  }

  /**
   * 从 cookie 删除对应的值
   * @param key 键值
   */
  removeItem(key: string): void {
    this.setItem(key, '', { expires: -1 });
  }
}
