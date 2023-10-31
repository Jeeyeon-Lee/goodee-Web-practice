const ajax = new XMLHttpRequest()
const CONTENT_URL = 'https://api.hnpwa.com/v0/news/1.json'
const TITLE_URL = 'https://api.hnpwa.com/v0/news/1.json'

const container = document.getElementById('root')
const content = document.createElement('div')
// 전송방식, URL, 동기여부
ajax.open('GET', CONTENT_URL, false)
// 화면에 보내기
ajax.send()
//API에서 가져온 JSON파일을 변환하여 변수 newsList에 저장
const newsList = JSON.parse(ajax.response)
//콘솔창에 로그로 리스트 불러오기
console.log(newsList)
//ul이라는 변수로 생성된 ul 넣기(몇개나? news리스트의 숫자만큼 li 생성)
const ul = document.createElement('ul')

//해시값 (뉴스 아이디 변경시) 인터셉트 id값 치환하는 함수
window.addEventListener('hashchange', () => {
  //hash값 가져올 건데, 첫자리빼고 가져오는거야(# 빼고)
  const id = location.hash.substring(1)
  ajax.open('GET', CONTENT_URL.replace('@id', id), false)
  ajax.send()

  //ncontent는 결과값을 저장해줘
  const ncontent = JSON.parse(ajax.response)
  //타이틀을 h1으로 만들어줘
  const title = document.createElement('h1')
  //제목에 JSON으로 가져온 내용을 넣어줘??
  title.innerHTML = ncontent.title
  //컨텐트에 타이틀 넣어줘
  content.appendChild(title)
})

for (let i = 0; i < newsList.length; i++) {
  const li = document.createElement('li')
  const a = document.createElement('a')
  a.href = `#${newsList[i].id}`
  a.innerHTML = `${newsList[i].title}(💕${newsList[i].comments_count})`
  //생성된 리스트는 제목으로 텍스트 노드를 만들거야
  //li는 ul의 자식으로 포함시켜
  li.appendChild(a)
  ul.appendChild(li)
}
//ul은 root라는 id를 가진 요소의 자식으로 포함시켜
container.appendChild(ul)
container.appendChild(content)
