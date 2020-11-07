import React, { useState, useRef } from 'react';
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { getCurrentTime } from "./utils/timer";
import { Debug } from './Components/Debug'

export default function App() {
  const [paused, setPaused] = useState(false);
  const videoRef = useRef();

  const Play = () => {
    const v = videoRef.current;

    if (v.paused) {
      v.play();
      setCurrentTime();
    } else v.pause();

    setPaused(!v.paused);
  };

  const setCurrentTime = () => {
    const v = videoRef.current;
    v.currentTime = getCurrentTime("04:12");
    v.play();
  };

  const readyToDanceConga = () => {
    setCurrentTime();
    setPaused(true);
  };

  return (
    <>
      <Box
        ref={videoRef}
        component="video"
        width="100%"
        loop
        onLoadedData={readyToDanceConga}
      >
        <source
          src="https://primerapruebaweb.000webhostapp.com/videos/Ditto-dancing-Conga.mp4"
          type="video/mp4"
        />
        <source
          src="https://primerapruebaweb.000webhostapp.com/videos/Ditto-dancing-Conga.ogg"
          type="video/ogg"
        />
        ditto dancing conga
      </Box>
      <Box
        top={0}
        left={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <FormControlLabel
          control={<Switch checked={paused} onChange={Play} name="checkedB" />}
          label={paused ? "PAUSE" : "PLAY"}
        />
      </Box>
      <Debug />
    </>
  );
}