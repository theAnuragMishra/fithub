"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useState } from "react";
export default function Page() {
  const [isPlaying, setIsPlaying] = useState(false);
  function togglePlay() {
    setIsPlaying(true);
  }
  return (
    <div className="w-full flex flex-col items-center">
      <Image
        width={400}
        height={400}
        src="/meditation.png"
        alt="mindfulness png"
      />
      <div>
        <Button variant="outlined" className="m-5">
          10 Min
        </Button>
        <Button variant="outlined">20 Min</Button>
      </div>
      <div className="audio-player">
        <audio src="/audios/10min1.mp3" autoPlay={false} loop={false} />
        <div className="controls">
          <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        </div>
      </div>
    </div>
  );
}
