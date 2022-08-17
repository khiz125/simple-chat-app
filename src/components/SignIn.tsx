import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirebaseAuth } from "../firebase"

import { Button } from "@mui/material";



function SignIn() {

  const auth = getFirebaseAuth()

  function signInWithGoogle() {
    const provider: GoogleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  return (
    <div className='signin'>
      <div>シンプルチャットへようこそ!</div>
      <div>グーグルアカウントでログインする</div>
      <Button
        onClick={signInWithGoogle}
        style={{
          color: "#333",
          margin: "10%",
          padding: "0 10%",
          border: "1px solid lightgray",
          fontSize: "2.5rem",
          fontWeight: "100"
        }}
      >
      ログイン
    </Button>
    </div >
  )
}

export default SignIn;