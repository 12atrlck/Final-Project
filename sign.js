// form loading animation

const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*100);
})

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyADgqCVcG9idbifCXWD5DlncI1kpjPDB1M",
//   authDomain: "final-project-7a57b.firebaseapp.com",
//   projectId: "final-project-7a57b",
//   storageBucket: "final-project-7a57b.appspot.com",
//   messagingSenderId: "42698885849",
//   appId: "1:42698885849:web:7e5cbf20930cb487d9ccc8",
//   measurementId: "G-EE9VJ04NY8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Initialize varables
// const auth = firebase.auth()
// const database = firebase.database()

// // set up our register function
// function register() {
//     //get all input field
//     full_name = document.getElementById('name').value
//     email = document.getElementById('email').value
//     password = document.getElementById('password').value
// }

//  //validate input fields
//  if (validate_email(email) == false || validate_password(password) == false) {
//     return

//  }
//  if (validate_field(full_name))

// function validate_email(email){
//    expression = /^[^@]+@\w+(\.\w+)+\w$/
//     if (expression.test(email) == true){
//         //email is good
//         return true
//     } else {
//         // email is not good 
//         return false
//     }
// }

// function validate_password(password) {
//     // firebase only accepts lengths greater than 6
//     if (password < 6){
//         return false
//     } else{
//         return true
//     }
// }

// function validate_field(field) {
//     if (field == null) {
//         return false
//     } 
    
//     if (field.length <= 0){
//         return false
//     }else {
//         return true
//     }
// }