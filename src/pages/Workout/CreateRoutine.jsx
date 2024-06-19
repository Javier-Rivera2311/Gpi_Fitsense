import React, { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, Paper } from "@mui/material";

const CreateRoutine = () => {
  const [routineName, setRoutineName] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:4000/user/createRoutine', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, routine_name: routineName, description })
    });

    const data = await response.json();

    if (data.success) {
      alert('Rutina creada con éxito');
    } else {
      alert('Error al crear la rutina: ' + data.error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "97%",
        height: "97%",
        flexDirection: "column",
      }}
      minHeight={600}
    >
      <Grid container spacing={2} sx={{ml:1}}>
        <Grid item xs={4}>
          <Paper sx={{ height: '99%', backgroundColor: 'grey.500' }}>
            <Typography>Lorem ipum dolor sit amet consectetur adipisicing elit...</Typography>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Grid container direction="column" spacing={3}>
            <Grid item xs>
              <Box sx={{ flexGrow: 1, backgroundColor: 'grey.500', p: 2 }}>
                <Typography>Grid derecho superior</Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextField
                    label="Nombre de rutina"
                    value={routineName}
                    onChange={(e) => setRoutineName(e.target.value)}
                  />
                  <TextField
                    label="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <Button type="submit">Crear rutina</Button>
                </form>
              </Box>
            </Grid>
            <Grid item xs>
              <Box sx={{ flexGrow: 1, backgroundColor: 'grey.500', p: 2 }}>
                <Typography>Grid derecho inferior</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateRoutine;