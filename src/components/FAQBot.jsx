import React, { useState } from "react";
import { Box, TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import Loader from "./Loader";
import { answerMedicalQuestion } from "../utils/geminiUtils";
import theme from "../styles/theme"; // Import the theme

const FAQBot = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAskQuestion = async () => {
    setLoading(true);
    try {
      const response = await answerMedicalQuestion(question);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: question, isUser: true },
        { text: response, isUser: false },
      ]);
      setQuestion("");
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: question, isUser: true },
        { text: "Error answering question.", isUser: false },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 600,
        margin: "0 auto", // Center the FAQBot component
      }}
    >
      <TextField
        fullWidth
        label="Ask a medical/health question"
        variant="outlined"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        sx={{
          mb: 2,
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius,
          transition: "background-color 0.3s ease", // Smooth background transition
          "&:hover": {
            backgroundColor: "#2c2c2c", // Darker background on hover
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAskQuestion}
        disabled={!question || loading}
        sx={{
          transition: "transform 0.3s ease", // Smooth hover effect
          "&:hover": {
            transform: "scale(1.05)", // Slight scale on hover
          },
        }}
      >
        Ask
      </Button>

      {loading && <Loader />}

      <List sx={{ mt: 2 }}>
        {messages.map((message, index) => (
          <ListItem
            key={index}
            sx={{
              textAlign: message.isUser ? "right" : "left",
              transition: "opacity 0.3s ease, transform 0.3s ease", // Smooth transitions
              opacity: 0, // Start hidden
              animation: "fadeIn 0.5s ease forwards", // Fade-in animation
              animationDelay: `${index * 0.1}s`, // Staggered animation delay
            }}
          >
            <ListItemText
              primary={message.text}
              sx={{
                backgroundColor: message.isUser ? "#333333" : "#444444",
                padding: "0.5rem",
                borderRadius: "4px",
                color: theme.palette.text.primary,
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FAQBot;