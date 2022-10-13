import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmh0lgTO1qtgfpRw-MMMrV-SM9RZffpcc",
  authDomain: "chatte-test.firebaseapp.com",
  projectId: "chatte-test",
  storageBucket: "chatte-test.appspot.com",
  messagingSenderId: "205993937202",
  appId: "1:205993937202:web:18d1d345b1547c60e1ef2b"
}

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };