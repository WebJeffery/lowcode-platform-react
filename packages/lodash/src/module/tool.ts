import { isArray, isStrNum, isNull } from './is';

/**
 * 深度数组扁平化
 * @param arr
 * @returns
 */
export const deepFlatten = <T = string | number | boolean>(arr: Array<T | T[]>): T[] =>
  Array.prototype.concat(...arr.map((v) => (isArray(v) ? deepFlatten(v) : v)));

/**
 * 数字数组交集
 * @param arr1
 * @param arr2
 * @returns
 */
export const similarity = (arr1: number[], arr2: number[]): number[] => arr1.filter((v) => arr2.includes(v));

/**
 * 获取图片尺寸大小
 * @param file
 * @returns
 */
export const loadImageSize = (file: File): Promise<{ width: number; height: number }> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      // 加载图片获取图片真实宽度和高度
      const image = new Image();

      image.addEventListener('load', () => resolve({ width: image.width, height: image.height }));

      image.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
};

/**
 * 获取url参数
 * @param q 待查询的值
 * @returns 返回查找的结果
 */
export const getUrlParam = (q: string): string => {
  const result = window.location.search.match(new RegExp(`(\\?|&)${q}=([^&]*)(&|$)`));

  return isNull(result) ? '' : decodeURIComponent(result[2]);
};

/**
 * 数字千位符格式化
 * @param num 待格式化数字
 * @returns
 */
export const thousands = (num: number | string): string => {
  if (!isStrNum(String(num))) return '';

  return Number(num).toLocaleString();
};
