// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLrP1wudElmZbNbMig08-xII9rpbYiwXQ",
  authDomain: "twitter-clone-auth-a390f.firebaseapp.com",
  projectId: "twitter-clone-auth-a390f",
  storageBucket: "twitter-clone-auth-a390f.appspot.com",
  messagingSenderId: "518137795657",
  appId: "1:518137795657:web:9d0d800008d87a5a2cdb98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
      

