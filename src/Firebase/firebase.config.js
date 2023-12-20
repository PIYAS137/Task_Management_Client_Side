// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG_M6aVW2cF8MzbyOTTp2ztH8FnkB6xHI",
  authDomain: "task-management-ad32a.firebaseapp.com",
  projectId: "task-management-ad32a",
  storageBucket: "task-management-ad32a.appspot.com",
  messagingSenderId: "572613992454",
  appId: "1:572613992454:web:c91411443eef7ec1eea387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;