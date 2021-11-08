import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCO_kw8GpINjKoVL7KhASxxC7LKnuvzwq0",
    authDomain: "ubiqum-course-3.firebaseapp.com",
    databaseURL: "https://ubiqum-course-3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "ubiqum-course-3",
    storageBucket: "ubiqum-course-3.appspot.com",
    messagingSenderId: "4525090014",
    appId: "1:4525090014:web:754070ce3304a62b0fce4f"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    if (devMode) { console.log(`loading ${path}`); }
    return onValue(dbRef, (snapshot) => {
      const val = snapshot.val();
      if (devMode) { console.log(val); }
      setData(transform ? transform(val) : val);
      setLoading(false);
      setError(null);
    }, (error) => {
      setData(null);
      setLoading(false);
      setError(error);
    });
  }, [path, transform]);

  return [data, loading, error];
};

export default useData;