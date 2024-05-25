import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

type TabButtonsType = {
  tabs: string[];
};

export default function TabButtons(props: TabButtonsType) {
  const tabs = props.tabs;
  console.log(tabs);
  // const [value, setValue] = React.useState("1");

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  return (
    <Box sx={{ width: "100%", typography: "body1", margin: 1 }}>
      {/* <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabs.map((item, index) => (
              <Tab label={item} value={index.toString()} />
            ))}
          </TabList>
        </Box>
        {tabs.map((item, index) => (
          <TabPanel value={index.toString()}>{item}</TabPanel>
        ))}
      </TabContext> */}

      <Stack spacing={2} direction="row">
        {tabs.map((item) => (
          <Button variant="contained">{item}</Button>
        ))}
      </Stack>
    </Box>
  );
}
