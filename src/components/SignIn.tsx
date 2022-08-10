import React from 'react';
import firebase from "firebase/app";
import { GoogleAuthProvider, User, UserCredential, signInWithPopup } from 'firebase/auth';
import { getFirebaseAuth } from "../firebase"

import { Button } from "@mui/material";

function SignIn() {

  const auth = getFirebaseAuth()

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  return (
    <div>
      <Button onClick={signInWithGoogle}>
        グーグルでログインする
      </Button>
    </div>
  )
}

export default SignIn;