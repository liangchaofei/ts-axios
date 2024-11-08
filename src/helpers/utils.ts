// 判断是否是日期类型
export const isDate = (val: any): val is Date => {
  return Object.prototype.toString.call(val) === '[object Date]'
}

// 判断是否是普通对象
export const isPlainObject = (val: any): val is Object => {
  return Object.prototype.toString.call(val) === '[object Object]'
}

// 将from对象的属性扩展到to对象上
export const extend = <T, U>(to: T, from: U): T & U => {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
