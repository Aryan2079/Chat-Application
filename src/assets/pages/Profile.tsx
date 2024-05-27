import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useComponentContext } from "../context/profileSwitchContext";

const Profile = () => {
  const { toggleComponent } = useComponentContext();
  return (
    <Box sx={{ flexShrink: 0, height: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          width: "100%",
          height: 100,
          borderRadius: 1,
          bgcolor: "primary.main",
          display: "flex",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <IconButton aria-label="delete" onClick={toggleComponent}>
          <KeyboardArrowLeftIcon sx={{ color: "white", cursor: "pointer" }} />
        </IconButton>
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
