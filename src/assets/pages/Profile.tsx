import { Box, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Profile = () => {
  return (
    <Box sx={{ flexShrink: 0, height: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          width: "100%",
          height: 100,
          borderRadius: 1,
          bgcolor: "primary.main",
          display: "flex",
          //   justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <KeyboardArrowLeftIcon sx={{ color: "white", cursor: "pointer" }} />
        <Typography
          sx={{ padding: 3, color: "white", cursor: "default" }}
          variant="h5"
        >
          PROFILE
        </Typography>
      </Box>
      <Box sx={{ padding: 2, backgroundColor: "whitesmoke", height: "100%" }}>
        <Typography>Your Name</Typography>
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <Typography sx={{ paddingRight: 2, fontSize: "2rem" }}>
            Aryan Bhattarai
          </Typography>
          <BorderColorIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
