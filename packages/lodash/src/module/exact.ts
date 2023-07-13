import { isStrNum } from './is';

/**
 * 加法函数（精度丢失问题）
 * @param a 加数
 * @param b 加数
 * @param isFloat 返回结果类型是否转为浮点数
 * @returns 合
 */
export const add = (a: string | number, b: string | number): string => {
  const A = isStrNum(String(a)) ? a : 0;
  const B = isStrNum(String(b)) ? b : 0;

  // 整数部分
  const intBitA = String(A).split('.')[0];
  const intBitB = String(B).split('.')[0];

  // 整数部分的长度
  const intBitALen = intBitA.length;
  const intBitBLen = intBitB.length;

  // 小数部分的长度
  const floBitALen = String(A).split('.')[1]?.length || 0;
  const floBitBLen = String(B).split('.')[1]?.length || 0;

  // 小数部分
  const floBitA = floBitALen ? String(A).split('.')[1] : '0';
  const floBitB = floBitBLen ? String(B).split('.')[1] : '0';

  // 获取整数部分和小数部分长度最大值
  const maxIntLen = Math.max(intBitALen, intBitBLen);
  const maxFloLen = Math.max(floBitALen, floBitBLen);

  // 整数位补0操作
  const addendIntA = intBitA.padStart(maxIntLen, '0');
  const addendIntB = intBitB.padStart(maxIntLen, '0');

  // 小数位补0操作
  const addendFloA = floBitA.padEnd(maxFloLen, '0');
  const addendFloB = floBitB.padEnd(maxFloLen, '0');

  // 合并整数部分和小数部分
  const addA = addendIntA + addendFloA;
  const addB = addendIntB + addendFloB;

  // 结果
  let sum = '';
  // 进位
  let next = 0;
  // 加数长度
  const maxLen = addA.length;

  // 从个位开始将每一组字符串转为数字相加再加上进位并保存进位
  for (let i = maxLen - 1; i >= 0; i -= 1) {
    const acc = Number(addA[i]) + Number(addB[i]) + next;
    next = Math.floor(acc / 10);
    sum = (acc % 10) + sum;
  }
  // 是否有进位1
  if (next === 1) sum = `1${sum}`;
  // 加入小数点
  sum = `${sum.slice(0, maxIntLen + next)}.${sum.slice(maxIntLen + next)}`;
  // 如果两个数都是整数, 则去掉小数点
  if (!floBitALen && !floBitBLen) sum = sum.slice(0, -2);
  if (!intBitA && !intBitB) sum = `0${sum}`;

  return sum;
};

/**
 * 减法函数（精度丢失问题）
 * @param a 被减数
 * @param b 减数
 * @returns 差
 */
export const subtract = (a: string | number, b: string | number): number => {
  const A = isStrNum(String(a)) ? Number(a) : 0;
  const B = isStrNum(String(b)) ? Number(b) : 0;

  const rA: number = String(A).split('.')[1]?.length || 0;
  const rB: number = String(B).split('.')[1]?.length || 0;

  const m = 10 ** Math.max(rA, rB);
  const n = rA > rB ? rA : rB;

  return Number(((A * m - B * m) / m).toFixed(n));
};

/**
 * 除法函数（精度丢失问题）
 * @param a 被除数
 * @param b 除数
 * @returns 商
 */
export const divide = (a: string | number, b: string | number): number => {
  const A = isStrNum(String(a)) ? Number(a) : 0;
  const B = isStrNum(String(b)) ? Number(b) : 1;

  const rA: number = String(A).split('.')[1]?.length || 0;
  const rB: number = String(B).split('.')[1]?.length || 0;

  const tA = Number(String(A).replace('.', ''));
  const tB = Number(String(B).replace('.', ''));

  return (tA / tB) * 10 ** (rB - rA);
};

/**
 * 除法函数（精度丢失问题）
 * @param a 因数
 * @param b 因数
 * @returns 积
 */
export const multiply = (a: string | number, b: string | number): number => {
  const A = isStrNum(String(a)) ? Number(a) : 0;
  const B = isStrNum(String(b)) ? Number(b) : 0;

  const rA: number = String(A).split('.')[1]?.length || 0;
  const rB: number = String(B).split('.')[1]?.length || 0;

  const m = 10 ** Math.max(rA + rB);

  const tA = Number(String(A).replace('.', ''));
  const tB = Number(String(B).replace('.', ''));

  return (tA * tB) / m;
};
