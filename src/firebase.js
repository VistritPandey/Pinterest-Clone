import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtQqoW4-vpQ43jzvicGDWQLmebphCWYo8",
  authDomain: "vistrit-pinterest.firebaseapp.com",
  projectId: "vistrit-pinterest",
  storageBucket: "vistrit-pinterest.appspot.com",
  messagingSenderId: "363880974457",
  appId: "1:363880974457:web:716039f647a7bbeb0c2ca8",
  measurementId: "G-JPWFD9W2RM",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
