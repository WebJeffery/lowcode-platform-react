/**
 * 获取浏览器操作系统标识
 * @returns
 */
export const ua = (): string => window.navigator.userAgent;

/**
 * @type 预期的类型
 */
type Type = 'Boolean' | 'Number' | 'String' | 'Function' | 'Error' | 'Date' | 'Object' | 'RegExp' | 'File';

const toString = (val: unknown): string => Object.prototype.toString.call(val);

/**
 * 验证数据类型
 * @param val 待检测的数据
 * @param {Type} type 预期的类型
 * @returns  true | false
 */
export const is = <T = unknown>(val: unknown, type: Type): val is T => toString(val) === `[object ${type}]`;

/**
 * 判断数据类型
 * @param val 待检测的数据
 * @returns  string 该数据的类型
 */
export const checkType = (val: unknown): string => toString(val).split(' ')[1].slice(0, -1);

/**
 * 验证数据类型不为 undefined
 * @typeParam T 待检测的数据类型
 * @param val 待检测的数据
 * @returns true | false
 */
export const isDefined = <T = unknown>(val?: T): val is T => typeof val !== 'undefined';

/**
 * 验证是否为 undefined
 * @typeParam T 待检测的数据类型
 * @param val 待检测的数据
 * @returns true | false
 */
export const isUndefined = <T = unknown>(val?: T): val is undefined => !isDefined<T>(val);

/**
 * 验证是否为 null
 * @param val 待检测的数据
 * @returns true | false
 */
export const isNull = (val: unknown): val is null => val === null;

/**
 * 验证是否为 boolean 类型
 * @param val 待检测的数据
 * @returns true | false
 */
export const isBoolean = (val: unknown): val is boolean => is<boolean>(val, 'Boolean');

/**
 * 验证是否为 string 类型
 * @param val 待检测的数据
 * @returns true | false
 */
export const isString = (val: unknown): val is string => is<string>(val, 'String');

/**
 * 验证是否为 number 类型
 * @param val 待检测的数据
 * @returns true | false
 */
export const isNumber = (val: unknown): val is number => is<number>(val, 'Number');

/**
 * 验证是否为 object 类型
 * @param val 待检测的数据
 * @returns true | false
 */
export const isObject = (val: unknown): val is Record<any, unknown> => !isNull(val) && is(val, 'Object');

/**
 * 验证是否为 function 类型
 * @param val 待检测的数据
 * @returns true | false
 */
export const isFunction = (val: unknown): val is Function => is<Function>(val, 'Function');

/**
 * 验证是否为 array 类型
 * @param val 待检测的数据
 * @returns true | false
 */
export const isArray = (val: unknown): val is Array<unknown> => Array.isArray(val);

/**
 * 验证是否是 Map 类型
 * @param val
 * @returns
 */
export const isMap = (val: unknown): val is Map<any, unknown> => val instanceof Map;

/**
 * 验证是否是 Set 类型
 * @param val
 * @returns
 */
export const isSet = (val: unknown): val is Set<any> => val instanceof Set;

/**
 * 验证是否为空数据
 * @param val 待检测的数据
 * @returns true | false
 */
export const isEmpty = <T = unknown>(val: T): boolean => {
  if (isNull(val)) {
    return true;
  }

  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (isMap(val) || isSet(val)) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return true;
};

/**
 * 验证是否字符串数字
 * @param val 待检测的数据
 * @returns true | false
 */
export const isStrNum = (val: string): boolean => /^[-+]?(\d+.?\d*|\d*.?\d+)$/.test(val);

/**
 * 验证是否匹配整数
 * @param val
 * @returns
 */
export const isInteger = (val: string | number): boolean => /^[-+]?\d+$/.test(String(val));

/**
 * 验证是否是日期类型
 * @param val
 * @returns
 */
export const isDate = (val: unknown): val is Date => is<Date>(val, 'Date');

/**
 * 验证是否是File类型
 * @param val
 * @returns
 */
export const isFile = (val: unknown): val is File => is<File>(val, 'File');

/**
 * 验证是否微信
 * @returns
 */
export const isWeiXin = (): boolean => /microMessenger/i.test(ua());

/**
 * 验证是否ios
 * @returns
 */
export const isIos = (): boolean => /iphone|ipad|ipod/i.test(ua());

/**
 * 验证是否android
 * @returns
 */
export const isAndroid = (): boolean => /android/i.test(ua());

/**
 * 验证是否是微信小程序
 * @returns
 */
export const isWeiXinMP = (): boolean =>
  (isWeiXin() && /miniprogram/i.test(ua())) || window?.__wxjs_environment === 'miniprogram';
