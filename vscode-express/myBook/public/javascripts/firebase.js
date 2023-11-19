import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js'
const firebaseConfig = {
  apiKey: 'AIzaSyATfx1b1yCgIlUzKrkjdES25MUtYqgTihI',
  authDomain: 'mybook2-70005.firebaseapp.com',
  projectId: 'mybook2-70005',
  storageBucket: 'mybook2-70005.appspot.com',
  messagingSenderId: '642271234688',
  appId: '1:642271234688:web:3ff67d098fc78f6ba7b465',
}

// Initialize Firebase
// API 받아올 때 export 해야하는 것 확인 필요!!
export const app = initializeApp(firebaseConfig)
