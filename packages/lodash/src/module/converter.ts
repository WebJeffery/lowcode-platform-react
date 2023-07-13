export interface ConverterOptions {
  // 是否序通过 `JSON.stringify` 列化 `value` 数据
  isSerialize?: boolean;
  // 是否通过 encodeURIComponent / decodeURIComponent 转义
  isEscape?: boolean;
  // 是否通过 Base64 编码
  isBase64?: boolean;
}

export default {
  /**
   * 反序列化
   * @param value 待反序列字符串
   * @returns
   */
  deserialization<T = string>(value: string, options: ConverterOptions): null | T {
    try {
      let result: string = value;

      if (options.isBase64) {
        result = window.atob(result);
      }

      if (options.isEscape) {
        result = decodeURIComponent(result);
      }

      return options.isSerialize ? JSON.parse(result) : result;
    } catch {
      return null;
    }
  },

  /**
   * 序列化
   * @param value 待序列字符串
   * @returns
   */
  serializeValue(value: unknown, options: ConverterOptions): string {
    let result: string;

    if (options.isSerialize) {
      result = JSON.stringify(value);
    } else {
      result = `${value}`;
    }

    if (options.isEscape) {
      result = encodeURIComponent(result);
    }

    if (options.isBase64) {
      result = window.btoa(result);
    }

    return result;
  }
};
