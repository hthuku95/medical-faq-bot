import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Loader = () => (
  <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
    <CircularProgress />
  </Box>
);

export default Loader;