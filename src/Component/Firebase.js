
import Firebase from "firebase/compat/app";
import "firebase/compat/database"


const firebaseConfig = {
  apiKey: "AIzaSyDYluPrk4yH9i6CG90YnCJi_OdP0l8EX84",
  authDomain: "portfolio-bd832.firebaseapp.com",
  databaseURL: "https://portfolio-bd832-default-rtdb.firebaseio.com",
  projectId: "portfolio-bd832",
  storageBucket: "portfolio-bd832.appspot.com",
  messagingSenderId: "654761662190",
  appId: "1:654761662190:web:b8bf2345a74c641d3505ff"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);


export default Firebase;