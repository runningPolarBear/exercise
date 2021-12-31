export {}

// 可选属性
interface LabelledValue {
    size?: number,
    label?: string
}

function printLabel(labelledObj: LabelledValue){
    if(labelledObj.label){
        console.log(labelledObj.label)
    }
}

let myObj = {
    size: 10,
    label: "Size 10 Object"
}

// printLabel(myObj)


// 只读属性
interface Point {
    readonly x: number,
    readonly y: number,
    [propName: string]: any;
}
let p1: Point = {
    x:1,
    y:100
}
// p1.x = 100


// 描述函数类型
interface SearchFunc {
    (source: string, sunString: string): boolean
}
let mySearch: SearchFunc
mySearch = function(source: string, subString: string){
    return true
}

// 类型实现接口
interface ClockInterface{
    currentTime: Date
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor() {
        
    }
}

// 继承接口
interface Shape {
    color: string
}

interface Square extends Shape{
    sideLength: number
}
let square = <Square>{}
square.color = 'green'
square.sideLength = 4321432


// 接口继承类
class Control {
    private state: any
}
interface SelectableControl extends Control {
    select(): void
}