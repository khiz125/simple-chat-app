import React from 'react';
import { getFirebaseAuth } from "../firebase";
import { Button } from "@mui/material";
import * as Message from "react-icons/bi";
import TemplateMessages from "./TemplateMessages"

import SwipeableDrawer from '@mui/material/SwipeableDrawer';

function Navbar() {

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const auth = getFirebaseAuth();

  return (
    <header>
      <div className='header-wapper'>
        <div className='navbar'>
          <Message.BiMessageDetail 
            className='menu'
            onClick={toggleDrawer(true)}
          />
          <Button
            onClick={() => auth.signOut()}
            style={{
              color: "rgb(82, 82, 82)",
              fontSize: "2.0rem",
              position: "fixed",
              right: "5%"
            }}
          >
            サインアウト
          </Button>
          <SwipeableDrawer
            anchor="bottom"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <TemplateMessages />
          </SwipeableDrawer>
        </div>
      </div>
    </header>
  )
}

export default Navbar;