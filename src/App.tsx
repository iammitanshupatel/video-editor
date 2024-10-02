import React, { useState } from "react";
import VideoPlayer from "./components/VideoPlayer";
import TimelineSlider from "./components/TimelineSlider";
import TrimControls from "./components/TrimControls";
import {
  setTrimPoints,
  resetTrimPoints,
  setVideoSource,
} from "./redux/videoSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { videoSource, startTime, endTime, videoDuration } = useAppSelector(
    (state) => state.video
  );
  const [videoFile, setVideoFile] = useState<File | null>(null);

  // Handle video file selection
  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setVideoFile(file);

      const videoUrl = URL.createObjectURL(file);

      const videoElement = document.createElement("video");
      videoElement.src = videoUrl;
      videoElement.onloadedmetadata = () => {
        dispatch(
          setVideoSource({
            source: videoUrl,
            videoDuration: videoElement.duration,
          })
        );
        dispatch(
          setTrimPoints({ startTime: 0, endTime: videoElement.duration })
        );
      };
    }
  };

  const handleTrimChange = (start: number, end: number) => {
    dispatch(setTrimPoints({ startTime: start, endTime: end }));
  };

  const handleReset = () => {
    dispatch(resetTrimPoints());
  };

  return (
    <div className="p-4">
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        className="mb-4"
      />

      {videoSource ? (
        <>
          <VideoPlayer
            videoSource={videoSource}
            startTime={startTime}
            endTime={endTime}
          />
          <TimelineSlider
            startTime={startTime}
            endTime={endTime}
            videoDuration={videoDuration}
            onTrimChange={handleTrimChange}
          />
          <TrimControls
            startTime={startTime}
            endTime={endTime}
            onReset={handleReset}
          />
        </>
      ) : (
        <p className="text-center">Please upload a video to start editing.</p>
      )}
    </div>
  );
};

export default App;
