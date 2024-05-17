import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "black" ,py:4}}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom color="#6C5803">
              COMPANY
            </Typography>
            <Typography variant="body2" gutterBottom color="#AB8F16">
              123 Street
            </Typography>
            <Typography variant="body2" gutterBottom color="#AB8F16">
              City, Chile
            </Typography>
            
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom color="#6C5803">
              ABOUT US
            </Typography>
            <Typography variant="body2" gutterBottom color="#AB8F16">
              ABOUT US
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom color="#6C5803">
              COMMUNITY
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom color="#6C5803">
              Connect with us
            </Typography>
            <Typography variant="body2" gutterBottom>
              <a href="/contact" style={{ color: "#AB8F16" }}>
                Contact us
              </a>
            </Typography>
            <Typography variant="body2" gutterBottom>
              <a href="https://www.facebook.com/" style={{ color: "#AB8F16" }}>
                Facebook
              </a>
            </Typography>
            <Typography variant="body2" gutterBottom>
              <a href="https://www.instagram.com/" style={{ color: "#AB8F16" }}>
                Instagram
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;