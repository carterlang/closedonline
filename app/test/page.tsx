"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export default function TestPage() {
  const [showVideo, setShowVideo] = React.useState(false);
  const handleClick = () => setShowVideo(true);
  return (
    <html lang="en">
      <head></head>
      <body className="bg-black">
        <div>
          <video
            className=" flex fixed -z-1 opacity-50 w-screen"
            autoPlay
            loop
            disablePictureInPicture
          >
            <source src={"/assets/videobg.mp4"} className="" />
          </video>
        </div>
        <div>
          <div className="flex justify-center">
            <h1 className="relative flex bottom-300p text-white underline underline-offset-2">
              Hello
            </h1>
          </div>
          <div className="flex justify-center border-red mt-4">
            <Button
              onClick={handleClick}
              className="bg-white hover:bg-gray-300 p-8"
            >
              <p className="text-black">Push</p>
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}
