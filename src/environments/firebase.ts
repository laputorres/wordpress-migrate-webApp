// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwgNfIuufftIS-aXsaf2bardOi-Pm9Nro",
  authDomain: "mi-primer-proyecto-angular.firebaseapp.com",
  projectId: "mi-primer-proyecto-angular",
  storageBucket: "mi-primer-proyecto-angular.appspot.com",
  messagingSenderId: "42610775919",
  appId: "1:42610775919:web:831ae41e707550fa2b7a9a",
  measurementId: "G-JK3VPNX0NK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);