import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#222831"}}>
        <Toolbar>
          <div style={{margin:"0px 10px"}} >
            <Link to="/" style={{textDecoration:"none"}}>
              <Button color="error" style={{fontSize:"20px"}}>Covid-19🎯</Button>
            </Link>
          </div>
          <div style={{margin:"0px 10px"}}>
            <Link to="/" style={{textDecoration:"none", color:"#f1f1f1f1", fontSize:"20px"}}>
              <Button color="inherit" style={{fontSize:"20px"}}>Home</Button>
            </Link>
          </div>
          <div style={{margin:"0px 10px"}}> 
            <Link to="/news" style={{textDecoration:"none", color:"#f1f1f1f1", fontSize:"20px"}}>
              <Button color="inherit" style={{fontSize:"20px"}}>news</Button>
            </Link>
          </div>
          <div style={{margin:"0px 10px"}}> 
            <Link to="/about" style={{textDecoration:"none", color:"#f1f1f1f1", fontSize:"20px"}}>
              <Button color="inherit" style={{fontSize:"20px"}}>about</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}