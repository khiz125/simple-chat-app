import React from 'react';
import { auth } from "../firebase.js";
import { Button } from "@mui/material";

function SignOut() {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>
        サインアウト
      </Button>
    </div>
  )
}

export default SignOut;