export {}

class Greeter {
    greeting: string;
    constructor(message: string){
        this.greeting = message
    }
    greet(){
        return `Hello,${this.greeting}!`
    }
}

let greeter = new Greeter("World")
// console.log(greeter.greet())


// 继承
class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}`)
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name) }
    move(distanceInMeters = 5) {
        console.log("Slithering...")
        super.move(distanceInMeters)
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name) }
    move(distanceInMeters = 45) {
        console.log("Galloping...")
        super.move(distanceInMeters)
    }
}

let sam = new Snake("sam")
let tom = new Horse("tom")
// sam.move(222)
// tom.move(111)

// 参数属性：public private protected readonly


// 存取器
let passcode = "secret passcode1"
class Employee {
    private _fullName: string

    get fullName(): string{
        return this._fullName
    }

    set fullName(newName: string) {
        if(passcode && passcode === "secret passcode") {
            this._fullName = newName
        }
        else {
            console.log("Error: unauthorized update of employee!")
        }
    }
}
let employee = new Employee()
employee.fullName = 'xiaofang'
console.log(employee.fullName)


// 静态属性 static 这些属性存在于类本身上面而不是类的实例上


// 抽象类  抽象类中的抽象方法不包含具体实现并且必须在派生类中实现