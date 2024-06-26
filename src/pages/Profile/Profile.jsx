import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Avatar, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import fondo1 from "../../assets/fitness-1882721_1280.jpg";
import UpdateUserForm from './UpdateUserForm';


const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('authToken'));
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, []);

  return (
    <Box 
      component="main" 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      height="80vh"
      position="relative"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        style={{ 
          backgroundImage: `url(${fondo1})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          filter: 'brightness(30%)',
          zIndex: -1
        }}
      />
      <Paper style={{ padding: '30px',  borderRadius: '20px' , display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <Avatar>{name.charAt(0)}</Avatar>
        <Typography variant="h5" style={{ marginTop: '20px' }}>
          {name}
        </Typography>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          {email}
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/auth/newpassword" style={{ marginTop: '20px' , backgroundColor: '#AB8F16' }}>
          Cambiar contraseña
        </Button>
      </Paper>
      <box style={{ marginTop: '20px' }}>
      <UpdateUserForm />
      </box>
    </Box>
  );
};

export default Profile;