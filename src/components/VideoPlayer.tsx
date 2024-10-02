import { Player } from "@remotion/player";
import { Video } from "remotion";
import React, { useEffect, useState } from "react";

interface VideoPlayerProps {
  videoSource: string;
  startTime: number;
  endTime: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSource,
  startTime,
  endTime,
}) => {
  const fps = 30;
  const trimmedDuration = endTime - startTime;

  const [initialFrame, setInitialFrame] = useState<number>(
    Math.floor(startTime * fps)
  );

  useEffect(() => {
    setInitialFrame(Math.floor(startTime * fps));
  }, [startTime]);

  return (
    <div className="flex justify-center items-center w-full h-auto">
      <Player
        component={() => (
          <div className="relative w-full h-full">
            <Video
              src={videoSource}
              className="
                  w-full h-full
                  object-cover
                  rounded-md
                  shadow-lg
                "
              startFrom={initialFrame}
            />
          </div>
        )}
        durationInFrames={Math.floor(trimmedDuration * fps)}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={fps}
        loop
        autoPlay
        controls
        className="
          w-full 
          sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 
          aspect-w-16 aspect-h-9 
          max-w-full 
          h-auto
        "
      />
    </div>
  );
};

export default VideoPlayer;
