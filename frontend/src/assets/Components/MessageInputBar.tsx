import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import axios from "axios";

type MessageInputBarType = {
  barInfo: {
    placeHolder: string;
    search?: boolean;
  };
};

export default function MessageInputBar(props: MessageInputBarType) {
  const [inputValue, setInputValue] = useState("");

  console.log(props);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      if (props.barInfo.search) {
        //do the serach functionality
      } else {
        //do the message functionlity
        sendMessage();
      }
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return; // Prevent sending empty messages
    try {
      const response = await axios.post("http://localhost:5555/api/messages", {
        message: inputValue,
      });
      console.log("Server response:", response.data);
      setInputValue(""); // Clear the input box after sending the message
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <Paper
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
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {props.barInfo.search && (
        <IconButton type="button" sx={{ p: "6px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      )}
    </Paper>
  );
}
