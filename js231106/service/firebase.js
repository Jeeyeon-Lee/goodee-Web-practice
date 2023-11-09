import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
//import { initializeApp } from "firebase/app";로컬에 설치되어 있을 때 사용하기
//type=module 기억 -  모듈지원 - 자바스크립트 쪼개기 가능함
//여기 생성된 객체는 어떻게 사용되죠?
const firebaseConfig = {//객체 - 키:값
  apiKey: "AIzaSyAoa3Gw7USHw5sB81QhX3vTUyUuyhXe3nc",
  authDomain: "gd20230918-77f71.firebaseapp.com",
  projectId: "gd20230918-77f71",
  storageBucket: "gd20230918-77f71.appspot.com",
  messagingSenderId: "748652631716",
  appId: "1:748652631716:web:df5be4b91b30d1d98c3831"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);//초기화 - 인증 - 서버측 요청 - 응답(토큰값쥔다)
