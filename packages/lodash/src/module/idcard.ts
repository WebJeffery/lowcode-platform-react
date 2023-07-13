const Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子
const ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值.10代表X

/**
 * 判断身份证号码为18位时最后的验证位是否正确
 * @param idCards 身份证号码数组
 * @return
 */
function isTrueValidateCodeBy18IdCard(idCard: string): boolean {
  // 得到身份证数组
  const idCards = idCard.split('');
  // 将最后位为x的验证码替换为10方便后续操作
  const checkBit = /x/i.test(idCards[17]) ? 10 : Number(idCards[17]);
  // 声明加权求和变量
  const sum = idCards.reduce((total, value, i) => total + (i === 17 ? 0 : Number(value) * Wi[i]), 0);
  // 得到验证码所位置
  return checkBit === ValideCode[sum % 11];
}

// 去掉字符串空格
function trim(str: string): string {
  return str.replace(/\s*/g, '');
}

/**
 * 判断是否为身份证号码
 * @param idCard 待判断的身份证号码
 * @returns
 */
export function isIdCard(idCard: string): boolean {
  const code = trim(idCard);
  // 出身年月日
  const dateRule = '\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)';
  // 第二代身份证 18
  const eighteen = `[1-9]\\d{5}(18|19|([23]\\d))${dateRule}\\d{3}[0-9Xx]`;
  // 第一代身份证 15
  const fifteen = `[1-9]\\d{5}${dateRule}\\d{3}`;
  // 身份证号格正则
  const codeRule = new RegExp(`(^${eighteen}$)|(^${fifteen}$)`);
  // 身份证号格式错误
  if (!codeRule.test(code)) return false;

  return code.length === 18 ? isTrueValidateCodeBy18IdCard(code) : true;
}
