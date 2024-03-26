"use client";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseArrowOutlinedIcon from "@mui/icons-material/PauseOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import axios from "axios";
import { revalidatePath } from "next/cache";

export default function InfoStopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [noOfExercises, setNoOfExercises] = useState(0);

  useEffect(() => {
    let intervalId: any;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const pauseStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = async () => {
    setTime(0);
    setIsRunning(false);
    setTotalMinutes(totalMinutes + time / 60);
    setNoOfExercises((prevValue) => prevValue + 1);

    await axios.post("/api/add-date-to-database");
    revalidatePath("/home/community");
  };

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <>
      <div className="h-20 bg-blue-500 text-xl md:text-2xl text-white rounded-lg flex justify-center items-center mt-5 p-2 md:p-5">
        {noOfExercises} Exercises, {Math.floor(totalMinutes)} Minutes Spent
      </div>
      <div className="w-2/3 flex justify-center mt-5 mb-5">
        {!isRunning ? (
          <Button onClick={startStopwatch} variant="outlined">
            <PlayArrowOutlinedIcon />
          </Button>
        ) : (
          <Button onClick={pauseStopwatch} variant="outlined">
            <PauseArrowOutlinedIcon />
          </Button>
        )}
        <div className="text-sky-950 border-2 px-5 mx-5 border-black border-solid text-[32px] rounded-lg ">
          {formatTime(time)}
        </div>
        <Button onClick={resetStopwatch} variant="outlined">
          <ArrowForwardIosOutlinedIcon />
        </Button>
      </div>
    </>
  );
}
