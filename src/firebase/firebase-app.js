// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0pV73eKP9eYK7kLzz7SNTjY0s4AGm2MA",
  authDomain: "thanksbinh-54d74.firebaseapp.com",
  projectId: "thanksbinh-54d74",
  storageBucket: "thanksbinh-54d74.appspot.com",
  messagingSenderId: "205494484724",
  appId: "1:205494484724:web:5a7929c57c5e0d2d2368a1",
  measurementId: "G-7201E7GZKG"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

export { app, analytics };