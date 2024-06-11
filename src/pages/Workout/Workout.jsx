import React from 'react';
import { Box, Typography, colors } from "@mui/material";
import Galeria from './CartaGaleria';

const Workout = () => {
  return (
    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          flexDirection: "column",
        }}
        minHeight={600}S
      >
        <Galeria/>
        </Box>    
      
  );
};

export default Workout;