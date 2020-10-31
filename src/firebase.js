// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDu-UZU-RdgdtLKs7EwoZz-tYpAyTJJ6hk",
    authDomain: "whats-app-clone-5121f.firebaseapp.com",
    databaseURL: "https://whats-app-clone-5121f.firebaseio.com",
    projectId: "whats-app-clone-5121f",
    storageBucket: "whats-app-clone-5121f.appspot.com",
    messagingSenderId: "990557503217",
    appId: "1:990557503217:web:94a5b9085be17edb6a7350",
    measurementId: "G-CZ8JX5ZDL7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider } 
  export default db;