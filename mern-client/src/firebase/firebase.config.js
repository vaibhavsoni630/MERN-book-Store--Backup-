// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJx9SgWnkMIbCyalU_WUyYJTAzA3PuzlM",
  authDomain: "mern-book-store-bookbar.firebaseapp.com",
  projectId: "mern-book-store-bookbar",
  storageBucket: "mern-book-store-bookbar.appspot.com",
  messagingSenderId: "375314185532",
  appId: "1:375314185532:web:cd2bade2259cddb20d3239"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app