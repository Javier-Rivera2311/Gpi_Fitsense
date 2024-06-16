import React from "react";
import {Card, CardContent, Typography, Button, Box} from "@mui/material";
import {  useMediaQuery } from "@mui/material";

function Entrenamientos() {

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

  return (
    <div>
    <Card>
        <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Proximamente
            </Typography>
            <Typography variant="body1">
            Proximamente
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
                    placeItems: 'center',
                    }}
                    href="/Entrenamientos"
                >
                    Proximamente
                </Button>
        </CardContent>
    </Card>
    </div>
  );
}
export default Entrenamientos;