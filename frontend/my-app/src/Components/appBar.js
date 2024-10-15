import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoBarber from '../Assets/Images/logoBarber.jpg'
import { useNavigate } from 'react-router-dom';

export default function BasicAppBar() {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');  
  };
  return (
      <AppBar position="static" sx={{ bgcolor: "black", flexGrow: 1 }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <img src={LogoBarber} alt='logoBarber' style={{ position: "inherit", top: "-10px" }} onClick={() => { handleHome() }}></img>
        </Toolbar>
      </AppBar>
  );
}
