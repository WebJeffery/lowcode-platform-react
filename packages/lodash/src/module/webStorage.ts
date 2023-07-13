import { isDate, isNull, isNumber } from './is';
import converter, { ConverterOptions } from './converter';

// 'localStorage' | 'sessionStorage' 数据格式
interface StorageValue<T = unknown> {
  // 数据
  value: T;
  // 过期时间 时间戳
  expires?: number;
}

// 'localStorage' | 'sessionStorage' 配置
interface StorageOptions extends ConverterOptions {
  // 过期时间
  expires?: Date | number;
}

export default class WebStorage {
  private storage: Storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  /**
   * 从 Storage 获取数据
   * @param key 键值
   * @returns
   */
  getItem<T>(key: string, options: ConverterOptions = {}): T | null {
    const val = this.storage.getItem(key);

    if (isNull(val)) return null;

    const configs = { isSerialize: true, isEscape: false, ...options };

    const result = converter.deserialization<StorageValue<T>>(val, configs);

    if (isNull(result)) return null;

    const { value, expires } = result;

    if (!isNumber(expires) || expires - Date.now() > 0) return value;

    this.removeItem(key);

    return null;
  }

  /**
   * 保存数据到 Storage
   * @param {string} key 键值
   * @param {unknown} value 待保存的数据
   * @param {StorageOptions} options 配置
   */
  setItem(key: string, value: unknown, options: StorageOptions = {}): void {
    const data: StorageValue = { value };

    if (isDate(options.expires)) {
      data.expires = options.expires.getTime();
    } else if (isNumber(options.expires)) {
      data.expires = new Date(Date.now() + options.expires * 1000).getTime();
    }

    const configs = { isSerialize: true, isEscape: false, ...options };

    this.storage.setItem(key, converter.serializeValue(data, configs));
  }

  /**
   * 从 Storage 删除对应的值
   * @param key 键值
   */
  removeItem(key: string): void {
    this.storage.removeItem(key);
  }
}
