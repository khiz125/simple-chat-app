import React from 'react';
import { getFirebaseAuth } from "../firebase";
import { Button } from "@mui/material";

function SignOut() {
  const auth = getFirebaseAuth();
  
  return (
    <div>
      <Button onClick={() => auth.signOut()}>
        サインアウト
      </Button>
    </div>
  )
}

export default SignOut;