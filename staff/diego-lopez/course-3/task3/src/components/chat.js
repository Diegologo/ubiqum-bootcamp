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
  serverTimestamp
} from "firebase/firestore";


const auth = getAuth();

//db conection
function ChatRoom() {
  const {id} = useParams();
  const dummy = useRef();
  const db = getFirestore();
  const messagesRef = collection(db,'messages');

  //const q =  query(messagesRef, orderBy("timestamp"), limit(20));
  const q = query(messagesRef, where("game","==",`${id}`));

  const [messages] = useCollectionData(q, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

//test await function to try to filter the messages by date once the query has filtered them by game:id
/*
const messages1 = async () => {
  let messageRef = collection(db,'messages');
  let [allmessageRef] = await  useCollectionData(q, { idField: 'id' });
 console.log(allmessageRef)
}
console.log(messages1,'oooo');
*/

  //message writing
  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    await addDoc(collection(db,'messages'),{
      uid,
      text: formValue,
      timestamp: serverTimestamp(),
      game: id,
      photoURL
    })
    //scroll down when new message and message button
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

      <button type="submit" disabled={!formValue}>⚽</button>

    </form>
  </>)
};


//message body
function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img alt='userPhoto' src={photoURL || logo} />
      <p>{`${text}nya!`}</p>
    </div>
  </>)
};

export default ChatRoom;