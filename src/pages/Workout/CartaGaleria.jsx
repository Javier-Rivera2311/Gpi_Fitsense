import React from "react";
import {Card, CardContent, Typography, Button} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import {Link} from "react-router-dom";

function Galeria() {
    const cardStyle = {
      margin: "1rem",
      minWidth: "275px",
      maxWidth: "400px",
      height: "300px",
      border: "5px solid #ffeb3b",
      boxShadow: "none",
      transition: "all 0.5s cubic-bezier(0.23, 1, 0.320, 1)",
      borderRadius: "5px",
      backgroundColor: "#595959",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    };
  
    const containerStyle = {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    };

    const isSmallScreen = useMediaQuery("(max-width: 768px)");

  // Media query styles
  const mediaQueryStyle = {
    cardStyle: {
      minWidth: isSmallScreen ? "100%" : "275px",
      maxWidth: isSmallScreen ? "100%" : "400px",
    },
  };

    return(
    <div style={{ ...containerStyle }}>
      <Card sx={{ ...cardStyle, ...mediaQueryStyle.cardStyle }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Entrenamientos
          </Typography>
          <Typography variant="body1">
            Aquí encontraras una variedad de entrenamientos para que puedas realizar. Desde la parte superior del cuerpo hasta la parte inferior.
          </Typography>
          <Button
                variant="contained"
                sx={{
                  backgroundColor: "orange",
                  color: "black",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  fontSize: "1.2rem",
                  marginTop: 2,
                  display: 'grid',
                  justify: 'center',
                  marginLeft: 15,
                  "&:hover": {
                    backgroundColor: "darkorange",
                  },
                }}
              >
                <Link to="/Entrenamientos" style={{ textDecoration: 'none', color: 'inherit' }}>Acceder</Link>
            </Button>
        </CardContent>
      </Card>
      <Card sx={{ ...cardStyle, ...mediaQueryStyle.cardStyle }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Técnica de los Ejercicios
          </Typography>
          <Typography variant="body1">
            Aquí podrás encontrar la técnica correcta para realizar 
            los ejercicios de manera segura y efectiva.
          </Typography>
          <Button
                variant="contained"
                sx={{
                  backgroundColor: "orange",
                  color: "black",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  fontSize: "1.2rem",
                  marginTop: 2,
                  display: 'grid',
                  justify: 'center',
                  marginLeft: 15,
                  "&:hover": {
                    backgroundColor: "darkorange",
                  },
                }}
              >
                <Link to="/Tecnica" style={{ textDecoration: 'none', color: 'inherit' }}>Acceder</Link>
            </Button>
        </CardContent>
      </Card>
      
      <Card sx={{ ...cardStyle, ...mediaQueryStyle.cardStyle }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Crear Rutina
          </Typography>
          <Typography variant="body1">
            Aquí podrás crear tu propia rutina de entrenamiento.
          </Typography>
          <Button
                variant="contained"
                sx={{
                  backgroundColor: "orange",
                  color: "black",
                  fontWeight: "bold",
                  padding: "10px 20px",
                  fontSize: "1.2rem",
                  marginTop: 2,
                  display: 'grid',
                  justify: 'center',
                  marginLeft: 15,
                  "&:hover": {
                    backgroundColor: "darkorange",
                  },
                }}
              >
                <Link to="/CreateRoutine" style={{ textDecoration: 'none', color: 'inherit' }}>Acceder</Link>
            </Button>
        </CardContent>
      </Card>

    </div>
    )
}

export default Galeria;