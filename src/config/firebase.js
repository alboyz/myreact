import firebase from "firebase";

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBVqzLag4TOd-d5_KSuUA6h7mgbCTXo8og",
    authDomain: "in-depth-react-62ebd.firebaseapp.com",
    databaseURL: "https://in-depth-react-62ebd.firebaseio.com",
    projectId: "in-depth-react-62ebd",
    storageBucket: "in-depth-react-62ebd.appspot.com",
    messagingSenderId: "93481120092",
    appId: "1:93481120092:web:0c9377c3b9ebbc57711199"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;