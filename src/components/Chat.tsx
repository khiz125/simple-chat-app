import React, { useState, useEffect } from 'react';
import SignOut from "./SignOut";
import { db } from "../firebase.js";

function Chat() {

  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()))
    });
  },[]);

  return (
    <div>
      <SignOut />
      <div>
        {messages}
      </div>
    </div>
  )
}

export default Chat;