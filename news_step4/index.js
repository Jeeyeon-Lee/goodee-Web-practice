const CONTENT_URL = 'https://api.hnpwa.com/v0/news/1.json'
const TITLE_URL = 'https://api.hnpwa.com/v0/news/1.json'
const container = document.getElementById('root')
const content = document.createElement('div')
const ajax = new XMLHttpRequest()

//중복되는 부분 getData 함수로 만들기
//XMLHttpRequest의 함수 open, send 사용 가능
//리턴값은 JSON 형식으로 가져온 파일
getData = (url) => {
  ajax.open('GET', url, false)
  ajax.send()
  return JSON.parse(ajax.response)
}

//함수로 처리
const newsList = getData(TITLE_URL)
console.log(newsList)
const ul = document.createElement('ul')

//<ul><div><li><a href></a></li></div></ul>
for (let i = 0; i < newsList.length; i++) {
  const div = document.createElement('div')
  div.innerHTML = `
    <li>
      <a href "#${newsList[i].id}">
        ${newsList[i].title}(💕${newsList[i].comments_count})
      </a>
    </li>
  `
  ul.appendChild(div.firstElementChild)
}

//해쉬값이 변하면 실행되는 이벤트 헨들러 -> 따라서 해시값을 넣어줘야함.
window.addEventListener('hashchange', () => {
  //hash값 가져올 건데, 첫자리빼고 가져오는거야(# 빼고)
  const id = location.hash.substring(1)
  const ncontent = getData(CONTENT_URL.replace('@id', id))
  const title = document.createElement('h1')
  title.innerHTML = ncontent.title
  content.appendChild(title)
})

//ul은 root라는 id를 가진 요소의 자식으로 포함시켜
container.appendChild(ul)
container.appendChild(content)
