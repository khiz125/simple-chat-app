import React, { useState, useEffect } from 'react';
import SignOut from "./SignOut";
import SendMessage from "./SendMessage"
import { db, auth } from "../firebase.js";

function Chat() {

  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  },[]);

  return (
    <div>
      <SignOut />
      <div>
        {messages.map(({id, text, photoURL, uid}) => (
          <div 
            key={id}
            className={`msg ${uid === auth.currentUser.uid ? "send" : "recieve"}`}
          >
            <img src={photoURL} alt="" />
            <p>{text}</p>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  )
}

export default Chat;