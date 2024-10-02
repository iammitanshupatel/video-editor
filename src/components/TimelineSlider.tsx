import React from "react";

interface TimelineSliderProps {
  startTime: number;
  endTime: number;
  videoDuration: number;
  onTrimChange: (start: number, end: number) => void;
}

const TimelineSlider: React.FC<TimelineSliderProps> = ({
  startTime,
  endTime,
  videoDuration,
  onTrimChange,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isStart: boolean
  ) => {
    const newValue = parseInt(e.target.value);

    // Ensure startTime and endTime are within valid range
    if (isStart) {
      if (newValue < 0 || newValue >= endTime) return;
      onTrimChange(newValue, endTime);
    } else {
      if (newValue > videoDuration || newValue <= startTime) return;
      onTrimChange(startTime, newValue);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Start Time Slider */}
      <input
        type="range"
        min="0"
        max={endTime - 1} // Prevent startTime from overlapping endTime
        value={startTime}
        onChange={(e) => handleChange(e, true)}
        className="w-full mb-4"
      />

      {/* End Time Slider */}
      <input
        type="range"
        min={startTime + 1} // Prevent endTime from overlapping startTime
        max={videoDuration}
        value={endTime}
        onChange={(e) => handleChange(e, false)}
        className="w-full"
      />
    </div>
  );
};

export default TimelineSlider;
