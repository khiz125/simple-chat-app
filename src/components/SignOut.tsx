import React from 'react';
import { getFirebaseAuth } from "../firebase";
import { Button } from "@mui/material";

function SignOut() {
  const auth = getFirebaseAuth();
  
  return (
    <div className='header'>
      <Button 
        onClick={() => auth.signOut()}
        style={{ color: "#333", fontSize: "2.5rem" }}
      >
        サインアウト
      </Button>
    </div>
  )
}

export default SignOut;