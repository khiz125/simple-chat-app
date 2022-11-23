import { useState, useEffect } from 'react'
import SignIn from './components/SignIn';
import { useAuthState } from "react-firebase-hooks/auth";
import { getFirebaseAuth } from "./firebase";
import Notification from "./components/Notification";
import Chat from "./components/Chat";
import "./App.css"
import { Auth } from 'firebase/auth';
import { dividerClasses } from '@mui/material';
import Lottie from "react-lottie";
import animationData from './assets/chat.json';

function App(): JSX.Element {

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const auth: Auth = getFirebaseAuth();

  const [user] = useAuthState(auth);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false);
    }, 4800)
  }, []);

  return (
    <main>
      {isLoading ?
        <div className='fadeIn'>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
            style={{ 
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fefaff',
            }}
          />
        </div>
        :
        <div className='wrap'>
          <div className="App">
            {user ? <Chat /> : <SignIn />}
          </div>
          <Notification />
        </div>
      }
    </main>
  );
}

export default App;
