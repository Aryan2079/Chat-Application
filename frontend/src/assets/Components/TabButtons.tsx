import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

type TabButtonsType = {
  tabs: string[];
};

export default function TabButtons(props: TabButtonsType) {
  const tabs = props.tabs;
  console.log(tabs);

  return (
    <Box sx={{ width: "100%", typography: "body1", margin: 1 }}>
      <Stack spacing={2} direction="row">
        {tabs.map((item) => (
          <Button variant="contained">{item}</Button>
        ))}
      </Stack>
    </Box>
  );
}
