const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
// 전송방식, URL, 동기여부
ajax.open("GET", NEWS_URL, false);
// 화면에 보내기
ajax.send();
//API에서 가져온 JSON파일을 변환하여 변수 newsList에 저장
const newsList = JSON.parse(ajax.response);
//콘솔창에 로그로 리스트 불러오기
console.log(newsList);
//ul이라는 변수로 생성된 ul 넣기(몇개나? news리스트의 숫자만큼 li 생성)
const ul = document.createElement("ul");
for(let i = 0; i < newsList.length; i++){
    const li = document.createElement("li");
    //생성된 리스트는 제목으로 텍스트 노드를 만들거야
    li.innerHTML = newsList[i].title;
    //li는 ul의 자식으로 포함시켜
    ul.appendChild(li);
}
//ul은 root라는 id를 가진 요소의 자식으로 포함시켜
document.getElementById("root").appendChild(ul);

//# sourceMappingURL=index.d04a5baa.js.map
