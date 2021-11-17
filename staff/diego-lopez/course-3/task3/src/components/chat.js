import React, { useRef, useState } from 'react';
import '../App.css';
import { initializeApp } from 'firebase/app';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { firebaseConfig } from '../utilities/firebase';
import { getAuth } from 'firebase/auth';
import { collection,query, orderBy, limit,getFirestore,doc } from "firebase/firestore";




const firebase = initializeApp(firebaseConfig);
const auth = getAuth();
//const firestore = getFirestore();

function ChatRoom() {
    const dummy = useRef();
    const db = getFirestore();
    console.log(getFirestore(),'ciaooo')
    const messagesRef = collection(db,'messages');
    const q = query(messagesRef, orderBy("timestamp"), limit(3));
    

  
    const [messages] = useCollectionData(q, { idField: 'id' });


  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>🕊️</button>
  
      </form>
    </>)
  }
  
  
  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>)
  }

  export default ChatRoom;
  