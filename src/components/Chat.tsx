import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Navbar from "./Navbar";
import SendMessage from "./SendMessage"
import { getFirebaseDb, getFirebaseAuth } from "../firebase";
import { query, collection, orderBy, onSnapshot, limit, DocumentData } from 'firebase/firestore';
import Moment from "react-moment"


function Chat() {
  const scroll = useRef<HTMLDivElement>(null);

  // const scrollToBottomOfList = React.useCallback(() => {
  //   scroll!.current!.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'end',
  //   })
  // }, [ scroll ])

  const [messages, setMessages] = useState<DocumentData[]>([]);
  const auth = getFirebaseAuth();
  const db = getFirebaseDb();
  const user = auth.currentUser;

  useEffect(() => {
    const documents =  query(collection(db, "messages"), orderBy("createdAt"), limit(50))
    
    onSnapshot(documents, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()))})
    
    // scrollToBottomOfList();
  },[]);

  const scrollBottomRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    scrollBottomRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [messages]);

 

  return (
    <div>
      <Navbar />
      <div className='messages'>
        {messages.map(({id, text, photoURL, uid, createdAt}) => (
          <div
            key={id}
            className={`msg ${uid === user?.uid ? "sent" : "received"}`}
          >
            <img src={photoURL} alt="" />
            <p>
              {text}
              <br />
              <small><Moment fromNow>{createdAt.toDate()}</Moment></small>
            </p>
          </div>
        ))}
        <div ref={scrollBottomRef}/>
      </div>
      <SendMessage />
    </div>
  )
}

export default Chat;