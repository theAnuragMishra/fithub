"use client";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseArrowOutlinedIcon from "@mui/icons-material/PauseOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

export default function Tracker() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [playPauseIcon, setPlayPauseIcon] = useState(<PlayArrowOutlinedIcon />);

  useEffect(() => {
    let interval: any;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const toggleTimer = () => {
    setIsActive((prevIsActive) => !prevIsActive);
    setPlayPauseIcon((prevIcon) => {
      return prevIcon.type === PlayArrowOutlinedIcon ? (
        <PauseArrowOutlinedIcon />
      ) : (
        <PlayArrowOutlinedIcon />
      );
    });
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="w-2/3 flex justify-center mt-5 mb-5">
      <Button onClick={toggleTimer} variant="outlined" className="h-10 w-20">
        {playPauseIcon}
      </Button>
      <Button disabled variant="outlined" className="h-10 w-20 text-xl">
        {seconds}
      </Button>
      <Button variant="outlined" className="h-10 w-20" onClick={resetTimer}>
        <ArrowForwardIosOutlinedIcon />
      </Button>
    </div>
  );
}
