import { Backdrop, CircularProgress, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Header />
          <Box mt={1} mb={1}> {/* Margen superior e inferior */}
            <Outlet />
          </Box>
          <Footer />
        </>
      ) : (
        <Backdrop
          sx={{ color: "#FFFF00", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

export default MainLayout;