import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAJ_60R-SF6jmqVy0HqWq0tTqa-uaHrjwU",
    authDomain: "registration-db4ab.firebaseapp.com",
    databaseURL: "https://registration-db4ab.firebaseio.com",
    projectId: "registration-db4ab",
    storageBucket: "registration-db4ab.appspot.com",
    messagingSenderId: "803394567953",
    appId: "1:803394567953:web:cf2e8afe1d790ef02e16b0"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;