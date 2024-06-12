import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#000000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  function AboutUs() {
    return (
      <Box sx={{width: '99%', flexGrow: 1, mt:1  }}>
        <Typography variant="h4" component="div" gutterBottom sx={{color:'gold', textAlign: 'left'}}>
          Bienvenido a nuestra página FITSENSE. Aquí encontrarás información sobre nuestro equipo y nuestra misión.
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <Item>
              <Typography sx={{color: 'lemonchiffon', textAlign: 'left', mb:2}} variant="h4">Nuestra Misión</Typography>
              <Typography sx={{color: 'lemonchiffon', textAlign: 'left', mb:4}} variant="h6">En FitSense, creemos en el poder transformador del entrenamiento físico. Nuestra aplicación combina la última tecnología con la pasión por el fitness para ofrecerte una experiencia única que te ayudará a alcanzar tus objetivos de forma efectiva y emocionante. además de poder compartir con la comunidad y directamente con tu entrenador de confianza.</Typography>
              <Typography sx={{color: 'lemonchiffon', textAlign: 'left', mb:4}} variant="h6">Con FitSense, no se trata solo de hacer ejercicio; se trata de entrenar de manera inteligente. Nuestra aplicación utiliza sensores de electromiografía (EMG) para proporcionarte una retroalimentación precisa sobre la activación muscular durante tu entrenamiento, permitiéndote optimizar cada movimiento y maximizar tu rendimiento.</Typography>
              <Typography sx={{color: 'lemonchiffon', textAlign: 'left', mb:4}} variant="h5">Únete a nosotros y descubre cómo la combinación de entrenamiento inteligente y tecnología de vanguardia puede llevar tu rendimiento al siguiente nivel.</Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
  
  export default AboutUs;