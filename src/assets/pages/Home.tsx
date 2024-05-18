import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Navbar from "../Components/Navbar";
import MessageInputBar from "../Components/MessageInputBar";

// import "./App.css";

function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const navLogos = ["home", "momo", "contacts"];
  const navDescription = {
    imageURL: "photu",
    titleName: "hello hello mic testing",
  };
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4} md={5}>
          <Item>
            <Navbar
              navItems={{ logos: navLogos, description: navDescription }}
            />
            <MessageInputBar />
          </Item>
        </Grid>
        <Grid
          item
          sm={8}
          md={7}
          display={{ xs: "none", md: "block", sm: "block" }}
        >
          <Item>
            <Navbar
              navItems={{ logos: navLogos, description: navDescription }}
            />
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
