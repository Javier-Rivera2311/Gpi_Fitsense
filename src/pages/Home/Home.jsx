import React from "react";
import PageContainer from "../../components/container/PageContainer";
import { Box, Typography } from "@mui/material";
import img from "../../assets/fitness-1882721_1280.jpg";
function Home() {
  return (
    <PageContainer title="Pagina inicio" description="colocar algo">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${img})`,
          backgroundSize: "100% 90%",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: "18%",
          backgroundPosition: "top",
        }}
        minHeight={600}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          justifyContent={"center"}
          alignItems="center"
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: "white",
              textShadow: "2px 2px 4px #000000",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
            }}
          >
            FITSENSE
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              color: "white",
              textShadow: "2px 2px 4px #000000",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textAlign: "center",

            }}
          >
¡Únete a FitSense y transforma tu vida!</Typography>

        </Box>
      </Box>
      <Box
        padding={10}
        display="flex"
        flexDirection="column"
        gap={5}
        alignItems="center"
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          Descubre cómo entrenar con inteligencia puede llevarte a ser más fuerte, más saludable y más feliz. Tu camino hacia una mejor versión de ti comienza ahora.
        </Typography>

      </Box>
    </PageContainer>
  );
}

export default Home;
