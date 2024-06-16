import React from 'react';
import { Box, Typography, colors } from "@mui/material";
import Galeria from './CartaGaleria';
import Consejos from "../Home/Consejos";

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
        <Consejos/>
        </Box>    
      
  );
};

export default Workout;