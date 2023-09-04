import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "./components/IconButton";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Input } from "@mui/material";

import RadioGroup from "./components/RadioGroup";

const App = () => {
  const [paused, setPaused] = useState(false);
  // const [selectedValue, setSelectedValue] = useState("a");

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "yellow",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton
          icon={<AddCircleIcon fontSize="large" />}
          text="import"
          width={"70px"}
        />
        {paused ? (
          <IconButton
            icon={<PlayCircleFilledWhiteIcon fontSize="large" />}
            text="start"
            width={"70px"}
          />
        ) : (
          <IconButton
            icon={<PauseCircleIcon fontSize="large" />}
            text="pause"
            width={"70px"}
          />
        )}
        <IconButton
          icon={<LogoutIcon fontSize="large" />}
          text="logout"
          width={"70px"}
        />
        <IconButton
          icon={<CancelIcon fontSize="large" />}
          text="quit"
          width={"70px"}
        />
        <Box sx={{ backgroundColor: "red" }}>
          <Box>
            <Input placeholder="Notification Email" sx={{ width: "100%" }} />
          </Box>
          <Box>
            <RadioGroup options={["Stream all tracks", "Stream one track"]} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;
