import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCkOaafmzhKaSSpY2Kgy2_FSqThqDjRY6Q",
  authDomain: "authentication-247ce.firebaseapp.com",
  databaseURL: "https://authentication-247ce-default-rtdb.firebaseio.com",
  projectId: "authentication-247ce",
  storageBucket: "authentication-247ce.appspot.com",
  messagingSenderId: "1066835457540",
  appId: "1:1066835457540:web:62c4a8ff35ee65fdb8a751",
  measurementId: "G-SHP1Z40XXW",
};

async function SignupFirebase(userInfo) {
  const { email, password } = userInfo;
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await addUserToDB(userInfo, userCredential.user.uid);
}

function signinFirebase(loginEmail, loginPassword) {
  return signInWithEmailAndPassword(auth, loginEmail, loginPassword);
}
const addUserToDB = async () => {
  const uid = auth.currentUser.uid;
  var userProfile = { email: "", name: "", photoURL: "" };
  userProfile.email = auth.currentUser.email;
  userProfile.name = auth.currentUser.displayName;
  userProfile.photoURL = auth.currentUser.photoURL;

  return setDoc(doc(db, "users", uid), userProfile);
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
// console.log("API Key:", process.env.REACT_APP_FIREBASE_API_KEY);

export {
  GoogleAuthProvider,
  SignupFirebase,
  
  addDoc,
  addUserToDB,
  collection,
  createUserWithEmailAndPassword,
  deleteDoc,
  doc,
  getAuth,
  getDoc,
  getDocs,
  getDownloadURL,
  onAuthStateChanged,
  onSnapshot,
  query,
  ref,
  serverTimestamp,
  setDoc,
  signInWithPopup,
  signinFirebase,
  updateDoc,
  uploadBytes,
  where,
};
