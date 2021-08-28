import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBquXup6BcB-R8iSp8vD7OqwMlrLLZIxd4",
    authDomain: "netflix-aba96.firebaseapp.com",
    projectId: "netflix-aba96",
    storageBucket: "netflix-aba96.appspot.com",
    messagingSenderId: "257735840948",
    appId: "1:257735840948:web:fedb9b4f6db87deaeb33e1",
    measurementId: "G-KCTNQHFZBR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const send_verification = () => {
    const user = firebase.auth().currentUser;
    user.sendEmailVerification().then(() => (alert("Email has been sent"))).catch(error => alert(error.message));
}

export { auth };
export default db;