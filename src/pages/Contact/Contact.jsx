import React from 'react';
import { Button, TextField, Paper, Typography } from '@mui/material';

const Contact = () => {
  return (
    <div style={{ marginTop: '20px' , padding: '20px', display: 'flex', flexDirection: 'column', alignItems:'center'}}>
      <Paper style={{ padding: '30px', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <Typography variant="h5" style={{ marginTop: '20px' }}>
          Contacto
        </Typography>
        <form method="POST" action="https://formsubmit.co/f03fdcd2bcd80fa0078d6e18598e6251" encType="multipart/form-data" style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField label="Nombre" type="text" name="name" style={{ marginTop: '10px', padding: '10px' }} />
          <TextField label="Tu correo" type="email" name="email" style={{ marginTop: '10px', padding: '10px' }} />
          <TextField label="Asunto" type="text" name="asunto" style={{ marginTop: '10px', padding: '10px' }} />
          <TextField label="Mensaje" name="message" multiline rows={4} style={{ marginTop: '10px', padding: '10px' }} />
          <Button variant="contained" type="submit" style={{ marginTop: '20px', backgroundColor: '#AB8F16' }}>Send email</Button>
        </form>
      </Paper>
    </div>
  );
};

export default Contact;


