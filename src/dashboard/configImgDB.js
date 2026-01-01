import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';



//Firebase configuration 
const firebaseConfig2 = {
  apiKey: "AIzaSyBMAJpjmWWFey8MugqXKoA6K083R-zk5X8",
  authDomain: "imageuploaddb-3de21.firebaseapp.com",
  projectId: "imageuploaddb-3de21",
  storageBucket: "imageuploaddb-3de21.appspot.com",
  messagingSenderId: "211606057678",
  appId: "1:211606057678:web:271e774b607cc7dc51169f"
};




  // Initialize Firebase
  const app = initializeApp(firebaseConfig2, 'appA');
  export const imageDb = getStorage(app)

