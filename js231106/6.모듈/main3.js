setTimeout(async()=> {
  const temp = await import('./module1.js')
  console.log(temp);
},3000)

/*
  자바스크립트 기본적으로 동기인데 
  만일 꼭 비동기적으로 처리를 해야할 때 setTimeout함수를 사용하세요
  async와 await 커플이다.

  Front-End : ReactJS, UI솔루션 - 클라이언트 사이드
  Back-End : 자바 - 서버사이드(지연발생-출처가 다름(CORS이슈)) - 비동기처리를 해야함 - 자바는 비동기 가능함
  그런데 자스는 불가함
  http://localhost:9000/dept/getDeptList.jsp
*/