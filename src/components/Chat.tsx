import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import SignOut from "./SignOut";
import SendMessage from "./SendMessage"
import { getFirebaseDb, getFirebaseAuth } from "../firebase";
import { Firestore, query, collection, doc, getDoc, orderBy, onSnapshot, limit } from 'firebase/firestore';

function Chat() {
  const scroll = useRef<HTMLDivElement>(null);
  const scrollToBottomOfList = React.useCallback(() => {
    scroll!.current!.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  }, [ scroll ])

  const [messages, setMessages] = useState<any[]>([]);
  const auth = getFirebaseAuth();
  const db = getFirebaseDb();
  const user = auth.currentUser;

  useEffect(() => {

    const documents =  query(collection(db, "messages"), orderBy("createdAt"), limit(50))
    
    onSnapshot(documents, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()))})
    
    scrollToBottomOfList();
  },[]);

  return (
    <div>
      <SignOut />
      <div>
        {messages.map(({id, text, photoURL, uid}) => (
          <div 
            key={id}
            className={`msg ${user ? uid === user.uid ? "send" : "recieve" : ""}`}
          >
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        ))}
      </div>
      <SendMessage /*scroll={scroll}*/ />
      <div ref={scroll}></div>
    </div>
  )
}

export default Chat;