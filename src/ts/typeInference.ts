export {}

let x = 3

let y = [1, '432', null]
y.push(null)
// y.push(true)

// 上下文类型
window.onmousedown = function(mouseEvent) {
  mouseEvent.clientX
  // console.log(mouseEvent.fdsafdsa)
}