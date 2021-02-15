import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADYrvyv1PgtjWr_3DgZITBLMc05fSyDTg",
  authDomain: "linkedin-app-react.firebaseapp.com",
  projectId: "linkedin-app-react",
  storageBucket: "linkedin-app-react.appspot.com",
  messagingSenderId: "351466352926",
  appId: "1:351466352926:web:bb8fa3b38dafde5171590f",
  measurementId: "G-X5R1DWEYL2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
