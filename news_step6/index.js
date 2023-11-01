// 라우터를 통한 함수호출식으로 변경
//getData-API 가져오기
//getNewsData-타이틀, 코멘츠 by id
// newsDetail-해당아이디로 교체하여 내용을 h1 으로 가져오기<)
// 해시변경시 뉴스디테일 실행, 겟뉴스데이터 실행

const ajax = new XMLHttpRequest()
const CONTENT_URL = 'https://api.hnpwa.com/v0/news/1.json'
const TITLE_URL = 'https://api.hnpwa.com/v0/news/1.json'
const container = document.getElementById('root')
const content = document.createElement('div')
const ul = document.createElement('ul')

//중복되는 부분 getData 함수로 만들기
getData = (url) => {
  ajax.open('GET', url, false)
  ajax.send()
  return JSON.parse(ajax.response)
}

//getNewsData-타이틀, 코멘츠 by id
getNewsData = () => {
  const newsList = getData(TITLE_URL)
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
}

//newsDetail-해당아이디로 교체하여 내용을 h1 으로 가져오기)
newsDetail = () => {
  const id = location.hash.substring(1)
  const ncontent = getData(CONTENT_URL.replace('@id', id))
  container.innerHTML = `
    <h1>${ncontent.title}></h1>
    <div><a href="#">목록으로</a></div>
  `
}

router = () => {
  const routerPath = location.hash
  if (routerPath === '') {
    getNewsData()
  } else {
    newsDetail()
  }
}

window.addEventListener('hashchange', router)
router()
