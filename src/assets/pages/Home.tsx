import Grid from "@mui/material/Grid";
import Navbar from "../Components/Navbar";
import MessageInputBar from "../Components/MessageInputBar";
import TabButtons from "../Components/TabButtons";
import { Box, Divider } from "@mui/material";
import AllMessages from "./AllMessages";
import MessageBox from "./MessageBox";
import Profile from "./Profile";

// import "./App.css";

function Home() {
  const navLogos = ["home", "momo", "contacts"];
  const navDescription = {
    imageURL: "photu",
    titleName: "hello hello mic testing",
  };

  return (
    <>
      <Grid container spacing={1} sx={{ height: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={4}
          md={5}
          sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          {/* <Profile /> */}
          <Box sx={{ flexShrink: 0 }}>
            <Navbar
              navItems={{ logos: navLogos, description: navDescription }}
            />
            <MessageInputBar
              barInfo={{ placeHolder: "search", search: true }}
            />
            <TabButtons tabs={["item one", "item two", "item three"]} />
            <Divider />
          </Box>
          <Box sx={{ flexGrow: 1, overflowY: "scroll" }}>
            <AllMessages />
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          md={7}
          sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
        >
          <Box sx={{ flexShrink: 0 }}>
            <Navbar
              navItems={{ logos: navLogos, description: navDescription }}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <MessageBox />
            <MessageInputBar barInfo={{ placeHolder: "type message here" }} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
