import firebase from "firebase";
import { firebaseConfig } from "../../Configurations";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebasedatabase = firebaseApp.firestore();
const auth = firebase.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();

export { auth, authProvider };
export default firebasedatabase;
