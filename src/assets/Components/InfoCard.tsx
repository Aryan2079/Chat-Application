import React from "react";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export type CardProps = {
  userName: string;
  imageURL: string;
};

export type InfoCardType = {
  cardInfo: CardProps[];
};

const InfoCard = (props: InfoCardType) => {
  console.log(props.cardInfo[0].userName);
  return (
    <>
      <CardActionArea>
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtAnXNHa0S6VDBRMHJDbi8gxebQN9tgWjwJ9ujBlbcwQ&s"
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Aryan Bhattarai
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                mic testing mic testing
              </Typography>
            </CardContent>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Card>
      </CardActionArea>
    </>
  );
};

export default InfoCard;
