import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBjl0l4cj7SMKDBPyN-Tf7WC6LT9Oodv5A",
    authDomain: "clone-204ac.firebaseapp.com",
    projectId: "clone-204ac",
    storageBucket: "clone-204ac.appspot.com",
    messagingSenderId: "28639197288",
    appId: "1:28639197288:web:9a44fd1df6da1d2758e3dd"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {db,auth,provider};