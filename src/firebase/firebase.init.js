// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYAFOCCDP7T91vXbwxJQFx3xy1smyKxvQ",
    authDomain: "sport-news-237d3.firebaseapp.com",
    projectId: "sport-news-237d3",
    storageBucket: "sport-news-237d3.firebasestorage.app",
    messagingSenderId: "273063735612",
    appId: "1:273063735612:web:ac374c07e3629fb979ee39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)