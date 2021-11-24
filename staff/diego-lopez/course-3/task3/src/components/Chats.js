import React, { useRef, useState } from 'react';
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { getAuth } from 'firebase/auth';
import logo from '../assets/img/nysl_logo.png'
import { 
  collection,
  query,
  orderBy,
  limit,
  where,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";


const auth = getAuth();

//db conection
function ChatRoom() {
  const {id} = useParams();
  const dummy = useRef();
  const db = getFirestore();
  const messagesRef = collection(db,`messages`);
  
  //const q = query(messagesRef, orderBy("timestamp"), limit(20));
  const q = query(messagesRef, where("game","==",`${id}`), limit ());
  
  const [messagesData] = useCollectionData(q, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  //message writing
  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser;
    await addDoc(collection(db,`messages`),{
      uid,
      text: formValue,
      timestamp: serverTimestamp(),
      game: id,
      photoURL,
      displayName
    })
    //scroll down when new message and message button
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (<>
    <main>

      {messagesData && messagesData.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>⚽</button>

    </form>
  </>)
};


//message body
function ChatMessage(props) {
  const { text, uid, photoURL, displayName } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img alt='userPhoto' src={photoURL || logo} />
      <div style={{flexDirection: 'column'}}>
        <p id='userName'>{displayName}</p>
        <p>{`${text}nya!`}</p>
      </div>
    </div>
  </>)
};

export default ChatRoom;