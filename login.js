// form loading animation

const form = [...document.querySelector('.form').children];

form.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i*100);
})

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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

// // inputs
// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;

// //submit button
// const submit = document.getElementById('submit');
// submit.addEventListener('click', function (event) {
//     event.preventDefault()
//     alert(5)
// })