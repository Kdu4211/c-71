import firebase from "firebase";
require("@firebase/firestore");

// var firebaseConfig = {

  const firebaseConfig = {
    apiKey: "AIzaSyAjAmVMTECKZ5pVVZ5SYlSm2YFTHh2mFMs",
    authDomain: "c-71-b21f6.firebaseapp.com",
    databaseURL: "https://c-71-b21f6-default-rtdb.firebaseio.com",
    projectId: "c-71-b21f6",
    storageBucket: "c-71-b21f6.appspot.com",
    messagingSenderId: "314499181891",
    appId: "1:314499181891:web:d2c163b67d10d205c453f6"
  };
  
// };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
