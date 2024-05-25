import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

type MessageInputBarType = {
  barInfo: {
    placeHolder: string;
    search?: boolean;
  };
};

export default function MessageInputBar(props: MessageInputBarType) {
  console.log(props);
  return (
    <Paper
      component="form"
      sx={{
        p: "6px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={props.barInfo.placeHolder}
        inputProps={{ "aria-label": "search google maps" }}
      />
      {props.barInfo.search && (
        <IconButton type="button" sx={{ p: "6px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      )}
    </Paper>
  );
}
