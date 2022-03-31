import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2V_2gZDK8PvoZa_N8euZabMjn1aUhWmU",
  authDomain: "solution-challenge-652e2.firebaseapp.com",
  projectId: "solution-challenge-652e2",
  storageBucket: "solution-challenge-652e2.appspot.com",
  messagingSenderId: "500294149279",
  appId: "1:500294149279:web:f216f7d14671112f812eaa",
  measurementId: "G-VCX2QFZEHG"
};
   
          const firebaseApp = firebase.initializeApp(firebaseConfig);

          const db = firebaseApp.firestore();
          const auth = firebase.auth();


          export {db, auth};