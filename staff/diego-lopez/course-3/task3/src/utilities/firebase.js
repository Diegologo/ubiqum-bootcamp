import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA7IQCKssE6prFPhcU1gFGKWH1oKK298QI",
  authDomain: "ubiqum-course3-task3.firebaseapp.com",
  databaseURL: "https://ubiqum-course3-task3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ubiqum-course3-task3",
  storageBucket: "ubiqum-course3-task3.appspot.com",
  messagingSenderId: "899069188716",
  appId: "1:899069188716:web:ea5b551477ed96fb139649"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
const firebaseSignOut = () => signOut(getAuth(firebase));

const SignInButton = () => (
  <button className="btn btn-secondary btn-sm"
      onClick={() => signInWithGoogle()}>
    Sign In
  </button>
);

const SignOutButton = () => (
<button className="btn btn-secondary btn-sm"
    onClick={() => firebaseSignOut()}>
  Sign Out
</button>
);

export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
  };
export const useUserState = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onIdTokenChanged(getAuth(firebase), setUser);
  }, []);

  return [user];
};

export { SignInButton, SignOutButton, getAuth};