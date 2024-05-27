import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useComponentContext } from "../context/profileSwitchContext";

type NavbarType = {
  navItems: {
    logos: string[];
    description: {
      imageURL: string;
      titleName?: string;
    };
  };
};

export default function Navbar(props: NavbarType) {
  // console.log("props", props);
  const { toggleComponent } = useComponentContext();
  return (
    <Box sx={{ display: "flex", marginBottom: "1rem" }}>
      <CssBaseline />
      <AppBar component="nav" position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "nowrap",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "block" }, cursor: "pointer" }}
            onClick={toggleComponent}
          >
            {props.navItems.description.imageURL}
            {props.navItems.description.titleName}
          </Typography>

          <Box sx={{ display: { xs: "block" } }}>
            {props.navItems.logos.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
