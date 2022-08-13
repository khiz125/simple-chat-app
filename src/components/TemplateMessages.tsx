import React from 'react'
import { getFirebaseDb, getFirebaseAuth } from "../firebase";
import { Firestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

function TemplateMessages() {

  const auth = getFirebaseAuth();
  const db = getFirebaseDb();
  const user = auth.currentUser;

  async function sendMessage(event: string) {

    await addDoc(collection(db, "messages"), {
      text: event,
      uid: user?.uid,
      photoURL: user?.photoURL,
      createdAt: serverTimestamp()
    })
  }
  return (
    <>
      <div className='msgContainer'>
        <ul>
          <li 
            onClick={(e) => sendMessage(e.currentTarget.innerText)}
          >緊急</li>
          <li 
            onClick={(e) => sendMessage(e.currentTarget.innerText)}
          >電話ください</li>
          <li
            onClick={(e) => sendMessage(e.currentTarget.innerText)}
          >無事です</li>
          <li
            onClick={(e) => sendMessage(e.currentTarget.innerText)}
          >外出中</li>
        </ul>
      </div>
    </>
  )
}

export default TemplateMessages