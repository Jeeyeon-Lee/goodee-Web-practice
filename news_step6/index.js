const ajax = new XMLHttpRequest()
const CONTENT_URL = 'https://api.hnpwa.com/v0/news/1.json'
const TITLE_URL = 'https://api.hnpwa.com/v0/news/1.json'
const container = document.getElementById('root')
const content = document.createElement('div')

//중복되는 부분 getData 함수로 만들기
getData = (url) => {
  ajax.open('GET', url, false)
  ajax.send()
  return JSON.parse(ajax.response)
}
//함수로 변경
const newsList = getData(TITLE_URL)
console.log(newsList)
const ul = document.createElement('ul')

window.addEventListener('hashchange', () => {
  //hash값 가져올 건데, 첫자리빼고 가져오는거야(# 빼고)
  const id = location.hash.substring(1)
  const ncontent = getData(CONTENT_URL.replace('@id', id))
  const title = document.createElement('h1')
  title.innerHTML = ncontent.title
  content.appendChild(title)
})

// for문 배열로 만들어서 처리하기 push, join 사용
// 배열로 담을 상수 선언 & 한번만 실행되어야하는건('<ul>' '</ul>') for문 밖에 작성 필요
const newsPage = []
newsPage.push('<ul>')
for (let i = 0; i < newsList.length; i++) {
  newsPage.push(`
    <li>
      <a href="#${newsList[i].id}">
      ${newsList[i].title},(😍${newsList[i].comments_count})
      </a>
      </li>
  `)
}
newsPage.push('</ul>')
container.innerHTML = newsPage.join('')
