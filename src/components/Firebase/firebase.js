import { initializeApp } from "firebase/app";
import {getAuth,signInWithPopup} from "firebase/auth";
import {getFirestore,query,getDocs,collection,where,addDoc} from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxmQ_DlIl4816WRVRGAlj6qpdA9iGzE1k",
  authDomain: "fitness-dev-a6a25.firebaseapp.com",
  projectId:"fitness-dev-a6a25",
  storageBucket: "fitness-dev-a6a25.appspot.com",
  messagingSenderId: "550148254885",
  appId: "1:550148254885:web:b2cd5bcd9d1435889fb14c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {
  auth,
  db,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  signInWithPopup
};


export default app;