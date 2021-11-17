import React, { useRef, useState } from 'react';
import '../App.css';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { getAuth } from 'firebase/auth';
import { 
  collection,
  query,
  orderBy,
  limit,
  getFirestore,
  addDoc,
  serverTimestamp
} from "firebase/firestore";


const auth = getAuth();
//const firestore = getFirestore();

function ChatRoom() {
    const dummy = useRef();
    const db = getFirestore();
    console.log(getFirestore(),'ciaooo')
    const messagesRef = collection(db,'messages');
    const q = query(messagesRef, orderBy("timestamp"), limit(20));
  
    const [messages] = useCollectionData(q, { idField: 'id' });

    const [formValue, setFormValue] = useState('');
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid } = auth.currentUser;
      console.log('send')
      await addDoc(collection(db,'messages'),{
        uid,
        text: formValue,
        timestamp: serverTimestamp()
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  console.log(sendMessage,'MESSAGE')
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage}>
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />
  
        <button type="submit" disabled={!formValue}>⚽</button>
  
      </form>
    </>)
  }
  
  function ChatMessage(props) {
    const { text, uid } = props.message;
  
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div className={`message ${messageClass}`}>
        <p>{text}</p>
      </div>
    </>)
  }

  export default ChatRoom;