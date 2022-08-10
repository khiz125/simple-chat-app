import React, { useState } from 'react';
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import { Input } from "@mui/material";


function SendMessage() {
  const [message, setMessage] = useState('');

  function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(auth.currentUser);

    const { uid, photoURL } = auth.currentUser;

    db.collection("messages").add({
      text: message,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    setMessage("");
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div>
          <Input 
            type="text" 
            placeholder='メッセージを入力してください'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
      </form>
    </div>
  )
}

export default SendMessage