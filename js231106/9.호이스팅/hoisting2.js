const btns = document.querySelectorAll('ul li')
console.log(typeof btns)
console.log(btns.length)

//var는 for문을 돈 뒤 전변의 자리에 저장이 되는 호이스팅 이슈 발생
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', (event) => {
//     console.log(event.target)
//     console.log('var' + i)
//   })
// }

// 1. 지변처럼 for문 안에서만 도는 let으로 생성
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', (event) => {
//     console.log(event.target)
//     console.log('let' + i)
//   })
// }

//  2. 즉시실행함수로 작성
for (var i = 0; i < btns.length; i++) {
  ;((index) => {
    btns[index].addEventListener('click', (event) => {
      console.log(index)
    })
  })(i) //즉시실행함수 처리한 부분
} //end of for
