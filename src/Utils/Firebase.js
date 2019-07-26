import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC3SlLV8XD_UKn-dLW3vYu3gMPXHCb6hu8",
  authDomain: "kaohsiungultimate-fdc8a.firebaseapp.com",
  databaseURL: "https://kaohsiungultimate-fdc8a.firebaseio.com",
  projectId: "kaohsiungultimate-fdc8a",
  storageBucket: "",
  messagingSenderId: "235363445855",
  appId: "1:235363445855:web:05b3f5752389a7c2"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;