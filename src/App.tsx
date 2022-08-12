import React from 'react';
import SignIn from './components/SignIn';
import { useAuthState } from "react-firebase-hooks/auth";
import { getFirebaseAuth } from "./firebase";
import Notification from "./components/Notification";
import Chat from "./components/Chat";
import "./App.css"

function App() {

  const auth = getFirebaseAuth();

  const [user] = useAuthState(auth);

  return (
    <>
      <div className='wrap'>
        <div className="App">
          {user ? <Chat /> : <SignIn />}
        </div>
        <Notification />
      </div>
    </>
  );
}

export default App;
