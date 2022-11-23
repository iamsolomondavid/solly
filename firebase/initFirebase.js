// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx-TGS_htXO6uZnfEXqZsb7Oe-zejwh8Q",
  authDomain: "portfolio-d16d3.firebaseapp.com",
  projectId: "portfolio-d16d3",
  storageBucket: "portfolio-d16d3.appspot.com",
  messagingSenderId: "106439432970",
  appId: "1:106439432970:web:ee7ba29e64b1ab24cdf8f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default function initFirebase(){
 
    if (!app.length) {
        app;
        if (typeof window !== "undefined") {
          if ("measurementId" in firebaseConfig) {
                const analytics = getAnalytics(app);
                console.log('this is analytics' + analytics);
            } 
        }

    }
}