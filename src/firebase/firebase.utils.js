import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD9-aw7qL76Kg0ecTwJ1EA-BRH6umNX7J8",
    authDomain: "crwn-db-46053.firebaseapp.com",
    databaseURL: "https://crwn-db-46053.firebaseio.com",
    projectId: "crwn-db-46053",
    storageBucket: "crwn-db-46053.appspot.com",
    messagingSenderId: "79431689071",
    appId: "1:79431689071:web:bcc3d8da92f1d01bd43e9a"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;