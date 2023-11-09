import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
class AuthLogic {
  constructor() {
    this.auth = getAuth();
    this.gitProvider = new GithubAuthProvider();
    this.googleProvider = new GoogleAuthProvider();
  }
  getUserAuth = () => {
    return this.auth;
  };
  getGoogleAuthProvider = () => {
    return this.googleProvider;
  };
} //end of AuthLogic
export default AuthLogic;

export const logOut = (auth) =>{
  return new Promise((resolve, reject)=>{
    auth.signOut().catch(e=> reject(alert(e+":로그아웃 에러")))
    //원서비스에서는 세션에서 관장해야 한다 - 구글 서버측에서 담당 -> signOut
    localStorage.removeItem('uid');//uid를 쥐고 있다는 건 구글 서버로 부터 정상적으로 토큰을 받았고 그결과 uid갖게됨
    localStorage.removeItem('displayName');
    localStorage.removeItem('email');
    resolve();
  })
} 

export const loginGoogle = (auth, googleProvider) => {
  console.log('loginGoogle호출 성공');
  console.log(googleProvider);
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result);//object Object - 안보임 - uid, displayName-realname, email
      console.log(JSON.stringify(result));
      const user = result.user;
      localStorage.setItem("uid", user.uid);
      localStorage.setItem("displayName", user['displayName']);
      localStorage.setItem('email', user.email);
      resolve(user)
    }).catch((error) => reject(error));
  });
}; //end of loginGoogle
//파이어베이스 인증에 등록해둔 이멜과 비번으로 로그인하기
export const loginEmail = (params) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, googleProvider)
      .then((result) => {})
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });
}; //end of loginEmail
export const loginKakao = (params) => {
  return new Promise((resolve, reject) => {
    try {
      const response = axios({
        method: 'get',
        url: '카카오토큰을 받아올 URL주소 -카카오개발자 센터 긁어옴',
        params: params,
      });
      console.log(response);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
}; //end of loginKakao
