
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcXh71TgPsVfR6I0WU3qL7CcqSxUaMo4A",
    authDomain: "mhsq-53962.firebaseapp.com",
    projectId: "mhsq-53962",
    storageBucket: "mhsq-53962.appspot.com",
    messagingSenderId: "555601625254",
    appId: "1:555601625254:web:f88106085ab2bfa387b467",
    measurementId: "G-FV8DF0584Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 일단 이거로 작업하시고 저 휴가 끝나면 정리하겠습니다.