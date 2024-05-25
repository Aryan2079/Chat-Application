import { Box, Paper, Typography, boxClasses } from "@mui/material";
import React from "react";

const MessageBox = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "1%",
        overflowY: "scroll",
        // maxHeight: "83vh",
        height: "calc(100vh - 150px)",
        backgroundColor: "skyblue",
      }}
    >
      <Paper elevation={3} sx={{ padding: "15px", marginBottom: "10px" }}>
        <Typography variant="body1">Message 1</Typography>
        <Typography variant="body2" color="textSecondary">
          Sender: User 1
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ padding: "15px", marginBottom: "10px" }}>
        <Typography variant="body1">Message 2</Typography>
        <Typography variant="body2" color="textSecondary">
          Sender: User 2
        </Typography>
      </Paper>
      {/* Add more messages as needed */}
    </Box>
  );
};

export default MessageBox;
