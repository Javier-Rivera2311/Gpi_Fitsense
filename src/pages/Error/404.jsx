import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import PageContainer from "../../components/container/PageContainer";
import img from "../../assets/pexels-leonardho-1552252.jpg";

const Error = () => (
  <PageContainer title="Error" description="Página de error">
    <Box
      display="flex"
      flexDirection="column"
      height="100vh"
      textAlign="center"
      justifyContent="center"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "18%",
      }}
      minHeight={600}
    >
      <Container maxWidth="md">
        <Typography align="center" variant="h1" color={"yellow"}>
          404
        </Typography>
        <Typography align="center" variant="h4" color={'yellow'}>
          This page could not be found.
        </Typography>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/"
          disableElevation
          style={{color : 'yellow', backgroundColor : 'black'}}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  </PageContainer>
);

export default Error;
