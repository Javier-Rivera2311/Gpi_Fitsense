import React, { useState } from 'react';
import { Button, TextField, Paper, Typography } from '@mui/material';

const Contact = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Aquí puedes enviar los datos del formulario a tu servidor o API
    // Por ejemplo:
    // const response = await fetch('http://localhost:4000/user/contact', {
    //   method: 'post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ nombre, email, comentario })
    // });
    // const data = await response.json();
    // if (data.success) {
    //   alert('Comentario enviado con éxito');
    // } else {
    //   alert('Error al enviar el comentario: ' + data.error);
    // }
  };

  return (
    <Paper style={{ padding: '30px', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
      <Typography variant="h5" style={{ marginTop: '20px' }}>
        Contacto
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} style={{ marginTop: '10px' }} />
        <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginTop: '10px' }} />
        <TextField label="Comentario" value={comentario} onChange={(e) => setComentario(e.target.value)} style={{ marginTop: '10px' }} multiline rows={4} />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>Enviar</Button>
      </form>
    </Paper>
  );
};

export default Contact;