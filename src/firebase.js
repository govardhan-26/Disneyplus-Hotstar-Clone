import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDhX8OfIm1XpJ8X6GgZjKQhK_YbDiLy6z4",
    authDomain: "disneyhotstar-clone-2b3f6.firebaseapp.com",
    projectId: "disneyhotstar-clone-2b3f6",
    storageBucket: "disneyhotstar-clone-2b3f6.appspot.com",
    messagingSenderId: "1027742623324",
    appId: "1:1027742623324:web:94313590d2a51fdc4aa899",
    measurementId: "G-F7TT54DCQC"
  };

  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;