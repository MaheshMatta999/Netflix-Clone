
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5t9gTW_aphcLNd2vUUuhEhBOPZ6ZWmgs",
  authDomain: "react-netflix-clone-7a223.firebaseapp.com",
  projectId: "react-netflix-clone-7a223",
  storageBucket: "react-netflix-clone-7a223.appspot.com",
  messagingSenderId: "1054255234142",
  appId: "1:1054255234142:web:e095b04ef336e0f40908cf",
  measurementId: "G-869MSGHM0L"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
