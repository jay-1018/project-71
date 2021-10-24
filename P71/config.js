import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAcGwE_JpM9vN34cpLgXxig0d0Ioh00ajA",
    authDomain: "e-ride-project.firebaseapp.com",
    projectId: "e-ride-project",
    storageBucket: "e-ride-project.appspot.com",
    messagingSenderId: "346248593019",
    appId: "1:346248593019:web:f1e4fb9ec1cd3d33422cde"
  };




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


