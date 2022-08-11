import React from 'react';
import SignIn from './components/SignIn';
import { useAuthState } from "react-firebase-hooks/auth";
import { getFirebaseAuth } from "./firebase";
import Chat from "./components/Chat";
import "./App.css"

function App() {

  const auth = getFirebaseAuth();

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? <Chat /> : <SignIn />}
    </div>
  );
}

export default App;
