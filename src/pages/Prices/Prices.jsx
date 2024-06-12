import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#FFD700' : '#000000',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

function Prices() {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ maxWidth: '80%' }}>
        <Grid item xs={12} md={6}>
          <Item sx={{ backgroundColor: '#FFD700', color: '#800000' }}>
            <Typography variant="h5">Plan gratuito</Typography>
            <Typography variant="body1">• Planifica tu entrenamiento.</Typography>
            <Typography variant="body1">• Registra tus sesiones de entrenamiento con las series y repeticiones.</Typography>
            <Typography variant="body1">• Publica tus logros.</Typography>
            <Typography variant="body1">• Interactúa con la comunidad.</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">$0.00</Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item sx={{ backgroundColor: '#FFD700', color: '#800000' }}>
            <Typography variant="h5">Plan Pro</Typography>
            <Typography variant="body1">• Planifica tu entrenamiento.</Typography>
            <Typography variant="body1">• Registra tus sesiones de entrenamiento con las series y repeticiones.</Typography>
            <Typography variant="body1">• Publica tus logros.</Typography>
            <Typography variant="body1">• Interactúa con la comunidad.</Typography>
            <Typography variant="body1">• Conecta los sensores EMG.</Typography>
            <Typography variant="body1">• Revisa tu progreso mediante estadísticas y gráficos.</Typography>
            <Typography variant="body1">• Elimina los anuncios.</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">$5.99</Typography>
              <Typography variant="body2">Prueba el plan Pro por 7 días</Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Prices;
