import React from 'react';
import SignIn from './components/SignIn';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import Chat from "./components/Chat";

function App() {

  const [user] = useAuthState(auth as any);

  return (
    <div>
      {user ? <Chat /> : <SignIn />}
    </div>
  );
}

export default App;
