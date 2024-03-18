"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useState } from "react";
import AudioPlayer from "@/app/ui/mindfulness/audio-player";

export default function Page() {
  return (
    <div className="w-full flex flex-col items-center">
      <Image
        width={500}
        height={500}
        src="/meditation.png"
        alt="mindfulness png"
      />
      <div>
        <Button variant="outlined" className="m-2">
          10 Min
        </Button>
        <Button variant="outlined" className="m-2">
          20 Min
        </Button>
      </div>
      <div className="audio-player">
        {/* <audio
          src="/audios/10min1.mp3"
          autoPlay={false}
          loop={false}
          controls
        /> */}

        <AudioPlayer src="" />
      </div>
    </div>
  );
}
