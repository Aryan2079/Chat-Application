import React from "react";
import Box from "@mui/material/Box";
import InfoCard, { CardProps } from "../Components/InfoCard";
import { Stack } from "@mui/material";

const AllMessages = () => {
  const userArray: CardProps[] = [
    { userName: "aryan", imageURL: "hello hello mic testing" },
    { userName: "aryan", imageURL: "hello hello mic testing" },
    { userName: "aryan", imageURL: "hello hello mic testing" },
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          //   height: "calc(100vh-500px)",
          typography: "body1",
          overflow: "hidden",
          //   objectFit: "fit",
          //   backgroundColor: "yellow",
        }}
      >
        <Stack spacing={2}>
          <InfoCard cardInfo={userArray} />
          <InfoCard cardInfo={userArray} />
          <InfoCard cardInfo={userArray} />
          <InfoCard cardInfo={userArray} />
          <InfoCard cardInfo={userArray} />
          <InfoCard cardInfo={userArray} />
          {/* <InfoCard cardInfo={userArray} /> */}
          {/* <InfoCard cardInfo={userArray} /> */}
        </Stack>
      </Box>
    </>
  );
};

export default AllMessages;
