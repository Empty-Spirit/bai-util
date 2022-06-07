/*
 * @Author       : zzx 19957296561@163.com
 * @Date         : 2022-06-07 17:31:08
 * @LastEditors  : zzx 19957296561@163.com
 * @LastEditTime : 2022-06-07 17:31:10
 * @FilePath     : \npm\bai-util\src\index.js
 * @Description  : 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function arrayCheck(arr) {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        return arr;
    } else {
        return [];
    }
}

/** 数组相关工具类 */
export class ArrayUtils {

    static arrayCheck(arr) {
        return arrayCheck(arr);
    }
}