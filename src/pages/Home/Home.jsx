import React from "react";
import { Link } from 'react-router-dom';
import PageContainer from "../../components/container/PageContainer";
import { Box, Typography, Button, Grid } from "@mui/material";
import img from "../../assets/3802449.png";

function Home() {
  return (
    <PageContainer title="Página inicio" description="colocar algo">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minHeight: "calc(60vh - 50px)", // Ajusta la altura para tener en cuenta el header y footer
          backgroundColor: "black",
          color: "white",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box padding={6}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  color: "gold",
                  textShadow: "2px 2px 4px #000000",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  marginBottom: 5,
                }}
              >
                Planifica tu entrenamiento con FitSense
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "lemonchiffon",
                  textShadow: "2px 2px 4px #000000",
                  marginBottom: 2,
                }}
              >
                Planifica y mide la activación muscular en tus entrenamientos con los sensores EMG usando FitSense y mejora tu rendimiento.
              </Typography>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link to="/Workout" style={{ textDecoration: 'none', display: 'inline-block' }}>
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
                    "&:hover": {
                      backgroundColor: "darkorange",
                    },
                  }}
                >
                  MIS ENTRENAMIENTOS
                </Button>
              </Link>
            </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: 500,
                height: 500,
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                margin: "0 auto", // Center the image horizontally
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default Home;