// 判断是否是日期类型
export const isDate = (val: any): val is Date => {
  return Object.prototype.toString.call(val) === '[object Date]'
}

// 判断是否是普通对象
export const isPlainObject = (val: any): val is Object => {
  return Object.prototype.toString.call(val) === '[object Object]'
}
