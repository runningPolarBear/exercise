export {}

function identity<T>(arg: T[]):T[] {
  arg.length
  return arg
}

// 泛型类
class GenericNumber<T> {
  val: T
  add: (x: T, y: T) => T
}
