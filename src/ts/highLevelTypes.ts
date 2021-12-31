export {}

// 接口vs类型别名
type Alias = {
  num: number
}

interface Interface {
  num: number
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;