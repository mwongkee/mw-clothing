import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT8iICMmLWqrMMRGc2SUMMfSxg76Q38dY",
  authDomain: "mw-clothing-db.firebaseapp.com",
  projectId: "mw-clothing-db",
  storageBucket: "mw-clothing-db.appspot.com",
  messagingSenderId: "750518731721",
  appId: "1:750518731721:web:d03bb5b2aef50cab34de18"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
