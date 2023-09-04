import { Box, Typography } from "@mui/material";
import React from "react";

const IconButton = ({ icon, text, width, height }) => {
  const containerStyles = {
    width,
    height: height ? height : width,
    backgroundColor: "pink",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box sx={containerStyles}>
      <Box sx={{ textAlign: "center", mb: -1 }}>{icon}</Box>
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ textTransform: "capitalize" }} variant="h6">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default IconButton;
