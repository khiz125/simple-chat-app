import React, { useState } from 'react';
import { getFirebaseDb, getFirebaseAuth } from "../firebase";
// import { GoogleAuthProvider, User, UserCredential, signInWithPopup } from 'firebase/auth';
import { Firestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firebase from "firebase/app";
import { Input, Button } from "@mui/material";


function SendMessage() {
  const [message, setMessage] = useState('');
  // const { scroll } = props
  console.log(message)

  const auth = getFirebaseAuth();
  const db = getFirebaseDb();
  const user = auth.currentUser;

  async function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await addDoc(collection(db, "messages"), {
      text: message,
      uid: user?.uid,
      photoURL: user?.photoURL,
      createdAt: serverTimestamp()
    })

    setMessage("");
    //   await scroll.current.scrollIntoView({ behaveior: "smooth" })
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input
            style={{
              width: "78%",
              fontSize: "1.8rem",
              fontWeight: "300",
              marginLeft: "2%",
              marginBottom: "-2%",
            }}
            type="text"
            placeholder='メッセージを入力してください'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <Button
            style={{
              fontSize: "1.5rem",
              fontWeight: "300",
              marginLeft: "1%",
              marginBottom: "-2%",
            }} 
            type="submit"
          >送信</Button>
        </div>
      </form>
    </div>
  )
}

export default SendMessage