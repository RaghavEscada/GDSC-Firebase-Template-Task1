// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2g-2C-7uE6s8fdS3cqaAB9SCpSiMMf1Q",
  authDomain: "loginform-1a8b2.firebaseapp.com",
  databaseURL: "https://loginform-1a8b2-default-rtdb.firebaseio.com",
  projectId: "loginform-1a8b2",
  storageBucket: "loginform-1a8b2.appspot.com",
  messagingSenderId: "627951295756",
  appId: "1:627951295756:web:d9efe28b3408e51a1ffd29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getDatabase(app);

document.getElementById("submit").addEventListener('click',function(e)
{
   set(ref(db, 'user/' + document.getElementById("name").value),{


    name : document.getElementById("name").value,
    rollNumber : document.getElementById("rollNumber").value,
    password : document.getElementById("password").value,


   });


alert("Firebase winterhacks 2024 task sucessfully loaded!")
   
})