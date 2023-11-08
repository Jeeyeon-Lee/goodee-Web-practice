// 고차함수 - 반환형으로 함수사용할 수 있다
// 고차함수는 리턴에 오는 값이 함수이니까 이것을 호출하려면
//할당연산자로 일단 받아(5~7)내고 - [Function:익명]
const sayHello = () => {
  return function () {
    console.log('hello')
  }
}

console.log(sayHello)
const myFunc = sayHello()
console.log(myFunc)
myFunc()
hap = (a, b) => {
  return a + b
}
const add = hap
console.log(add)
console.log(hap)
