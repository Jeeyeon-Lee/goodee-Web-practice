// null 값이 존재하지 않는다
let age = null;
console.log(age);//null
//3초후에 함수가 실행된다.
//setTimeout함수 - 시간관리함 - 타임라인을 변경할 때 사용함- 기억
setTimeout(function(){
  age = 80;
  console.log(age);
},3000)