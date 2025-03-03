import React from "react";
import { Container, Typography, Box, CssBaseline } from "@mui/material";
import FAQBot from "./components/FAQBot";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Reset CSS and apply theme globally */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // Full viewport height
          backgroundColor: theme.palette.background.default, // Dark background
          padding: "2rem", // Add padding
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            textAlign: "center",
            backgroundColor: theme.palette.background.paper, // Slightly lighter background
            borderRadius: theme.shape.borderRadius, // Rounded corners
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)", // Subtle shadow
            padding: "2rem", // Inner padding
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            AI-Powered Medical FAQ Bot
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Ask your medical/health-related questions below.
          </Typography>
          <FAQBot />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;