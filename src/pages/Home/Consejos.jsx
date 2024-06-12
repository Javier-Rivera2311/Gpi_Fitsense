import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Consejos() {
  return (
    <Box>
    <Box sx={{ width: '99%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography sx={{color: 'orange'}} variant="h6">Calentar Antes de Entrenar:</Typography>
            <Typography sx={{color: 'lemonchiffon'}} variant="body1">Calentar prepara tus músculos y articulaciones para el esfuerzo físico, ayudando a prevenir lesiones y mejorando tu rendimiento.</Typography>
            <Typography sx={{color: 'lemonchiffon'}} variant="body1">Dedica entre 10 y 15 minutos a ejercicios de calentamiento dinámico, como estiramientos ligeros, trote suave, saltos o movimientos específicos del deporte que vayas a practicar.</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography sx={{color: 'orange'}} variant="h6">Hidratación:</Typography>
            <Typography sx={{color: 'lemonchiffon'}} variant="body1">Mantenerte hidratado es esencial para un buen rendimiento físico y para evitar calambres y fatiga.</Typography>
            <Typography sx={{color: 'lemonchiffon'}} variant="body1">Bebe agua antes, durante y después de la actividad física. Según la OMS, un adulto sano debe beber unos 35 ml de agua por cada kilo de peso al día.</Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item>
            <Typography sx={{color: 'orange'}} variant="h6">Alimentación Previa al Entrenamiento:</Typography>
            <Typography sx={{color: 'lemonchiffon'}} variant="body1">Comer adecuadamente antes de entrenar asegura que tengas suficiente energía para rendir al máximo y facilita la recuperación posterior.</Typography>
            <Typography sx={{color: 'lemonchiffon'}} variant="body1">Antes de entrenar, se recomienda comer una comida rica en proteínas y carbohidratos, y baja en grasas, entre dos horas antes de comenzar el ejercicio.</Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Box>
  );
}

export default Consejos;