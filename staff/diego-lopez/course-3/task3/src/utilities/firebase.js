import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';
import 'firebase/auth';


//server
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
const firebaseSignOut = () => signOut(getAuth(firebase));


//buttons for login and logout
const SignInButton = () => (
  <button className="navbar-brand bg-light"
      onClick={() => signInWithGoogle()}>
    Sign In
  </button>
);

const SignOutButton = () => (
<button className="navbar-brand bg-light"
    onClick={() => firebaseSignOut()}>
  Sign Out
</button>
);


//login and logut
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

export { SignInButton, SignOutButton, getAuth };
export { firebaseConfig }