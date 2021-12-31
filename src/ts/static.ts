export {}
// boolean、数字、字符串、数组、元组、枚举、Any、void、Null、undefined、Never、Object，共12种

// 字符串
let isDone: boolean = true

// 数组
// let list: number[]  = [1,2,3];
let list: Array<number> =[1,2,3]
// list.push('3')

// 元组 表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x: [string, number];
x = ['hello', 10];
// x = [6, 10];


// 枚举
enum Color { Red, Green = 8, Blue = 7 };
let c: Color = Color.Blue;
// console.log(c)
// console.log(Color.Blue === 7)


// 类型断言
let someVallue: any = '666';
// let strLength: number = (<string>someVallue).length;
let strLength: number = (someVallue as string).length;
console.log(strLength)