"use client";
import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

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
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div>
      <h1>{seconds}s</h1>
      <button onClick={toggleTimer}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}
