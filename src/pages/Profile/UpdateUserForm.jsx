import React, { useState } from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Paper, Typography } from '@mui/material';


const UpdateUserForm = () => {
  const [edad, setEdad] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [exercise_level, setExerciseLevel] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const tokenUser = localStorage.getItem('authToken');

    if (!tokenUser) {
        alert('No se encontró el token');
        return;
      }

    // Accede al email del usuario
    const userEmail = tokenUser.email;

    const response = await fetch('http://localhost:4000/user/updateUser', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'authorization': tokenUser // reemplaza con el token del usuario
      },
      body: JSON.stringify({ userEmail, edad, altura, peso, exercise_level })
    });

    const data = await response.json();

    if (data.success) {
      alert('Información del usuario actualizada con éxito');
    } else {
      alert('Error al actualizar la información del usuario: ' + data.error);
    }
  };

  return (
    <Paper style={{ padding: '30px',  borderRadius: '20px' , display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
      <Typography variant="h5" style={{ marginTop: '20px' }}>
        Actualizar Información
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Edad" value={edad} onChange={(e) => setEdad(e.target.value)} style={{ marginTop: '10px' }} />
        <TextField label="Altura" value={altura} onChange={(e) => setAltura(e.target.value)} style={{ marginTop: '10px' }} />
        <TextField label="Peso" value={peso} onChange={(e) => setPeso(e.target.value)} style={{ marginTop: '10px' }} />
        <FormControl style={{ marginTop: '10px' }}>
        <InputLabel>Nivel de Ejercicio</InputLabel>
        <Select value={exercise_level} onChange={(e) => setExerciseLevel(e.target.value)}>
            <MenuItem value={'Poco o ningún ejercicio'}>Poco o ningún ejercicio</MenuItem>
            <MenuItem value={'Ejercicio ligero (1 - 3 días por semana)'}>Ejercicio ligero (1 - 3 días por semana)</MenuItem>
            <MenuItem value={'Ejercicio moderado (3 - 5 días por semana)'}>Ejercicio moderado (3 - 5 días por semana)</MenuItem>
            <MenuItem value={'Ejercicio fuerte (6 - 7 días por semana)'}>Ejercicio fuerte (6 - 7 días por semana)</MenuItem>
        </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>Actualizar</Button>
      </form>
    </Paper>
  );
};

export default UpdateUserForm;