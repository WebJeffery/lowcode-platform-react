import { isNull } from './is';

type Target = '_blank' | '_self' | '_parent' | '_top';
/**
 * 将base64转换为文件对象
 * @param base64 base64格式的编码
 * @param getFile 获得 File 的结果吗
 */
export const base64ToFile = (base64: string): File | null => {
  const [typeStr, atobStr] = base64.split(',');
  const matchRst = typeStr.match(/:(.*?);/);
  // 判断正则结果 退出
  if (isNull(matchRst)) return null;

  const mime = matchRst[1];
  const bstr = atob(atobStr);
  let n = bstr.length;
  const u8Arr = new Uint8Array(n);
  while (n) {
    n -= 1;
    u8Arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8Arr], `${mime.replace('/', '.')}`, { type: mime });
};

/**
 * @desc 文件地址下载
 * @param {string} url 文件下载地址
 * @param {string} target 在何处打开链接文档
 */
export const urlOpen = (url: string, target: Target = '_self'): void => {
  const a = document.createElement('a');
  a.href = url;
  a.target = target;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
